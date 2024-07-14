/// <reference types="vite-plugin-svgr/client" />
import { useRef, useState, useEffect } from 'react';
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
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import axios from '../../api/axios';

const getPlatformIcon = (platform: string) => {
  if (platform === 'playstation') {
    return playstationIcon;
  } else if (platform === 'xbox') {
    return xboxIcon;
  } else {
    return pcIcon;
  }
};

type HeaderPropsType = {
  _id: string;
  username: string;
  platform: 'pc' | 'playstation' | 'xbox';
  profilePicture: string;
  banner: string;
  twitchUrl: string;
  youtubeUrl: string;
  twitterUrl: string;
  discordUsername: string;
};

const Header: React.FC<HeaderPropsType> = ({
  _id,
  profilePicture,
  banner,
  username,
  twitchUrl,
  twitterUrl,
  youtubeUrl,
  discordUsername,
  platform
}) => {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const actionMenuRef = useRef<HTMLDivElement>(null);
  const auth = useAuth();
  const setAuth = auth?.setAuth && auth?.setAuth;
  const currentUser = auth?.auth && auth?.auth;
  const [isAFriend, setIsAFriend] = useState<boolean>(
    currentUser?.friends?.includes(_id) ? true : false
  );

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

  useEffect(() => {
    setIsAFriend(currentUser?.friends?.includes(_id) ? true : false);
  }, [currentUser?._id, _id]);

  if (!currentUser?._id) {
    return;
  }

  const actionMenuItems = [
    currentUser?._id === _id && {
      name: 'Edit Profile',
      href: '/edit-profile'
    },
    currentUser?._id !== _id && {
      name: 'Block',
      href: '#'
    },
    currentUser?._id !== _id && {
      name: 'Report',
      href: '#'
    }
  ].filter((item) => item !== false);

  const handleFriendStatusChange = async () => {
    try {
      const response = await axios.post(
        '/profile/friend',
        { friendProfileId: _id },
        { withCredentials: true }
      );

      console.log('response: ', response);
      toast.success(
        isAFriend
          ? 'Successfully removed friend!'
          : 'Successfully added friend!'
      );
      setIsAFriend((prev) => !prev);
      response.data.data && setAuth && setAuth(response.data.data);
    } catch (error) {
      console.log('Failed to change friend status: ', error);
      toast.error('Failed to change friend status');
    }
  };

  return (
    <section className="header" style={{ backgroundImage: `URL(${banner})` }}>
      <div className="header__user-details">
        <div className="header__user-contents">
          <div className="header__user-picture-platform-container">
            <div className="header__user-picture-container avatar-container">
              <img
                src={profilePicture}
                alt={username}
                className="header__user-picture avatar-container__avatar"
              />
            </div>
            <div className="header__platform-container">
              <img
                src={getPlatformIcon(platform)}
                alt={platform}
                className="header__platform-icon"
              />
            </div>
          </div>
          <div className="header__username-socials-container">
            <h1 className="header__username">{username}</h1>
            <div className="header__socials-container">
              <a
                target="_blank"
                href={twitchUrl}
                className="header__socials-link"
              >
                <TwitchIcon className="header__socials-icon header__socials-icon--twitch" />
              </a>
              <a
                target="_blank"
                href={youtubeUrl}
                className="header__socials-link"
              >
                <YoutubeIcon className="header__socials-icon header__socials-icon--youtube" />
              </a>
              <a
                target="_blank"
                href={twitterUrl}
                className="header__socials-link"
              >
                <TwitterIcon className="header__socials-icon header__socials-icon--twitter" />
              </a>
              <a
                target="_blank"
                href={discordUsername}
                className="header__socials-link"
              >
                <DiscordIcon className="header__socials-icon header__socials-icon--discord" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header__user-actions">
        {currentUser?._id !== _id && (
          <>
            <button className="header__user-action-button header__user-action-button--chat">
              <ChatIcon className="header__chat-icon" />
            </button>
            <button
              className={`header__user-action-button ${
                isAFriend
                  ? 'header__user-action-button--remove-friend'
                  : 'header__user-action-button--add-friend'
              }`}
              onClick={handleFriendStatusChange}
            >
              {isAFriend ? 'Remove friend' : 'Add friend'}
            </button>
          </>
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
