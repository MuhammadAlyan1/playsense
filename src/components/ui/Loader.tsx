type LoaderPropsType = {
  width?: string;
  height?: string;
};
const Loader: React.FC<LoaderPropsType> = ({
  width = '36px',
  height = '36px'
}) => {
  return (
    <div style={{ width: width, height: height }}>
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
