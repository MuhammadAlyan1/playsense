import { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import logo from '../../assets/icons/logo/playsense.svg';
import placeholderProfilePicture from '../../assets/placeholders/profile-picture.svg';
import NotificationIcon from '../../assets/icons/misc/notifications.svg?react';
import ChatIcon from '../../assets/icons/misc/chat.svg?react';

import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const profileData = useAuth();
  const linkItems = [
    { name: 'home', href: '/' },
    { name: 'analytics', href: '/analytics' },
    { name: 'feedback hub', href: '/feedback-hub' },
    { name: 'game database', href: '/game-database' },
    { name: 'skillify', href: '/skillify' }
  ];

  const getFormatedBadgeValue = (value: number) => {
    if (value <= 0) {
      return '';
    } else if (value > 99) {
      return '99+';
    } else return value.toString();
  };

  const profileMenuItems = [
    {
      name: 'My Profile',
      href: '/profile'
    },
    profileData
      ? {
          name: 'Dashboard',
          href: '/dashboard'
        }
      : {
          name: 'Sign in',
          href: '/signin'
        }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node | null)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      {isNavbarOpen ? (
        <IoMdClose
          className="navbar__button navbar__button--closed"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        />
      ) : (
        <GiHamburgerMenu
          className="navbar__button navbar__button--opened"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        />
      )}
      <nav
        className={`navbar ${
          isNavbarOpen ? 'navbar--visible' : 'navbar--hidden'
        }`}
      >
        <div className="navbar__logo-container">
          <img src={logo} alt="PlaySense" className="navbar__logo" />
        </div>
        <ul className="navbar__list">
          {linkItems.map((item) => {
            return (
              <li key={item.name} className="navbar__item">
                <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? 'navbar__link navbar__link--active'
                      : 'navbar__link'
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="navbar__user-panel">
          <button className="navbar__user-panel-icon-button">
            <ChatIcon className="navbar__user-panel-icon" />

            {getFormatedBadgeValue(2) && (
              <p className="navbar__user-panel-icon-badge">
                {getFormatedBadgeValue(2)}
              </p>
            )}
          </button>
          <button className="navbar__user-panel-icon-button">
            <NotificationIcon className="navbar__user-panel-icon" />

            {getFormatedBadgeValue(9) && (
              <p className="navbar__user-panel-icon-badge">
                {getFormatedBadgeValue(9)}
              </p>
            )}
          </button>
          <div className="navbar__profile-container" ref={profileMenuRef}>
            <button
              className="navbar__user-panel-icon-button"
              onClick={() => setIsProfileMenuOpen((prev) => !prev)}
            >
              <img
                src={placeholderProfilePicture}
                alt="profile"
                className="navbar__user-panel-icon"
              />
            </button>
            <ul
              className={`navbar__profile-menu ${
                isProfileMenuOpen
                  ? 'navbar__profile-menu--visible'
                  : 'navbar__profile-menu--hidden'
              }`}
            >
              {profileMenuItems.map((item) => {
                return (
                  <li
                    key={item.name}
                    className="navbar__profile-menu-item"
                    tabIndex={0}
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                    }}
                  >
                    <Link to={item.href} className="navbar__profile-menu-link">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
