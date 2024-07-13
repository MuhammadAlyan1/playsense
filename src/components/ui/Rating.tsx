'use client';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

type RatingProps = {
  value: number;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
  readOnly?: boolean;
  starsCount?: number;
};

const Rating: React.FC<RatingProps> = ({
  value,
  setValue,
  readOnly,
  starsCount = 5
}) => {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <>
      <div className={`flex cursor-pointer gap-1`}>
        {new Array(starsCount).fill(null).map((_, index) => {
          return (
            <FaStar
              key={index}
              onClick={() => setValue && setValue(index + 1)}
              onMouseEnter={() => setHoverValue(index + 1)}
              onMouseLeave={() => setHoverValue(0)}
              className={`rating__star ${
                index < (hoverValue || value) ? 'rating--active' : ''
              } ${readOnly ? 'rating--read-only' : ''}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Rating;
