import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
