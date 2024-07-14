import React, { useEffect, useRef, useState } from 'react';
import UpvoteIcon from '../../../assets/icons/misc/upvote.svg?react';
import DownvoteIcon from '../../../assets/icons/misc/downvote.svg?react';
import CommentIcon from '../../../assets/icons/misc/comment.svg?react';
import { Link } from 'react-router-dom';
import ActionMenu from '../../ui/ActionMenu';
import { PostType } from '../../../types/PostType';
import axios from '../../../api/axios';
import { getTimeDifference } from '../../../utils/getTimeDifference';
import { getFormattedAmount } from '../../../utils/getFormattedAmount';
import { useNavigate } from 'react-router-dom';
const Post: React.FC<PostType> = ({
  _id,
  contents,
  likedBy,
  dislikedBy,
  profileId,
  createdAt,
  comments,
  areCommentsDisabled = false
}) => {
  const navigate = useNavigate();
  const [hasLiked, setHasLiked] = useState(likedBy.includes(profileId._id));
  const [hasDisliked, setHasDisliked] = useState(
    dislikedBy.includes(profileId._id)
  );
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const actionMenuRef = useRef<HTMLDivElement>(null);

  console.log('isActionMenuOpen: ', isActionMenuOpen);
  const handleLike = async () => {
    setHasLiked((prev) => !prev);
    setHasDisliked(false);
    try {
      const response = await axios.post(
        `/posts/feedback/${_id}`,
        {
          like: true
        },
        { withCredentials: true }
      );

      console.log(response);
    } catch (error) {
      console.log('There was an error while liking the post: ', error);
    }
  };

  const handleDislike = async () => {
    setHasDisliked((prev) => !prev);
    setHasLiked(false);
    try {
      const response = await axios.post(
        `/posts/feedback/${_id}`,
        {
          dislike: true
        },
        { withCredentials: true }
      );

      console.log(response);
    } catch (error) {
      console.log('There was an error while liking the post: ', error);
    }
  };

  const handleCommentsClick = () => {
    if (areCommentsDisabled) return;

    navigate(`/post/${_id}`);
  };

  const actionMenuItems = [
    {
      name: 'Report',
      href: '#'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(event.target as Node | null)
      ) {
        setIsActionMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div key={_id} className="post">
      <div
        className="post__header"
        onClick={() => navigate(`/profile/${profileId._id}`)}
      >
        <div className="avatar-container post__avatar-container">
          <img
            src={profileId?.profilePicture}
            className="avatar-container__avatar post__avatar"
            alt={profileId?.username}
          />
        </div>
        <div className="post__username-created-at-container">
          <p className="post__username">{profileId?.username}</p>
          <p className="post__created-at">{getTimeDifference(createdAt)}</p>
        </div>
      </div>
      <p className="post__content">{contents}</p>
      <div className="post__feedback">
        <div className="post__likes-dislikes">
          <UpvoteIcon
            className={`post__feedback-button post__feedback-button--like ${
              hasLiked
                ? 'post__feedback-button--liked'
                : 'post__feedback-button--liked'
            }`}
            onClick={handleLike}
          />
          <p
            className={`post__likes-dislikes-count ${
              hasLiked
                ? 'post__likes-dislikes-count--liked'
                : hasDisliked
                ? 'post__likes-dislikes-count--disliked'
                : 'post__likes-dislikes-count'
            }`}
          >
            {hasLiked
              ? getFormattedAmount(
                  likedBy?.length -
                    dislikedBy?.length +
                    (likedBy.includes(profileId._id) ? 0 : 1)
                )
              : hasDisliked
              ? getFormattedAmount(
                  likedBy?.length -
                    dislikedBy?.length -
                    (dislikedBy.includes(profileId._id) ? 0 : 1)
                )
              : getFormattedAmount(likedBy?.length - dislikedBy?.length)}
          </p>
          <DownvoteIcon
            className={`post__feedback-button post__feedback-button--dislike ${
              hasDisliked
                ? 'post__feedback-button--disliked'
                : 'post__feedback-button--disliked'
            }`}
            onClick={handleDislike}
          />
        </div>
        <div className="post__comments" onClick={handleCommentsClick}>
          <CommentIcon
            className={`post__feedback-button post__feedback-button--comments`}
          />
          <p className={`post__comments-amount`}>
            {getFormattedAmount(comments.length)}
          </p>
        </div>
      </div>

      <ActionMenu>
        {actionMenuItems.map((item) => {
          return (
            <li
              key={item.name}
              className="action-menu__item"
              onClick={() => {
                setIsActionMenuOpen(false);
              }}
            >
              <Link to={item.href} className="action-menu__link">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ActionMenu>
    </div>
  );
};

export default Post;
