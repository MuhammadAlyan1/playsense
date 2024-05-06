import React from 'react';
import { ServiceType } from '../../types/ServiceType';
import { truncateText } from '../../utils/truncateText';
import { IoMdStar } from 'react-icons/io';
import ChatIcon from '../../assets/icons/misc/chat.svg?react';

type ServicePropsType = {
  service: ServiceType;
};

const Service: React.FC<ServicePropsType> = ({ service }) => {
  return (
    <div key={service._id} className="service">
      <div className="service__image-container">
        <img
          src={service.coverPicture}
          alt={service.title}
          className="service__image"
        />
      </div>
      <div className="coach">
        <div className="coach__username-profile-picture-container">
          <div className="coach__profile-picture-container">
            <img
              src={service.profileId.profilePicture}
              alt={service.profileId.profilePicture}
              loading="lazy"
              className="coach__profile-picture"
            />
          </div>

          <p className="coach__username">{service.profileId.username}</p>
        </div>
        <div className="coach__rating-reviews-container">
          <p className="coach__rating">
            <IoMdStar className="coach__rating-icon" />
            {service.rating}
          </p>
          <p className="coach__reviews">({service.reviews})</p>
        </div>
      </div>
      <p className="service__title">{truncateText(service.title)}</p>
      <div className="service__interactions">
        <p className="service__price">${service.price}</p>
        <button className="service__chat-button">
          <ChatIcon className="service__chat-icon" />
        </button>
      </div>
      <div className="service__buttons-container">
        <button className="service__order-button">Order Now</button>
      </div>
    </div>
  );
};

export default Service;
