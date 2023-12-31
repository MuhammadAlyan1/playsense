import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { BiDotsHorizontalRounded } from 'react-icons/bi';

const actionMenuItems = [
  {
    name: 'Add Friend',
    href: '/edit-profile'
  },
  {
    name: 'Block',
    href: '#'
  }
];

const ActionMenu = () => {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const actionMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(event.target as Node | null)
      ) {
        setIsActionMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="action-menu" ref={actionMenuRef}>
      <BiDotsHorizontalRounded
        className="action-menu__icon"
        onClick={() => setIsActionMenuOpen((prev) => !prev)}
      />
      <ul
        className={`action-menu__list ${
          isActionMenuOpen
            ? 'action-menu__list--visible'
            : 'action-menu__list--hidden'
        }`}
      >
        {actionMenuItems.map((item) => {
          return (
            <li
              key={item.name}
              className="action-menu__item"
              onClick={() => {
                setIsActionMenuOpen(false);
              }}
            >
              <Link to={item.href} className="action-menu__link">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ActionMenu;
