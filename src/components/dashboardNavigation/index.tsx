import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MoneyIcon from '../../assets/icons/misc/money.svg?react';
import ReportIcon from '../../assets/icons/misc/report.svg?react';
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
          <MoneyIcon className="dashboard-navigation__icon" />
          <span className="dashboard-navigation__text">Dashboard</span>
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
          <MoneyIcon className="dashboard-navigation__icon" />
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
          <MoneyIcon className="dashboard-navigation__icon" />
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
          <MoneyIcon className="dashboard-navigation__icon" />
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
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'dashboard-navigation__element dashboard-navigation__element--active'
              : 'dashboard-navigation__element'
          }
          onClick={() => window.scrollTo(0, 0)}
          to="/users"
        >
          <MoneyIcon className="dashboard-navigation__icon" />
          <span className="dashboard-navigation__text">Users</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'dashboard-navigation__element dashboard-navigation__element--active'
              : 'dashboard-navigation__element'
          }
          onClick={() => window.scrollTo(0, 0)}
          to="/emails"
        >
          <MoneyIcon className="dashboard-navigation__icon" />

          <span className="dashboard-navigation__text">Emails</span>
        </NavLink>

        <div className="dashboard-navigation__theme">
          <MoneyIcon className="dashboard-navigation__icon" />
          <span className="dashboard-navigation__text">Theme</span>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavigation;
