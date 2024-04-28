import { Link } from 'react-router-dom';
import Feedback from './Feedback';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { FeedbackType } from '../../types/FeedbacKType';
import toast from 'react-hot-toast';

const FeedbackHub = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/feedback/');
        console.log(response);
        setFeedbacks(response?.data?.data || []);
      } catch (error) {
        console.log('Failed to fetch feedback: ', error);
        toast.error('Failed to fetch feedback.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div className="feedback-hub">
      <div className="feedback-hub__header">
        <h1 className="feedback-hub__heading">Feedback Hub</h1>
        <button className="feedback-hub__button">
          <Link to="/match-feedback-hub" className="feedback-hub__link">
            Submit feedback
          </Link>
        </button>
      </div>
      <div className="feedbacks">
        {feedbacks?.map((feedback) => {
          return <Feedback key={feedback?._id} {...feedback} />;
        })}
      </div>
    </div>
  );
};

export default FeedbackHub;

// const feedbacks = [
//   {
//     game: 'Apex Legends',
//     tag: 'bug report',
//     status: 'under review',
//     _id: '65acdd2d660b7a300c2ee732',
//     contents:
//       'You can clip through the map if you get get revived outside of zone.',
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//     profileId: {
//       _id: '65acc444bf69812652536e9e',
//       userId: '65acc444bf69812652536e9c',
//       username: 'LethalFlakes',
//       roles: ['user'],
//       platform: 'pc',
//       bio: 'With honed reflexes and unwavering determination, I turn every game into a tactical masterpiece. My mission: to rise to the top of the FPS elite. Victory is the only option. In the high-stakes arena of FPS gaming, my name will be etched among the legends, my skills renowned, and my victories celebrated.',
//       profilePicture:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852419/playsense-profile/c9ohos5tjabxu0ddhg3u.jpg',
//       banner:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852422/playsense-profile/tt2a9vj98lhvdvxvzgox.jpg',
//       country: 'germany',
//       twitchUrl: 'https://www.twitch.tv/LethalFlakes',
//       youtubeUrl: 'https://www.youtube.com/LethalFlakes',
//       twitterUrl: 'https://twitter.com/',
//       discordUsername: 'LethalFlakes',
//       monitor: 'AOC 24G2',
//       headphones: 'HyperX Cloud II',
//       keyboard: 'Akko 3068B',
//       mouse: 'Logitech G102',
//       mousepad: 'SteelSeries QcK',
//       createdAt: '2024-01-21T07:14:12.856Z',
//       updatedAt: '2024-01-21T15:53:43.542Z',
//       __v: 0
//     },
//     createdAt: '2024-01-21T09:00:29.314Z',
//     updatedAt: '2024-01-21T09:15:59.567Z',
//     __v: 0
//   },
//   {
//     game: 'Apex Legends',
//     tag: 'suggestion',
//     status: 'new',
//     _id: '65acdc30660b7a300c2ee72c',
//     contents:
//       'New mode idea: whenever you die, you get better armor and attachments.',
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//     profileId: {
//       _id: '65acc444bf69812652536e9e',
//       userId: '65acc444bf69812652536e9c',
//       username: 'LethalFlakes',
//       roles: ['user'],
//       platform: 'pc',
//       bio: 'With honed reflexes and unwavering determination, I turn every game into a tactical masterpiece. My mission: to rise to the top of the FPS elite. Victory is the only option. In the high-stakes arena of FPS gaming, my name will be etched among the legends, my skills renowned, and my victories celebrated.',
//       profilePicture:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852419/playsense-profile/c9ohos5tjabxu0ddhg3u.jpg',
//       banner:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852422/playsense-profile/tt2a9vj98lhvdvxvzgox.jpg',
//       country: 'germany',
//       twitchUrl: 'https://www.twitch.tv/LethalFlakes',
//       youtubeUrl: 'https://www.youtube.com/LethalFlakes',
//       twitterUrl: 'https://twitter.com/',
//       discordUsername: 'LethalFlakes',
//       monitor: 'AOC 24G2',
//       headphones: 'HyperX Cloud II',
//       keyboard: 'Akko 3068B',
//       mouse: 'Logitech G102',
//       mousepad: 'SteelSeries QcK',
//       createdAt: '2024-01-21T07:14:12.856Z',
//       updatedAt: '2024-01-21T15:53:43.542Z',
//       __v: 0
//     },
//     createdAt: '2024-01-21T08:56:16.389Z',
//     updatedAt: '2024-01-21T09:14:55.635Z',
//     __v: 0
//   },
//   {
//     game: 'Apex Legends',
//     tag: 'change request',
//     status: 'new',
//     _id: '65acd908660b7a300c2ee71b',
//     contents:
//       'Kraber should be able to down anyone on headphones, regardless if they are using a fortied legend.',
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//     profileId: {
//       _id: '65acc444bf69812652536e9e',
//       userId: '65acc444bf69812652536e9c',
//       username: 'LethalFlakes',
//       roles: ['user'],
//       platform: 'pc',
//       bio: 'With honed reflexes and unwavering determination, I turn every game into a tactical masterpiece. My mission: to rise to the top of the FPS elite. Victory is the only option. In the high-stakes arena of FPS gaming, my name will be etched among the legends, my skills renowned, and my victories celebrated.',
//       profilePicture:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852419/playsense-profile/c9ohos5tjabxu0ddhg3u.jpg',
//       banner:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852422/playsense-profile/tt2a9vj98lhvdvxvzgox.jpg',
//       country: 'germany',
//       twitchUrl: 'https://www.twitch.tv/LethalFlakes',
//       youtubeUrl: 'https://www.youtube.com/LethalFlakes',
//       twitterUrl: 'https://twitter.com/',
//       discordUsername: 'LethalFlakes',
//       monitor: 'AOC 24G2',
//       headphones: 'HyperX Cloud II',
//       keyboard: 'Akko 3068B',
//       mouse: 'Logitech G102',
//       mousepad: 'SteelSeries QcK',
//       createdAt: '2024-01-21T07:14:12.856Z',
//       updatedAt: '2024-01-21T15:53:43.542Z',
//       __v: 0
//     },
//     createdAt: '2024-01-21T08:42:48.431Z',
//     updatedAt: '2024-01-21T08:42:48.431Z',
//     __v: 0
//   },
//   {
//     game: 'Apex Legends',
//     tag: 'suggestion',
//     status: 'new',
//     _id: '65acccc6e5317374a4e65d2d',
//     contents:
//       'We have not recieved a light ammo weapon in a while, how about a new light ammo assault rifle?',
//     likedBy: ['65acc444bf69812652536e9e'],
//     dislikedBy: [],
//     comments: [],
//     profileId: {
//       _id: '65acc444bf69812652536e9e',
//       userId: '65acc444bf69812652536e9c',
//       username: 'LethalFlakes',
//       roles: ['user'],
//       platform: 'pc',
//       bio: 'With honed reflexes and unwavering determination, I turn every game into a tactical masterpiece. My mission: to rise to the top of the FPS elite. Victory is the only option. In the high-stakes arena of FPS gaming, my name will be etched among the legends, my skills renowned, and my victories celebrated.',
//       profilePicture:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852419/playsense-profile/c9ohos5tjabxu0ddhg3u.jpg',
//       banner:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852422/playsense-profile/tt2a9vj98lhvdvxvzgox.jpg',
//       country: 'germany',
//       twitchUrl: 'https://www.twitch.tv/LethalFlakes',
//       youtubeUrl: 'https://www.youtube.com/LethalFlakes',
//       twitterUrl: 'https://twitter.com/',
//       discordUsername: 'LethalFlakes',
//       monitor: 'AOC 24G2',
//       headphones: 'HyperX Cloud II',
//       keyboard: 'Akko 3068B',
//       mouse: 'Logitech G102',
//       mousepad: 'SteelSeries QcK',
//       createdAt: '2024-01-21T07:14:12.856Z',
//       updatedAt: '2024-01-21T15:53:43.542Z',
//       __v: 0
//     },
//     createdAt: '2024-01-21T07:50:30.469Z',
//     updatedAt: '2024-01-21T11:58:35.664Z',
//     __v: 0
//   },
//   {
//     game: 'Apex Legends',
//     tag: 'suggestion',
//     status: 'under review',
//     _id: '65acc572bf69812652536ec0',
//     contents: 'Support more regions in store.',
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//     profileId: {
//       _id: '65acc444bf69812652536e9e',
//       userId: '65acc444bf69812652536e9c',
//       username: 'LethalFlakes',
//       roles: ['user'],
//       platform: 'pc',
//       bio: 'With honed reflexes and unwavering determination, I turn every game into a tactical masterpiece. My mission: to rise to the top of the FPS elite. Victory is the only option. In the high-stakes arena of FPS gaming, my name will be etched among the legends, my skills renowned, and my victories celebrated.',
//       profilePicture:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852419/playsense-profile/c9ohos5tjabxu0ddhg3u.jpg',
//       banner:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852422/playsense-profile/tt2a9vj98lhvdvxvzgox.jpg',
//       country: 'germany',
//       twitchUrl: 'https://www.twitch.tv/LethalFlakes',
//       youtubeUrl: 'https://www.youtube.com/LethalFlakes',
//       twitterUrl: 'https://twitter.com/',
//       discordUsername: 'LethalFlakes',
//       monitor: 'AOC 24G2',
//       headphones: 'HyperX Cloud II',
//       keyboard: 'Akko 3068B',
//       mouse: 'Logitech G102',
//       mousepad: 'SteelSeries QcK',
//       createdAt: '2024-01-21T07:14:12.856Z',
//       updatedAt: '2024-01-21T15:53:43.542Z',
//       __v: 0
//     },
//     createdAt: '2024-01-21T07:19:14.650Z',
//     updatedAt: '2024-01-21T07:19:14.650Z',
//     __v: 0
//   },
//   {
//     game: 'Apex Legends',
//     tag: 'bug report',
//     status: 'closed',
//     _id: '65acc55cbf69812652536ebe',
//     contents:
//       'Your weapons reload slower if you try to reload your weapon right after using a phoenix kit',
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//     profileId: {
//       _id: '65acc444bf69812652536e9e',
//       userId: '65acc444bf69812652536e9c',
//       username: 'LethalFlakes',
//       roles: ['user'],
//       platform: 'pc',
//       bio: 'With honed reflexes and unwavering determination, I turn every game into a tactical masterpiece. My mission: to rise to the top of the FPS elite. Victory is the only option. In the high-stakes arena of FPS gaming, my name will be etched among the legends, my skills renowned, and my victories celebrated.',
//       profilePicture:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852419/playsense-profile/c9ohos5tjabxu0ddhg3u.jpg',
//       banner:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852422/playsense-profile/tt2a9vj98lhvdvxvzgox.jpg',
//       country: 'germany',
//       twitchUrl: 'https://www.twitch.tv/LethalFlakes',
//       youtubeUrl: 'https://www.youtube.com/LethalFlakes',
//       twitterUrl: 'https://twitter.com/',
//       discordUsername: 'LethalFlakes',
//       monitor: 'AOC 24G2',
//       headphones: 'HyperX Cloud II',
//       keyboard: 'Akko 3068B',
//       mouse: 'Logitech G102',
//       mousepad: 'SteelSeries QcK',
//       createdAt: '2024-01-21T07:14:12.856Z',
//       updatedAt: '2024-01-21T15:53:43.542Z',
//       __v: 0
//     },
//     createdAt: '2024-01-21T07:18:52.546Z',
//     updatedAt: '2024-01-21T07:18:52.546Z',
//     __v: 0
//   },
//   {
//     game: 'Apex Legends',
//     tag: 'change request',
//     status: 'rejected',
//     _id: '65acc546bf69812652536ebc',
//     contents: 'Nerf Wignman',
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//     profileId: {
//       _id: '65acc444bf69812652536e9e',
//       userId: '65acc444bf69812652536e9c',
//       username: 'LethalFlakes',
//       roles: ['user'],
//       platform: 'pc',
//       bio: 'With honed reflexes and unwavering determination, I turn every game into a tactical masterpiece. My mission: to rise to the top of the FPS elite. Victory is the only option. In the high-stakes arena of FPS gaming, my name will be etched among the legends, my skills renowned, and my victories celebrated.',
//       profilePicture:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852419/playsense-profile/c9ohos5tjabxu0ddhg3u.jpg',
//       banner:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852422/playsense-profile/tt2a9vj98lhvdvxvzgox.jpg',
//       country: 'germany',
//       twitchUrl: 'https://www.twitch.tv/LethalFlakes',
//       youtubeUrl: 'https://www.youtube.com/LethalFlakes',
//       twitterUrl: 'https://twitter.com/',
//       discordUsername: 'LethalFlakes',
//       monitor: 'AOC 24G2',
//       headphones: 'HyperX Cloud II',
//       keyboard: 'Akko 3068B',
//       mouse: 'Logitech G102',
//       mousepad: 'SteelSeries QcK',
//       createdAt: '2024-01-21T07:14:12.856Z',
//       updatedAt: '2024-01-21T15:53:43.542Z',
//       __v: 0
//     },
//     createdAt: '2024-01-21T07:18:30.678Z',
//     updatedAt: '2024-01-21T07:18:30.678Z',
//     __v: 0
//   },
//   {
//     game: 'Apex Legends',
//     tag: 'bug report',
//     status: 'closed',
//     _id: '65acc532bf69812652536eba',
//     contents:
//       'You can reload faster if you press the reload key right after getting hit by melee.',
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//     profileId: {
//       _id: '65acc444bf69812652536e9e',
//       userId: '65acc444bf69812652536e9c',
//       username: 'LethalFlakes',
//       roles: ['user'],
//       platform: 'pc',
//       bio: 'With honed reflexes and unwavering determination, I turn every game into a tactical masterpiece. My mission: to rise to the top of the FPS elite. Victory is the only option. In the high-stakes arena of FPS gaming, my name will be etched among the legends, my skills renowned, and my victories celebrated.',
//       profilePicture:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852419/playsense-profile/c9ohos5tjabxu0ddhg3u.jpg',
//       banner:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852422/playsense-profile/tt2a9vj98lhvdvxvzgox.jpg',
//       country: 'germany',
//       twitchUrl: 'https://www.twitch.tv/LethalFlakes',
//       youtubeUrl: 'https://www.youtube.com/LethalFlakes',
//       twitterUrl: 'https://twitter.com/',
//       discordUsername: 'LethalFlakes',
//       monitor: 'AOC 24G2',
//       headphones: 'HyperX Cloud II',
//       keyboard: 'Akko 3068B',
//       mouse: 'Logitech G102',
//       mousepad: 'SteelSeries QcK',
//       createdAt: '2024-01-21T07:14:12.856Z',
//       updatedAt: '2024-01-21T15:53:43.542Z',
//       __v: 0
//     },
//     createdAt: '2024-01-21T07:18:10.359Z',
//     updatedAt: '2024-01-21T07:18:10.359Z',
//     __v: 0
//   },
//   {
//     game: 'Apex Legends',
//     tag: 'change request',
//     status: 'new',
//     _id: '65acc459bf69812652536ea1',
//     contents:
//       'Arc Stars should not slow players down if they do not stick to them.',
//     likedBy: [],
//     dislikedBy: [],
//     comments: ['65acc4e9bf69812652536eb3', '65acc509bf69812652536eb7'],
//     profileId: {
//       _id: '65acc444bf69812652536e9e',
//       userId: '65acc444bf69812652536e9c',
//       username: 'LethalFlakes',
//       roles: ['user'],
//       platform: 'pc',
//       bio: 'With honed reflexes and unwavering determination, I turn every game into a tactical masterpiece. My mission: to rise to the top of the FPS elite. Victory is the only option. In the high-stakes arena of FPS gaming, my name will be etched among the legends, my skills renowned, and my victories celebrated.',
//       profilePicture:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852419/playsense-profile/c9ohos5tjabxu0ddhg3u.jpg',
//       banner:
//         'http://res.cloudinary.com/dcc8txmdw/image/upload/v1705852422/playsense-profile/tt2a9vj98lhvdvxvzgox.jpg',
//       country: 'germany',
//       twitchUrl: 'https://www.twitch.tv/LethalFlakes',
//       youtubeUrl: 'https://www.youtube.com/LethalFlakes',
//       twitterUrl: 'https://twitter.com/',
//       discordUsername: 'LethalFlakes',
//       monitor: 'AOC 24G2',
//       headphones: 'HyperX Cloud II',
//       keyboard: 'Akko 3068B',
//       mouse: 'Logitech G102',
//       mousepad: 'SteelSeries QcK',
//       createdAt: '2024-01-21T07:14:12.856Z',
//       updatedAt: '2024-01-21T15:53:43.542Z',
//       __v: 0
//     },
//     createdAt: '2024-01-21T07:14:33.665Z',
//     updatedAt: '2024-01-21T09:06:57.977Z',
//     __v: 0
//   }
// ];
