import React, { useEffect, useRef, useState } from 'react';
import UpvoteIcon from '../../assets/icons/misc/upvote.svg?react';
import DownvoteIcon from '../../assets/icons/misc/downvote.svg?react';
import CommentIcon from '../../assets/icons/misc/comment.svg?react';
import { Link } from 'react-router-dom';
import ActionMenu from '../ui/ActionMenu';
import { getTimeDifference } from '../../utils/getTimeDifference';
import { getFormattedAmount } from '../../utils/getFormattedAmount';
import { ProfileType } from '../../types/ProfileType';
import ApexLegendsIcon from '../../assets/icons/modes/battle-royale.svg?react';

type FeedbackType = {
  _id: string;
  contents: string;
  likedBy: string[];
  dislikedBy: string[];
  profileId: ProfileType;
  createdAt: string;
  comments: string[];
  game: string;
  tag: string;
  status: string;
};

const Feedback: React.FC<FeedbackType> = ({
  _id,
  contents,
  likedBy,
  dislikedBy,
  profileId,
  createdAt,
  comments,
  game,
  tag,
  status
}) => {
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
  };

  const handleDislike = async () => {
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
    <div key={_id} className="feedback">
      <div className="feedback__meta-data">
        <div className="feedback__game">
          <ApexLegendsIcon className="feedback__game-icon" />
          <p className="feedback__game-name">{game}</p>
        </div>
        <p className="feedback__tag">{tag}</p>
        <p className="feedback__status">{status}</p>
      </div>
      <div className="feedback__header">
        <div className="avatar-container feedback__avatar-container">
          <img
            src={profileId?.profilePicture}
            className="avatar-container__avatar feedback__avatar"
            alt={profileId?.username}
          />
        </div>
        <div className="feedback__username-created-at-container">
          <p className="feedback__username">{profileId?.username}</p>
          <p className="feedback__created-at">{getTimeDifference(createdAt)}</p>
        </div>
      </div>
      <p className="feedback__content">{contents}</p>
      <div className="feedback__feedback">
        <div className="feedback__likes-dislikes">
          <UpvoteIcon
            className={`feedback__feedback-button feedback__feedback-button--like ${
              hasLiked
                ? 'feedback__feedback-button--liked'
                : 'feedback__feedback-button--liked'
            }`}
            onClick={handleLike}
          />
          <p
            className={`feedback__likes-dislikes-count ${
              hasLiked
                ? 'feedback__likes-dislikes-count--liked'
                : hasDisliked
                ? 'feedback__likes-dislikes-count--disliked'
                : 'feedback__likes-dislikes-count'
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
            className={`feedback__feedback-button feedback__feedback-button--dislike ${
              hasDisliked
                ? 'feedback__feedback-button--disliked'
                : 'feedback__feedback-button--disliked'
            }`}
            onClick={handleDislike}
          />
        </div>
        <div className="feedback__comments">
          <CommentIcon
            className={`feedback__feedback-button feedback__feedback-button--comments`}
          />
          <p className={`feedback__comments-amount`}>
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

export default Feedback;
