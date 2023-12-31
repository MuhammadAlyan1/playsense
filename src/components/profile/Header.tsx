/// <reference types="vite-plugin-svgr/client" />
import React, { useRef, useState, useEffect } from 'react';
import pcIcon from '../../assets/icons/platform/PC.svg';
import xboxIcon from '../../assets/icons/platform/xbox.svg';
import playstationIcon from '../../assets/icons/platform/playstation.svg';
import TwitchIcon from '../../assets/icons/socials/twitch.svg?react';
import YoutubeIcon from '../../assets/icons/socials/youtube.svg?react';
import TwitterIcon from '../../assets/icons/socials/twitter.svg?react';
import DiscordIcon from '../../assets/icons/socials/discord.svg?react';
import ChatIcon from '../../assets/icons/misc/chat.svg?react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const profileData = {
  id: 'xyz123',
  username: 'LethalFlakes',
  email: 'alyan0332@gmail.com',
  avatar:
    'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg',
  banner:
    'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  platform: 'pc',
  country: 'pakistan',
  isInFriendList: true,
  region: 'asia',
  bio: 'With honed reflexes and unwavering determination, I turn every game into a tactical masterpiece. My mission: to rise to the top of the FPS elite. Victory is the only option. In the high-stakes arena of FPS gaming, my name will be etched among the legends, my skills renowned, and my victories celebrated.',
  createdAt: new Date(),
  roles: [
    'user',
    'moderator',
    'admin',
    'game developer',
    'content creator',
    'coach',
    'esport elite'
  ],
  socials: {
    twitch: 'https://twitch.com',
    youtube: 'https://youtube.com',
    twitter: 'https://twitter.com',
    discord: 'LethalFlakes#2777'
  }
};

const getPlatformIcon = (platform: string) => {
  if (platform === 'playstation') {
    return playstationIcon;
  } else if (platform === 'xbox') {
    return xboxIcon;
  } else {
    return pcIcon;
  }
};

const actionMenuItems = [
  {
    name: 'Edit Profile',
    href: '/edit-profile'
  },
  {
    name: 'Block',
    href: '#'
  },
  {
    name: 'Report',
    href: '#'
  }
];

const Header = () => {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const actionMenuRef = useRef<HTMLDivElement>(null);

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
    <section
      className="header"
      style={{ backgroundImage: `URL(${profileData.banner})` }}
    >
      <div className="header__user-details">
        <div className="header__user-contents">
          <div className="header__user-picture-platform-container">
            <div className="header__user-picture-container avatar-container">
              <img
                src={profileData.avatar}
                alt={profileData.username}
                className="header__user-picture avatar-container__avatar"
              />
            </div>
            <div className="header__platform-container">
              <img
                src={getPlatformIcon(profileData.platform)}
                alt={profileData.platform}
                className="header__platform-icon"
              />
            </div>
          </div>
          <div className="header__username-socials-container">
            <h1 className="header__username">{profileData.username}</h1>
            <div className="header__socials-container">
              <a
                target="_blank"
                href={profileData.socials.twitch}
                className="header__socials-link"
              >
                <TwitchIcon className="header__socials-icon header__socials-icon--twitch" />
              </a>
              <a
                target="_blank"
                href={profileData.socials.youtube}
                className="header__socials-link"
              >
                <YoutubeIcon className="header__socials-icon header__socials-icon--youtube" />
              </a>
              <a
                target="_blank"
                href={profileData.socials.twitter}
                className="header__socials-link"
              >
                <TwitterIcon className="header__socials-icon header__socials-icon--twitter" />
              </a>
              <a
                target="_blank"
                href={profileData.socials.discord}
                className="header__socials-link"
              >
                <DiscordIcon className="header__socials-icon header__socials-icon--discord" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header__user-actions">
        <button className="header__user-action-button header__user-action-button--chat">
          <ChatIcon className="header__chat-icon" />
        </button>
        {profileData.isInFriendList ? (
          <button className="header__user-action-button header__user-action-button--remove-friend">
            Remove friend
          </button>
        ) : (
          <button className="header__user-action-button header__user-action-button--add-friend">
            Add friend
          </button>
        )}
      </div>
      <div className="header__action-menu" ref={actionMenuRef}>
        <BiDotsHorizontalRounded
          className="header__action-menu-icon"
          onClick={() => setIsActionMenuOpen((prev) => !prev)}
        />
        <ul
          className={`header__action-menu-list ${
            isActionMenuOpen
              ? 'header__action-menu-list--visible'
              : 'header__action-menu-list--hidden'
          }`}
        >
          {actionMenuItems.map((item) => {
            return (
              <li
                key={item.name}
                className="header__action-menu-item"
                onClick={() => {
                  setIsActionMenuOpen(false);
                }}
              >
                <Link to={item.href} className="header__action-menu-link">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Header;
