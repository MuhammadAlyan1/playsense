import React from 'react';

type LoaderPropsType = {
  size?: number;
  style?: React.CSSProperties;
};
const Loader: React.FC<LoaderPropsType> = ({ size = 36, style }) => {
  return (
    <div style={{ width: size, height: size, marginInline: 'auto', ...style }}>
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
