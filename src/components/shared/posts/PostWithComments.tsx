import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import Post from './Post';
import { PostWithCommentsType } from '../../../types/PostWithCommentsType';
import Comment from '../comment';
import AddComment from '../comment/AddComment';
import { CommentType } from '../../../types/CommentType';

const PostWithComments = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState<PostWithCommentsType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    return <h1>Loading..</h1>;
  }

  if (!postData) return;

  return (
    <div className="post-with-comments">
      <Post
        _id={postData._id}
        __v={postData.__v}
        likedBy={postData.likedBy}
        dislikedBy={postData.dislikedBy}
        profileId={postData.profileId}
        createdAt={postData.createdAt}
        comments={postData.comments.map((comment) => comment._id)}
        contents={postData.contents}
        updatedAt={postData.updatedAt}
      />
      <AddComment
        comments={comments}
        setComments={setComments}
        postId={postData._id}
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

export default PostWithComments;
