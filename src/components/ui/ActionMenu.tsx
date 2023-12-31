import React, { useState, useEffect, useRef } from 'react';

import { BiDotsHorizontalRounded } from 'react-icons/bi';

type ActionMenuPropsType = {
  children: React.ReactNode;
};

const ActionMenu: React.FC<ActionMenuPropsType> = ({ children }) => {
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
        {children}
      </ul>
    </div>
  );
};

export default ActionMenu;
