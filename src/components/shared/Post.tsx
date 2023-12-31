import React, { useEffect, useRef, useState } from 'react';
import UpvoteIcon from '../../assets/icons/misc/upvote.svg?react';
import DownvoteIcon from '../../assets/icons/misc/downvote.svg?react';
import CommentIcon from '../../assets/icons/misc/comment.svg?react';
import { Link } from 'react-router-dom';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import ActionMenu from '../ui/ActionMenu';

type PostType = {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  content: string;
  createdAt: Date;
  likes: number;
  likedBy: Array<string>;
  dislikes: number;
  dislikedBy: Array<string>;
  comments: number;
  commentedBy: Array<string>;
};

const Post: React.FC<PostType> = ({
  id,
  username,
  avatar,
  userId,
  content,
  createdAt,
  likes,
  likedBy,
  dislikes,
  dislikedBy,
  comments,
  commentedBy
}) => {
  console.log(getFormattedAmount(1350, 50));
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [hasCommented, setHasCommented] = useState(false);
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const actionMenuRef = useRef<HTMLDivElement>(null);

  const handleLike = () => {
    setHasLiked((prev) => !prev);
    setHasDisliked(false);
  };

  const handleDislike = () => {
    setHasDisliked((prev) => !prev);
    setHasLiked(false);
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
    <div key={id} className="post">
      <div className="post__header">
        <div className="avatar-container post__avatar-container">
          <img
            src={avatar}
            className="avatar-container__avatar post__avatar"
            alt={username}
          />
        </div>
        <div className="post__username-created-at-container">
          <p className="post__username">{username}</p>
          <p className="post__created-at">{getTimeDifference(createdAt)}</p>
        </div>
      </div>
      <p className="post__content">{content}</p>
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
              ? getFormattedAmount(likes - dislikes + 1)
              : hasDisliked
              ? getFormattedAmount(likes - dislikes - 1)
              : getFormattedAmount(likes - dislikes)}
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
        <div className="post__comments">
          <CommentIcon
            className={`post__feedback-button post__feedback-button--comments ${
              hasCommented
                ? 'post__feedback-button--commented'
                : 'post__feedback-button--commented'
            }`}
          />
          <p
            className={`post__comments-amount ${
              hasCommented ? 'post__comments-amount--commented' : ''
            }`}
          >
            {getFormattedAmount(comments)}
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

const getTimeDifference = (date: Date): string => {
  const timeDifferenceInSeconds = Math.floor(
    (new Date().getTime() - date.getTime()) / 1000
  );

  const intervals = [
    ['year', 365 * 24 * 3600],
    ['month', 30 * 24 * 3600],
    ['week', 7 * 24 * 3600],
    ['day', 24 * 3600],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
  ];

  let result = '';
  for (const [name, count] of intervals) {
    const value = Math.floor(timeDifferenceInSeconds / count) as number;
    if (value) {
      result = `${value} ${name}${value > 1 ? 's' : ''} ago`;
      break;
    }
  }

  return result;
};

const getFormattedAmount = (amount: number): string => {
  if (amount < -999) {
    return (amount / 1000).toFixed(1) + 'k';
  }

  if (amount > 999) {
    return (amount / 1000).toFixed(1) + 'k';
  }

  return amount.toString();
};
