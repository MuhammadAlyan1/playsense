import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const authContext = useAuth();
  const setAuth = authContext?.setAuth;

  const refresh = async () => {
    const response = await axios.get('/jwt/refresh', {
      withCredentials: true
    });

    setAuth &&
      setAuth((prev) => {
        console.log(JSON.stringify(prev));
        console.log(response?.data?.data);
        return {
          ...prev,
          accessToken: response?.data?.data?.accessToken
        };
      });

    return response?.data?.data?.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
