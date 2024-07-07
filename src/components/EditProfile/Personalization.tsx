import React from 'react';
import pcIcon from '../../assets/icons/platform/PC.svg';
import playstationIcon from '../../assets/icons/platform/playstation.svg';
import xboxIcon from '../../assets/icons/platform/xbox.svg';

type PersonalizationPropType = {
  profilePicture: File | string;
  setProfilePicture: (file: File | string) => void;
  banner: File | string;
  setBanner: (file: File | string) => void;
  platform: 'pc' | 'xbox' | 'playstation';
  setPlatform: (platform: 'pc' | 'xbox' | 'playstation') => void;
};

const Personalization: React.FC<PersonalizationPropType> = ({
  profilePicture,
  setProfilePicture,
  banner,
  setBanner,
  platform,
  setPlatform
}) => {
  return (
    <div className="personalization">
      <div className="personalization__profile-picture">
        <p className="personalization__heading">Profile Picture</p>
        <div className="personalization__profile-picture-container avatar-container">
          <img
            className="personalization__profile-picture avatar-container__avatar"
            src={
              typeof profilePicture !== 'string'
                ? URL.createObjectURL(profilePicture)
                : profilePicture
            }
            alt="profile picture"
          />
        </div>
        <input
          className="personalization__upload-button"
          type="file"
          onChange={(e) =>
            setProfilePicture(
              e.target.files && e.target.files[0]
                ? e.target.files[0]
                : profilePicture
            )
          }
        />
      </div>
      <div className="personalization__banner">
        <p className="personalization__heading">Banner</p>
        <div className="personalization__banner-container">
          <img
            className="personalization__banner"
            src={
              typeof banner !== 'string'
                ? URL.createObjectURL(banner as File)
                : banner
            }
            alt="banner"
          />
        </div>
        <input
          className="personalization__upload-button"
          type="file"
          onChange={(e) => {
            setBanner(
              e.target.files && e.target.files[0] ? e.target.files[0] : banner
            );
          }}
        />
      </div>
      <div className="personalization__platforms-container">
        <p className="personalization__heading">Platform</p>
        <div className="personalization__platforms">
          <button
            className={`personalization__platform-button ${
              platform === 'pc'
                ? 'personalization__platform-button--selected'
                : ''
            }`}
            onClick={() => setPlatform('pc')}
          >
            <img
              src={pcIcon}
              alt="PC"
              className="personalization__platform-icon"
            />
          </button>
          <button
            className={`personalization__platform-button ${
              platform === 'playstation'
                ? 'personalization__platform-button--selected'
                : ''
            }`}
            onClick={() => setPlatform('playstation')}
          >
            <img
              src={playstationIcon}
              alt="PC"
              className="personalization__platform-icon"
            />
          </button>
          <button
            className={`personalization__platform-button ${
              platform === 'xbox'
                ? 'personalization__platform-button--selected'
                : ''
            }`}
            onClick={() => setPlatform('xbox')}
          >
            <img
              className="personalization__platform-icon"
              src={xboxIcon}
              alt="xbox"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personalization;
