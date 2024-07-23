import Feedback from './Feedback';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { FeedbackType } from '../../types/FeedbacKType';
import toast from 'react-hot-toast';
import AddFeedback from './AddFeedback';
import Report from '../report';
import RedditIcon from '../../assets/icons/socials/reddit.svg?react';
import DiscordIcon from '../../assets/icons/socials/discord.svg?react';
import TwitterIcon from '../../assets/icons/socials/twitter.svg?react';

const FeedbackHub = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFeedbackModalOpened, setIsFeedbackModelOpened] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportedProfileId, setReportedProfileId] = useState('');
  const [reportedFeedbackItemId, setReportedFeedbackItemId] = useState('');
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
      <div className="feedback-hub__communities">
        <p className="feedback-hub__communities-call-to-action">
          Join communities
        </p>
        <div className="feedback-hub__socials">
          <a
            href="https://www.reddit.com/r/apexlegends/"
            target="blank"
            className="feedback-hub__social"
          >
            <RedditIcon className="feedback-hub__social-icon" />
          </a>
          <a
            href="https://discord.com/invite/ApexLegends"
            target="blank"
            className="feedback-hub__social"
          >
            <DiscordIcon className="feedback-hub__social-icon" />
          </a>
          <a
            href="https://x.com/PlayApex"
            target="blank"
            className="feedback-hub__social"
          >
            <TwitterIcon className="feedback-hub__social-icon" />
          </a>
        </div>
      </div>
      <AddFeedback
        isModalOpen={isFeedbackModalOpened}
        setIsModalOpen={setIsFeedbackModelOpened}
        feedbacks={feedbacks}
        setFeedbacks={setFeedbacks}
      />
      <div className="feedbacks">
        {feedbacks?.map((feedback) => {
          return (
            <Feedback
              key={feedback?._id}
              _id={feedback._id}
              likedBy={feedback.likedBy}
              dislikedBy={feedback.dislikedBy}
              profileId={feedback.profileId}
              createdAt={feedback.createdAt}
              comments={feedback.comments}
              contents={feedback.contents}
              game={feedback.game}
              type={feedback.type}
              status={feedback.status}
              setIsReportModalOpen={setIsReportModalOpen}
              setReportedProfileId={setReportedProfileId}
              setReportedFeedbackItemId={setReportedFeedbackItemId}
            />
          );
        })}
      </div>
      <Report
        isReportModalOpen={isReportModalOpen}
        setIsReportModalOpen={setIsReportModalOpen}
        itemId={reportedFeedbackItemId}
        itemType="feedback"
        reportedProfileId={reportedProfileId}
      />
    </div>
  );
};

export default FeedbackHub;
