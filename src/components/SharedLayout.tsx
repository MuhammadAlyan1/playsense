import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import { useEffect } from 'react';
import axios from 'axios';

const SharedLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/jwt/check-auth`,
          {
            withCredentials: true
          }
        );
        console.log('DATA: ', response.request.data);

        if (response?.data?.success === true) {
          console.log('Succesfully signed in');
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
