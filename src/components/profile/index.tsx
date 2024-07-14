import { useEffect, useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Posts from '../shared/posts';
import Friends from './Friends';
import Peripherals from './Peripherals';
import { ProfileType } from '../../types/ProfileType';
import { PostType } from '../../types/PostType';
import axios from '../../api/axios';
import { MatchAnalyticsType } from '../../types/MatchAnalyticsType';
import MatchAnalyticsTable from '../analytics/MatchAnalyticsTable';
import { useParams } from 'react-router-dom';
const Profile = () => {
  const [currentNavigationItem, setCurrentNavigationItem] = useState('about');
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [matchData, setMatchData] = useState<MatchAnalyticsType[] | []>([]);
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

  const params = useParams();

  useEffect(() => {
    const fetchProfile = async (profileId: string) => {
      const response = await axios.get(`/profile/${profileId}`);
      if (response.data.success) {
        setProfileData(response.data.data);
      }
    };
    const fetchPosts = async (profileId: string) => {
      const response = await axios.get(`/posts?profileId=${profileId}`);
      if (response.data.success) {
        setPosts(response.data.data);
      }
    };

    const fetchMatchAnalytics = async (profileId: string) => {
      if (!profileId) return;

      try {
        setIsLoading(true);

        const response = await axios.get(
          `/match-analytics?profileId=${profileId}`,
          {
            withCredentials: true
          }
        );

        if (response?.data?.success) {
          setMatchData(
            response?.data?.data?.map(
              (data: MatchAnalyticsType, index: number) => {
                return {
                  ...data,
                  sNo: index + 1
                };
              }
            )
          );
        }
      } catch (error) {
        console.log(
          'There was an error while fetching match analytics: ',
          error
        );
      } finally {
        setIsLoading(false);
      }
    };

    params?.profileId && fetchPosts(params?.profileId);
    params?.profileId && fetchMatchAnalytics(params?.profileId);
    params?.profileId && fetchProfile(params?.profileId);
  }, [params?.profileId]);

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
      {currentNavigationItem === 'analysis' && (
        <div className="profile__analysis">
          {isLoading ? (
            'Loading..'
          ) : (
            <MatchAnalyticsTable matchData={matchData} />
          )}
        </div>
      )}
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
