import React from 'react';

type NavigationType = {
  currentItem: string;
  setCurrentItem: (item: string) => void;
};

const navigationItems = [
  {
    id: 1,
    name: 'About Me',
    value: 'about'
  },
  {
    id: 2,
    name: 'Posts',
    value: 'posts'
  },
  {
    id: 3,
    name: 'Friends',
    value: 'friends'
  },
  {
    id: 4,
    name: 'Game Analysis',
    value: 'analysis'
  },
  {
    id: 5,
    name: 'Peripherals',
    value: 'peripherals'
  }
];

const Navigation: React.FC<NavigationType> = ({
  currentItem,
  setCurrentItem
}) => {
  return (
    <ul className="navigation">
      {navigationItems.map((item) => {
        return (
          <li
            key={item.id}
            className={`navigation__item ${
              item.value === currentItem ? 'navigation__item--active' : ''
            }`}
            onClick={() => setCurrentItem(item.value)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
