import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from '../../../api/axios';
import Modal from '../../ui/Modal';
import { FeedbackType } from '../../../types/FeedbacKType';
import ReportIcon from '../../../assets/icons/misc/report.svg?react';
import Select from '../../ui/Select';

type UpdateStatusType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  openedModalFeedbackId: string;
  setFeedbacks: React.Dispatch<React.SetStateAction<FeedbackType[]>>;
  feedbacks: FeedbackType[];
};

const UpdateStatus: React.FC<UpdateStatusType> = ({
  isModalOpen,
  setIsModalOpen,
  openedModalFeedbackId,
  setFeedbacks,
  feedbacks
}) => {
  const [feedbackStatus, setFeedbackStatus] = useState<string>('');

  useEffect(() => {
    const selectedFeedback = feedbacks.find(
      (feedback) => feedback._id === openedModalFeedbackId
    );
    if (selectedFeedback) {
      setFeedbackStatus(selectedFeedback.status);
    }
  }, [openedModalFeedbackId]);

  const handleUpdateFeedbackStatus = async () => {
    try {
      const response = await axios.put(
        `/feedback/${openedModalFeedbackId}`,
        {
          status: feedbackStatus
        },
        {
          withCredentials: true
        }
      );
      if (response?.data?.success === true) {
        if (response?.data?.data as FeedbackType) {
          setFeedbacks((prev: FeedbackType[]) =>
            prev.map((feedback: FeedbackType) => {
              if (feedback._id === openedModalFeedbackId) {
                return {
                  ...feedback,
                  status: feedbackStatus
                };
              } else {
                return feedback;
              }
            })
          );
          toast.success('Feedback status updated successfully!');
        }
      }
    } catch (error) {
      console.log('Failed to update feedback status: ', error);
      toast.error('Failed to update feedback status');
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={setIsModalOpen} title={''}>
      <div className="update-status">
        <h1 className="update-status__title">Update Status</h1>
        <p className="update-status__label">Select Status</p>
        <Select
          Icon={ReportIcon}
          state={feedbackStatus}
          setState={setFeedbackStatus}
          selectOptions={['new', 'under review', 'closed', 'rejected']}
        />
        <p className="update-status__message">
          Please update the status to reflect the current state of this feedback
        </p>
        <button
          disabled={!feedbackStatus}
          className="update-status__submit-button"
          onClick={handleUpdateFeedbackStatus}
        >
          Update Status
        </button>
      </div>
    </Modal>
  );
};

export default UpdateStatus;
