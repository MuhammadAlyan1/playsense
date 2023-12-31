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
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Posts from '../shared/Posts';
import Friends from './Friends';
import Peripherals from './Peripherals';

const profileData = {
  id: 'xyz123',
  username: 'LethalFlakes',
  email: 'alyan0332@gmail.com',
  isInFriendlist: false,
  avatar:
    'https://wallpapers.com/images/hd/gaming-profile-pictures-tmjjc9v0w80azoeh.jpg',
  banner:
    'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  platform: 'pc',
  country: 'pakistan',
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

const Profile = () => {
  const [currentNavigationItem, setCurrentNavigationItem] = useState('about');

  return (
    <div className="profile">
      <Header />
      <Navigation
        currentItem={currentNavigationItem}
        setCurrentItem={setCurrentNavigationItem}
      />
      {currentNavigationItem === 'about' && (
        <About
          bio={profileData.bio}
          roles={profileData.roles}
          country={profileData.country}
          createdAt={profileData.createdAt}
        />
      )}
      {currentNavigationItem === 'posts' && <Posts />}
      {currentNavigationItem === 'friends' && <Friends />}
      {currentNavigationItem === 'peripherals' && <Peripherals />}
    </div>
  );
};

export default Profile;
