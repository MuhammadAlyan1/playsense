import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import Post from './Post';
import { PostWithCommentsType } from '../../../types/PostWithCommentsType';
import Comment from '../comment';
import AddComment from '../comment/AddComment';
import { CommentType } from '../../../types/CommentType';
import Report from '../../report';
import Loader from '../../ui/Loader';

const PostWithComments = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState<PostWithCommentsType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportedProfileId, setReportedProfileId] = useState('');
  const [reportedPostItemId, setReportedPostItemId] = useState('');
  const [isCommentReportModalOpen, setIsCommentReportModalOpen] =
    useState(false);
  const [reportedCommentProfileId, setReportedCommentProfileId] = useState('');
  const [reportedCommentItemId, setReportedCommentItemId] = useState('');
  console.log('COMMENTS: ', comments);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/posts/${postId}`);
        console.log(response);
        setPostData(response?.data?.data);
        setComments(response?.data?.data?.comments);
      } catch (error) {
        console.log('Failed to retrieve post', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (isLoading) {
    return <Loader size={150} style={{ marginBlock: '1rem' }} />;
  }

  if (!postData) return;

  return (
    <div className="post-with-comments">
      <Post
        _id={postData._id}
        likedBy={postData.likedBy}
        dislikedBy={postData.dislikedBy}
        profileId={postData.profileId}
        createdAt={postData.createdAt}
        comments={postData.comments.map((comment) => comment._id)}
        contents={postData.contents}
        areCommentsDisabled={true}
        setIsReportModalOpen={setIsReportModalOpen}
        setReportedProfileId={setReportedProfileId}
        setReportedPostItemId={setReportedPostItemId}
      />
      <AddComment
        comments={comments}
        setComments={setComments}
        id={postData._id}
        type="posts"
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
        itemId={reportedPostItemId}
        itemType="post"
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

export default PostWithComments;
