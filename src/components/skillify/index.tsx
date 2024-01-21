import { IoMdStar } from 'react-icons/io';
import ChatIcon from '../../assets/icons/misc/chat.svg?react';
const Skillify = () => {
  const services = [
    {
      title: 'I will help you reach Masters!',
      imageUrl:
        'https://images.unsplash.com/photo-1636036769389-343bb250f013?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      _id: '123123',
      price: 20,
      profileId: {
        _id: '1231',
        username: 'LethalFLakes',
        roles: ['content creator', 'coach', 'esport elite'],
        rating: 4.2,
        reviews: 26,
        price: 40,
        profilePicture:
          'https://res.cloudinary.com/dcc8txmdw/image/upload/v1705819981/playsense-profile/vgiadrbjgmgd6qhdwoy2.jpg'
      }
    },
    {
      title: 'I will help you reach Masters!',
      price: 60,
      imageUrl:
        'https://images.unsplash.com/photo-1636036769389-343bb250f013?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      _id: '123121213',
      profileId: {
        _id: '1212331',
        username: 'LethalFLakes',
        roles: ['content creator', 'coach', 'esport elite'],
        rating: 4.2,
        reviews: 26,
        profilePicture:
          'https://res.cloudinary.com/dcc8txmdw/image/upload/v1705819981/playsense-profile/vgiadrbjgmgd6qhdwoy2.jpg'
      }
    },
    {
      title: 'I will help you reach Masters!',
      _id: '12312213',
      price: 40,

      imageUrl:
        'https://images.unsplash.com/photo-1636036769389-343bb250f013?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profileId: {
        _id: '1231231',
        username: 'LethalFLakes',
        roles: ['content creator', 'coach', 'esport elite'],
        rating: 4.2,
        reviews: 26,
        profilePicture:
          'https://res.cloudinary.com/dcc8txmdw/image/upload/v1705819981/playsense-profile/vgiadrbjgmgd6qhdwoy2.jpg'
      }
    },
    {
      title: 'I will help you reach Masters!',
      _id: '12312213',
      price: 40,

      imageUrl:
        'https://images.unsplash.com/photo-1636036769389-343bb250f013?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profileId: {
        _id: '1231231',
        username: 'LethalFLakes',
        roles: ['content creator', 'coach', 'esport elite'],
        rating: 4.2,
        reviews: 26,
        profilePicture:
          'https://res.cloudinary.com/dcc8txmdw/image/upload/v1705819981/playsense-profile/vgiadrbjgmgd6qhdwoy2.jpg'
      }
    },
    {
      title: 'I will help you reach Masters!',
      _id: '12312213',
      price: 40,

      imageUrl:
        'https://images.unsplash.com/photo-1636036769389-343bb250f013?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profileId: {
        _id: '1231231',
        username: 'LethalFLakes',
        roles: ['content creator', 'coach', 'esport elite'],
        rating: 4.2,
        reviews: 26,
        profilePicture:
          'https://res.cloudinary.com/dcc8txmdw/image/upload/v1705819981/playsense-profile/vgiadrbjgmgd6qhdwoy2.jpg'
      }
    },
    {
      title: 'I will help you reach Masters!',
      _id: '12312213',
      price: 40,

      imageUrl:
        'https://images.unsplash.com/photo-1636036769389-343bb250f013?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profileId: {
        _id: '1231231',
        username: 'LethalFLakes',
        roles: ['content creator', 'coach', 'esport elite'],
        rating: 4.2,
        reviews: 26,
        profilePicture:
          'https://res.cloudinary.com/dcc8txmdw/image/upload/v1705819981/playsense-profile/vgiadrbjgmgd6qhdwoy2.jpg'
      }
    },
    {
      title: 'I will help you reach Masters!',
      _id: '12312213',
      price: 40,

      imageUrl:
        'https://images.unsplash.com/photo-1636036769389-343bb250f013?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profileId: {
        _id: '1231231',
        username: 'LethalFLakes',
        roles: ['content creator', 'coach', 'esport elite'],
        rating: 4.2,
        reviews: 26,
        profilePicture:
          'https://res.cloudinary.com/dcc8txmdw/image/upload/v1705819981/playsense-profile/vgiadrbjgmgd6qhdwoy2.jpg'
      }
    },
    {
      title: 'I will help you reach Masters!',
      _id: '12312213',
      price: 40,

      imageUrl:
        'https://images.unsplash.com/photo-1636036769389-343bb250f013?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profileId: {
        _id: '1231231',
        username: 'LethalFLakes',
        roles: ['content creator', 'coach', 'esport elite'],
        rating: 4.2,
        reviews: 26,
        profilePicture:
          'https://res.cloudinary.com/dcc8txmdw/image/upload/v1705819981/playsense-profile/vgiadrbjgmgd6qhdwoy2.jpg'
      }
    }
  ];

  return (
    <div className="skillify">
      <h1 className="skillify__heading">Skillify</h1>
      <div className="skillify__services">
        {services.map((service) => {
          return (
            <div key={service._id} className="service">
              <div className="service__image-container">
                <img
                  src={service.imageUrl}
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

                  <p className="coach__username">
                    {service.profileId.username}
                  </p>
                </div>
                <div className="coach__rating-reviews-container">
                  <p className="coach__rating">
                    <IoMdStar className="coach__rating-icon" />
                    {service.profileId.rating}
                  </p>
                  <p className="coach__reviews">
                    ({service.profileId.reviews})
                  </p>
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
        })}
      </div>
    </div>
  );
};

export default Skillify;

const truncateText = (text: string, maxTextLength = 120) => {
  let shortText = '';
  if (text.length > maxTextLength) {
    shortText = text.slice(0, maxTextLength) + ' ...';
  } else {
    return text;
  }
  return shortText;
};
