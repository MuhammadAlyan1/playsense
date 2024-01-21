import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import { useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const SharedLayout = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  useEffect(() => {
    const setAuth = auth?.setAuth && auth?.setAuth;
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/jwt/check-auth`,
          {
            withCredentials: true
          }
        );

        if (response?.data?.success === true) {
          console.log('Succesfully signed in');
          response.data.data && setAuth && setAuth(response.data.data);
        } else if (response?.data?.success === false) {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
        navigate('/signin');
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
