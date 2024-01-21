import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import { ProfileType } from '../types/ProfileType';

type AuthContextType = {
  auth: ProfileType;
  setAuth: Dispatch<SetStateAction<ProfileType>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<ProfileType>({
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

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
