import React, { useEffect, useRef, useState } from 'react';
import ActionMenu from '../../ui/ActionMenu';
import { getTimeDifference } from '../../../utils/getTimeDifference';
import { Link } from 'react-router-dom';
import { ProfileType } from '../../../types/ProfileType';

type CommentProps = {
  _id: string;
  content: string;
  profileId: ProfileType;
  createdAt: string;
  setIsCommentReportModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setReportedCommentProfileId: React.Dispatch<React.SetStateAction<string>>;
  setReportedCommentItemId: React.Dispatch<React.SetStateAction<string>>;
};

const Comment: React.FC<CommentProps> = ({
  _id,
  content,
  profileId,
  createdAt,
  setIsCommentReportModalOpen,
  setReportedCommentProfileId,
  setReportedCommentItemId
}) => {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const actionMenuRef = useRef<HTMLDivElement>(null);
  const actionMenuItems = [
    {
      name: 'Report',
      href: '#'
    }
  ];

  console.log('isActionMenuOpen: ', isActionMenuOpen);

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
    <div key={_id} className="comment">
      <div className="comment__header">
        <div className="avatar-container comment__avatar-container">
          <img
            src={profileId?.profilePicture}
            className="avatar-container__avatar comment__avatar"
            alt={profileId?.username}
          />
        </div>
        <div className="comment__username-created-at-container">
          <p className="comment__username">{profileId?.username}</p>
          <p className="comment__created-at">{getTimeDifference(createdAt)}</p>
        </div>
      </div>
      <p className="comment__content">{content}</p>

      <ActionMenu>
        {actionMenuItems.map((item) => {
          return (
            <li
              key={item.name}
              className="action-menu__item"
              onClick={() => {
                setIsActionMenuOpen(false);
                setIsCommentReportModalOpen(true);
                setReportedCommentProfileId(profileId._id);
                setReportedCommentItemId(_id);
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

export default Comment;
