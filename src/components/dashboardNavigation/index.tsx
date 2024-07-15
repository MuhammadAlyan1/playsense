import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ReportIcon from '../../assets/icons/misc/report.svg?react';
import NotificationIcon from '../../assets/icons/misc/notifications.svg?react';
import UsersIcon from '../../assets/icons/misc/person.svg?react';
import OrdersIcon from '../../assets/icons/misc/dollar.svg?react';
import AnalyticsIcon from '../../assets/icons/misc/analytics.svg?react';
import DashboardIcon from '../../assets/icons/misc/dashboard.svg?react';
import { IoMdClose } from 'react-icons/io';
import { useLocation } from 'react-router-dom';

const DashboardNavigation = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { pathname } = useLocation();
  console.log('PATH NAME: ', pathname);
  return (
    <>
      {!isNavbarOpen && (
        <DashboardIcon
          className="dashboard-navigation__button dashboard-navigation__button--open"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        />
      )}
      <nav
        className={`dashboard-navigation ${
          isNavbarOpen
            ? 'dashboard-navigation--visible'
            : 'dashboard-navigation--hidden'
        }`}
      >
        <IoMdClose
          className="dashboard-navigation__button dashboard-navigation__button--close"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        />
        <NavLink
          onClick={() => window.scrollTo(0, 0)}
          to="/dashboard"
          className={({ isActive }) =>
            isActive && pathname === '/dashboard'
              ? 'dashboard-navigation__element dashboard-navigation__element--active'
              : 'dashboard-navigation__element'
          }
        >
          <AnalyticsIcon className="dashboard-navigation__icon" />
          <span className="dashboard-navigation__text">Analytics</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'dashboard-navigation__element dashboard-navigation__element--active'
              : 'dashboard-navigation__element'
          }
          onClick={() => window.scrollTo(0, 0)}
          to="/dashboard/orders"
        >
          <OrdersIcon className="dashboard-navigation__icon" />
          <span className="dashboard-navigation__text">Orders</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'dashboard-navigation__element dashboard-navigation__element--active'
              : 'dashboard-navigation__element'
          }
          onClick={() => window.scrollTo(0, 0)}
          to="/dashboard/notifications"
        >
          <NotificationIcon className="dashboard-navigation__icon" />
          <span className="dashboard-navigation__text">Notifications</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'dashboard-navigation__element dashboard-navigation__element--active'
              : 'dashboard-navigation__element'
          }
          onClick={() => window.scrollTo(0, 0)}
          to="/dashboard/users"
        >
          <UsersIcon className="dashboard-navigation__icon" />
          <span className="dashboard-navigation__text">Users</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'dashboard-navigation__element dashboard-navigation__element--active'
              : 'dashboard-navigation__element'
          }
          onClick={() => window.scrollTo(0, 0)}
          to="/dashboard/reports"
        >
          <ReportIcon className="dashboard-navigation__icon" />
          <span className="dashboard-navigation__text">Reports</span>
        </NavLink>
      </nav>
    </>
  );
};

export default DashboardNavigation;
