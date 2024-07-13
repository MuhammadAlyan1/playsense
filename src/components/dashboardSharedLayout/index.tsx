import { Outlet, useNavigate } from 'react-router-dom';
import DashboardNavigation from '../dashboardNavigation';
import Navbar from '../navbar';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import axios from '../../api/axios';

const DashboardSharedLayout = () => {
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
    <div className="dashboard-shared-layout">
      <Navbar />
      <DashboardNavigation />
      <main className="dashboard-shared-layout__pages">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardSharedLayout;
