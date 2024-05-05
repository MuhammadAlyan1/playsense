import { useState } from 'react';
import axios from '../../api/axios';
import toast from 'react-hot-toast';
import Modal from '../ui/Modal';
import Select from '../ui/Select';
import GameSvg from '../../assets/icons/game.svg?react';
import TypeSvg from '../../assets/icons/tag.svg?react';
import WordCounterTextArea from '../ui/WordCounterTextArea';
import { FeedbackType } from '../../types/FeedbacKType';

type AddFeedbackType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  feedbacks: FeedbackType[];
  setFeedbacks: (value: FeedbackType[]) => void;
};

const AddFeedback: React.FC<AddFeedbackType> = ({
  isModalOpen,
  setIsModalOpen,
  feedbacks,
  setFeedbacks
}) => {
  const [feedbackType, setFeedbackType] = useState('suggestion');
  const [feedbackGame, setFeedbackGame] = useState('apex legends');
  const [feedbackContents, setFeedbackContents] = useState('');

  const handleSubmitFeedback = async () => {
    if (!feedbackContents.trim()) {
      toast.error('Please enter feedback.');
      return;
    }

    try {
      const response = await axios.post(
        '/feedback',
        {
          contents: feedbackContents,
          game: feedbackGame,
          type: feedbackType
        },
        {
          withCredentials: true
        }
      );
      if (response?.data?.success === true) {
        if (response?.data?.data as FeedbackType) {
          setFeedbacks([response.data.data, ...feedbacks]);
          toast.success('Your feedback is live!');
        }
      }
    } catch (error) {
      console.log('Failed to publish feedback: ', error);
      toast.error('Failed to publish feedback');
    } finally {
      setIsModalOpen(false);
      setFeedbackContents('');
      setFeedbackGame('apex legends');
      setFeedbackType('suggestion');
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={setIsModalOpen} title={''}>
      <div className="add-feedback">
        <h1 className="add-feedback__heading">Add Feedback</h1>
        <p className="add-feedback__label">Feedback</p>
        <WordCounterTextArea
          state={feedbackContents}
          setState={setFeedbackContents}
        />
        <p className="add-feedback__label">Game</p>
        <Select
          state={feedbackGame}
          setState={setFeedbackGame}
          selectOptions={['Apex Legends', 'Warzone', 'CSGO']}
          Icon={GameSvg}
        />
        <p className="add-feedback__label">Category</p>
        <Select
          state={feedbackType}
          setState={setFeedbackType}
          selectOptions={['suggestion', 'bug report', 'change request']}
          Icon={TypeSvg}
        />
        <button
          className="add-feedback__submit-button"
          onClick={handleSubmitFeedback}
        >
          Publish
        </button>
      </div>
    </Modal>
  );
};

export default AddFeedback;
