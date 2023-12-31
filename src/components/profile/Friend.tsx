import React from 'react';
import ActionMenu from './ActionMenu';
type FriendsPropType = {
  id: string;
  username: string;
  isInFriendlist: boolean;
  avatar: string;
};

const Friend: React.FC<FriendsPropType> = ({
  id,
  username,
  isInFriendlist,
  avatar
}) => {
  console.log('FRIEND ID: ', id, 'IS IN FRIENDLIST: ', isInFriendlist);
  return (
    <div className="friend">
      <div className="friend__avatar-container avatar-container">
        <img
          src={avatar}
          alt={username}
          className="friend__avatar avatar-container__avatar"
        />
      </div>
      <p className="friend__username">{username}</p>
      <ActionMenu />
    </div>
  );
};

export default Friend;
