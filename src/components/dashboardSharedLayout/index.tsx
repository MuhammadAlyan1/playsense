// import React, { useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
import DashboardNavigation from '../dashboardNavigation';
import Navbar from '../navbar';

const DashboardSharedLayout = () => {
  // const {
  //   state: { user }
  // } = useContext(AppContext);
  // const location = useLocation();
  // const navigate = useNavigate();
  // const { userID } = user;

  // useEffect(() => {
  //   if (location.pathname === '/signin') return;
  //   if (location.pathname === '/signup') return;

  //   if (!userID) {
  //     navigate('/signin');
  //   }
  // }, [location]);

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
