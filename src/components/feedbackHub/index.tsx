import Feedback from './Feedback';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { FeedbackType } from '../../types/FeedbacKType';
import toast from 'react-hot-toast';
import AddFeedback from './AddFeedback';

const FeedbackHub = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFeedbackModalOpened, setIsFeedbackModelOpened] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/feedback/');
        console.log(response);
        setFeedbacks(response?.data?.data || []);
      } catch (error) {
        console.log('Failed to fetch feedback: ', error);
        toast.error('Failed to fetch feedback.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div className="feedback-hub">
      <div className="feedback-hub__header">
        <h1 className="feedback-hub__heading">Feedback Hub</h1>
        <button
          className="feedback-hub__button"
          onClick={() => {
            setIsFeedbackModelOpened((prev) => !prev);
          }}
        >
          Submit feedback
        </button>
      </div>
      <AddFeedback
        isModalOpen={isFeedbackModalOpened}
        setIsModalOpen={setIsFeedbackModelOpened}
        feedbacks={feedbacks}
        setFeedbacks={setFeedbacks}
      />
      <div className="feedbacks">
        {feedbacks?.map((feedback) => {
          return <Feedback key={feedback?._id} {...feedback} />;
        })}
      </div>
    </div>
  );
};

export default FeedbackHub;
