import React from 'react';

type TabsType = {
  currentItem: string;
  setCurrentItem: (item: string) => void;
  tabItems: { id: number; name: string; value: string }[];
};

const Tabs: React.FC<TabsType> = ({
  currentItem,
  setCurrentItem,
  tabItems
}) => {
  return (
    <ul className="tabs">
      {tabItems.map((item) => {
        return (
          <li
            key={item.id}
            className={`tabs__item ${
              item.value === currentItem ? 'tabs__item--active' : ''
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

export default Tabs;
