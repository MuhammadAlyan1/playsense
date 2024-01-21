import { useEffect, useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Posts from '../shared/Posts';
import Friends from './Friends';
import Peripherals from './Peripherals';
import useAuth from '../../hooks/useAuth';
import { ProfileType } from '../../types/ProfileType';
import { PostType } from '../../types/PostType';
import axios from '../../api/axios';

const Profile = () => {
  const [currentNavigationItem, setCurrentNavigationItem] = useState('about');
  const [posts, setPosts] = useState<PostType[]>([]);
  const [profileData, setProfileData] = useState<ProfileType>({
    _id: '',
    userId: '',
    username: '',
    roles: ['user'],
    platform: 'pc',
    bio: '',
    profilePicture:
      'https://res.cloudinary.com/dcc8txmdw/image/upload/v1705819981/playsense-profile/vgiadrbjgmgd6qhdwoy2.jpg',
    banner:
      'https://res.cloudinary.com/dcc8txmdw/image/upload/v1705819985/playsense-profile/bozzoqaani8tgamqdqfg.jpg',
    country: 'Pakistan',
    twitchUrl: 'https://www.twitch.tv/',
    youtubeUrl: 'https://www.youtube.com/',
    twitterUrl: 'https://twitter.com/',
    discordUsername: 'PlaySense',
    monitor: '',
    keyboard: '',
    headphones: '',
    mouse: '',
    mousepad: '',
    createdAt: '',
    updatedAt: '',
    __v: 0
  });

  const auth = useAuth();

  useEffect(() => {
    auth?.auth && setProfileData(auth?.auth);

    const fetchPosts = async (profileId: string) => {
      const response = await axios.get(`/posts?profileId=${profileId}`);
      if (response.data.success) {
        setPosts(response.data.data);
      }
    };

    auth?.auth?._id && fetchPosts(auth?.auth?._id);
  }, [auth?.auth?._id]);

  return (
    <div className="profile">
      <Header
        _id={profileData?._id}
        profilePicture={profileData?.profilePicture}
        banner={profileData?.banner}
        username={profileData?.username}
        twitchUrl={profileData?.twitchUrl}
        twitterUrl={profileData?.twitterUrl}
        youtubeUrl={profileData?.youtubeUrl}
        discordUsername={profileData?.discordUsername}
        platform={profileData?.platform}
      />
      <Navigation
        currentItem={currentNavigationItem}
        setCurrentItem={setCurrentNavigationItem}
      />
      {currentNavigationItem === 'about' && (
        <About
          bio={profileData?.bio}
          roles={profileData?.roles}
          country={profileData?.country}
          createdAt={profileData?.createdAt}
        />
      )}
      {currentNavigationItem === 'posts' && <Posts posts={posts} />}
      {currentNavigationItem === 'friends' && <Friends />}
      {currentNavigationItem === 'peripherals' && (
        <Peripherals
          peripherals={{
            headphones: profileData?.headphones,
            mouse: profileData?.mouse,
            mousepad: profileData?.mousepad,
            keyboard: profileData?.keyboard,
            monitor: profileData.monitor
          }}
        />
      )}
    </div>
  );
};

export default Profile;
