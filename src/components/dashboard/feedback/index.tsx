import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import toast from 'react-hot-toast';
import FeedbackTableHeaders from './FeedbackTableHeaders';
import DataGrid from '../../dataGrid';
import { FeedbackType } from '../../../types/FeedbacKType';
import UpdateStatus from './UpdateStatus';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[] | []>([]);
  const [isChangeStatusModalOpen, setIsChangeStatusModalOpen] = useState(false);
  const [openedModalFeedbackId, setOpenedModalFeedbackId] = useState('');
  const auth = useAuth();
  const profileData = auth?.auth && auth?.auth;
  const profileId = profileData && profileData?._id;
  console.log('PROFILE ID: ', profileId);
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('/feedback', {
          withCredentials: true
        });

        if (response?.data?.success) {
          setFeedbacks(
            response?.data?.data.map((data: FeedbackType, index: number) => {
              return {
                ...data,
                sNo: index + 1
              };
            })
          );
        }
      } catch (error) {
        console.log('Failed to fetch feedbacks: ', error);
        toast.error('Failed to fetch feedbacks.');
      }
    };

    fetchFeedbacks();
  }, [profileId]);

  if (!profileId) return;
  if (!feedbacks || feedbacks.length === 0) return;

  return (
    <div className="dashboard-feedback">
      <div className="dashboard-feedback__header">
        <h1 className="dashboard-feedback__heading">Feedback</h1>
      </div>
      <DataGrid
        columns={FeedbackTableHeaders({
          setOpenedModalFeedbackId,
          setIsChangeStatusModalOpen
        })}
        data={feedbacks}
      />
      <UpdateStatus
        isModalOpen={isChangeStatusModalOpen}
        setIsModalOpen={setIsChangeStatusModalOpen}
        openedModalFeedbackId={openedModalFeedbackId}
        setFeedbacks={setFeedbacks}
        feedbacks={feedbacks}
      />
    </div>
  );
};

export default Feedbacks;
