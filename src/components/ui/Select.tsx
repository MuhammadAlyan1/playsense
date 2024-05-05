import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

type SelectType = {
  state: string;
  setState: (value: string) => void;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  selectOptions: string[];
  className?: string;
};

const Select: React.FC<SelectType> = ({
  state,
  setState,
  Icon,
  selectOptions,
  className = ''
}) => {
  return (
    <div className={`select ${className}`}>
      <button className="select__button">
        <div className="select__icon-text-container">
          <div className="select__start-icon-container">
            <Icon className="select__start-icon" />
          </div>
          {state}
        </div>
        <FaAngleDown className="select__dropdown-icon" />
      </button>
      {
        <ul className="select__dropdown-menu">
          {selectOptions.map((option) => {
            return (
              <li
                key={option}
                tabIndex={0}
                className="select__dropdown-menu-item"
                onClick={() => setState(option.toLowerCase())}
              >
                {option}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Select;
