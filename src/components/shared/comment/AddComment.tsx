import { useState } from 'react';
import axios from '../../../api/axios';
import { CommentType } from '../../../types/CommentType';
import toast from 'react-hot-toast';
import { AxiosErrorType } from '../../../types/AxiosErrorType';

type AddCommentPropsType = {
  comments: CommentType[];
  setComments: (value: CommentType[]) => void;
  id: string;
  type: string;
};

const AddComment: React.FC<AddCommentPropsType> = ({
  comments,
  setComments,
  id,
  type = 'posts'
}) => {
  const [CommentData, setCommentData] = useState('');
  const MAX_COMMENT_LENGTH = 500;

  const handleAddComment = async (): Promise<void> => {
    try {
      if (!CommentData.trim()) {
        console.log('Please enter all fields');
        return;
      }

      const response = await axios.post(
        `${type}/feedback/${id}`,
        {
          comment: true,
          commentContents: CommentData
        },
        {
          withCredentials: true
        }
      );
      if (response?.data?.success === true) {
        if (response?.data?.data as CommentType) {
          setComments([response.data.data, ...comments]);
          toast.success('Comment added!');
        }
      }
    } catch (error) {
      console.log('Failed to add comment', error);
      toast.error(
        (error as AxiosErrorType)?.response?.data?.message ||
          'Failed to add comment'
      );
    } finally {
      setCommentData('');
    }
  };

  return (
    <div className="add-comment">
      <div className="add-comment__comment-container">
        <textarea
          required
          className="add-comment__comment-input"
          rows={3}
          value={CommentData}
          onChange={(e) => setCommentData(e.target.value)}
          maxLength={MAX_COMMENT_LENGTH}
          placeholder="Ready, set, comment!"
        />
        <p className="add-comment__comment-length">{`${CommentData.length}/${MAX_COMMENT_LENGTH}`}</p>
      </div>
      <button
        className="add-comment__submit-button"
        onClick={() => handleAddComment()}
      >
        Comment
      </button>
    </div>
  );
};

export default AddComment;
