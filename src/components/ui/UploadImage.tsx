import React from 'react';

type UploadImageType = {
  image: File | string;
  setImage: (file: File | string) => void;
  label: string;
  className?: string;
};

const UploadImage: React.FC<UploadImageType> = ({
  image,
  setImage,
  label,
  className = ''
}) => {
  return (
    <div className={`image-upload ${className}`}>
      <p className="image-upload__label">{label}</p>
      <div className="image-upload__image-container">
        <img
          className="image-upload__image"
          src={
            typeof image !== 'string'
              ? URL.createObjectURL(image as File)
              : image
          }
          alt="image"
        />
      </div>
      <input
        className="image-upload__upload-button"
        type="file"
        onChange={(e) =>
          setImage(e.target.files && e.target.files[0] ? e.target.files[0] : '')
        }
      />
    </div>
  );
};

export default UploadImage;
