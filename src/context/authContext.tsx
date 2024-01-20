import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import { UserType } from '../types/UserType';

type AuthContextType = {
  auth: UserType;
  setAuth: Dispatch<SetStateAction<UserType>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<UserType>({
    userId: '',
    username: '',
    email: '',
    roles: [],
    timestamp: '',
    accessToken: ''
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
