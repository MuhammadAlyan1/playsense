import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import Feedback from './Feedback';
import { FeedbackWithCommentsType } from '../../types/FeedbackWithCommentsType';
import Comment from '../shared/comment';
import AddComment from '../shared/comment/AddComment';
import { CommentType } from '../../types/CommentType';
import toast from 'react-hot-toast';
import Report from '../report';
import { RedditShareButton, TwitterShareButton } from 'react-share';
import { TwitterIcon, RedditIcon } from 'react-share';
import Loader from '../ui/Loader';

const FeedbackWithComments = () => {
  const { feedbackId } = useParams();
  const [feedbackData, setFeedbackData] =
    useState<FeedbackWithCommentsType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportedProfileId, setReportedProfileId] = useState('');
  const [reportedFeedbackItemId, setReportedFeedbackItemId] = useState('');
  const [isCommentReportModalOpen, setIsCommentReportModalOpen] =
    useState(false);
  const [reportedCommentProfileId, setReportedCommentProfileId] = useState('');
  const [reportedCommentItemId, setReportedCommentItemId] = useState('');

  console.log('COMMENTS: ', comments);
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/feedback/${feedbackId}`);
        console.log(response);
        setFeedbackData(response?.data?.data);
        setComments(response?.data?.data?.comments);
      } catch (error) {
        console.log('Failed to retrieve feedback', error);
        toast.error('Failed to retrieve feedback.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedback();
  }, [feedbackId]);

  if (isLoading) {
    return <Loader size={150} style={{ marginBlock: '1rem' }} />;
  }

  if (!feedbackData) return;

  return (
    <div className="post-with-comments">
      <Feedback
        _id={feedbackData._id}
        likedBy={feedbackData.likedBy}
        dislikedBy={feedbackData.dislikedBy}
        profileId={feedbackData.profileId}
        createdAt={feedbackData.createdAt}
        comments={feedbackData.comments.map((comment) => comment._id)}
        contents={feedbackData.contents}
        game={feedbackData.game}
        type={feedbackData.type}
        status={feedbackData.status}
        setIsReportModalOpen={setIsReportModalOpen}
        setReportedProfileId={setReportedProfileId}
        setReportedFeedbackItemId={setReportedFeedbackItemId}
      />
      <div className="post-with-comments__share">
        <p className="post-with-comments__share-call-to-action">Share on</p>
        <div className="post-with-comments__socials">
          <TwitterShareButton
            className="share__button"
            url={window.location.href}
            title={`${feedbackData.contents} @PlayApex`}
            hashtags={['PlayApex', 'Feedback', 'ApexLegends', 'Apex']}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          <RedditShareButton
            className="share__button"
            url={window.location.href}
            title={`${feedbackData.contents}`}
          >
            <RedditIcon size={40} round={true} />
          </RedditShareButton>
        </div>
      </div>
      <AddComment
        comments={comments}
        setComments={setComments}
        id={feedbackData._id}
        type="feedback"
      />
      <div className="post-with-comments__comments">
        {comments.map((comment) => {
          return (
            <Comment
              _id={comment._id}
              content={comment.content}
              profileId={comment.profileId}
              createdAt={comment.createdAt}
              setIsCommentReportModalOpen={setIsCommentReportModalOpen}
              setReportedCommentProfileId={setReportedCommentProfileId}
              setReportedCommentItemId={setReportedCommentItemId}
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
      <Report
        isReportModalOpen={isCommentReportModalOpen}
        setIsReportModalOpen={setIsCommentReportModalOpen}
        itemId={reportedCommentItemId}
        itemType="comment"
        reportedProfileId={reportedCommentProfileId}
      />
    </div>
  );
};

export default FeedbackWithComments;
