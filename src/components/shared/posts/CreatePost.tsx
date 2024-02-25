import { useState } from 'react';
import axios from '../../../api/axios';
import { PostType } from '../../../types/PostType';
import toast from 'react-hot-toast';
import { AxiosErrorType } from '../../../types/AxiosErrorType';

type CreatePostPropsType = {
  posts: PostType[];
  setPosts: (value: PostType[]) => void;
};

const CreatePost: React.FC<CreatePostPropsType> = ({ posts, setPosts }) => {
  const [postData, setPostData] = useState('');
  const MAX_POST_LENGTH = 500;

  const handleCreatePost = async (): Promise<void> => {
    try {
      if (!postData.trim()) {
        toast.error('Please enter post contents.');
        return;
      }

      const response = await axios.post(
        '/posts',
        {
          contents: postData
        },
        {
          withCredentials: true
        }
      );
      if (response?.data?.success === true) {
        if (response?.data?.data as PostType) {
          setPosts([response.data.data, ...posts]);
          toast.success('Your post is live!');
        }
      }
    } catch (error) {
      console.log('Failed to create post', error);
      toast.error(
        (error as AxiosErrorType)?.response?.data?.message ||
          'Failed to create post'
      );
    } finally {
      setPostData('');
    }
  };

  return (
    <div className="create-post">
      <h1 className="create-post__heading">Create Post</h1>
      <div className="create-post__post-container">
        <textarea
          required
          className="create-post__post-input"
          rows={7}
          value={postData}
          onChange={(e) => setPostData(e.target.value)}
          maxLength={MAX_POST_LENGTH}
          placeholder="Craft your gaming tales, tips, and thoughts here. Let the community in on your gaming journey."
        />
        <p className="create-post__post-length">{`${postData.length}/${MAX_POST_LENGTH}`}</p>
      </div>
      <button
        className="create-post__submit-button"
        onClick={() => handleCreatePost()}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
