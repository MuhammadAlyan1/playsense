import React from 'react';
import Friend from './Friend';

const friends = [
  {
    id: 'xyz123',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xyz126',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xyz124',
    username: 'LethalFlakes',
    isInFriendlist: true,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xydz123',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xyz1asd26',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xyz1asd24',
    username: 'LethalFlakes',
    isInFriendlist: true,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'dxydz123',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xyasdz1asd26',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xasdyz1asd24',
    username: 'LethalFlakes',
    isInFriendlist: true,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'dxyddz123',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xyasdaz1asd26',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xasdydz1asd24',
    username: 'LethalFlakes',
    isInFriendlist: true,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xyasdz1asfd26',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xasdyz1asd2s4',
    username: 'LethalFlakes',
    isInFriendlist: true,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'dxyddz12d3',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xyasdaz1asfd26',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xasdydz1asd2f4',
    username: 'LethalFlakedasdsadasdasds',
    isInFriendlist: true,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xdasdyz1asd2s4',
    username: 'LethalFlakes',
    isInFriendlist: true,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'dfxydddz12d3',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'axyassdaz1asfd26',
    username: 'LethalFlakes',
    isInFriendlist: false,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  },
  {
    id: 'xasdydzasd1asd2f4',
    username: 'LethalFlakedasdsadasdasds',
    isInFriendlist: true,
    avatar:
      'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg'
  }
];

const Friends = () => {
  return (
    <div className="friends">
      {friends.map((friend) => {
        return <Friend key={friend.id} {...friend} />;
      })}
    </div>
  );
};

export default Friends;
