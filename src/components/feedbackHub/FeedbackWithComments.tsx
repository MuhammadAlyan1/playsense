import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import Feedback from './Feedback';
import { FeedbackWithCommentsType } from '../../types/FeedbackWithCommentsType';
import Comment from '../shared/comment';
import AddComment from '../shared/comment/AddComment';
import { CommentType } from '../../types/CommentType';
import toast from 'react-hot-toast';

const FeedbackWithComments = () => {
  const { feedbackId } = useParams();
  const [feedbackData, setFeedbackData] =
    useState<FeedbackWithCommentsType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    return <h1>Loading..</h1>;
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
      />
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
              updatedAt={comment.updatedAt}
              __v={comment.__v}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackWithComments;
