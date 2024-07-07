import React from 'react';
import { ServiceType } from '../../types/ServiceType';
import { truncateText } from '../../utils/truncateText';
import { IoMdStar } from 'react-icons/io';
import ChatIcon from '../../assets/icons/misc/chat.svg?react';
import toast from 'react-hot-toast';
import axios from '../../api/axios';
import {
  PayPalButtons,
  PayPalScriptProvider,
  PayPalButtonsComponentProps
} from '@paypal/react-paypal-js';

type ServicePropsType = {
  service: ServiceType;
};

const Service: React.FC<ServicePropsType> = ({ service }) => {
  const handleCreateOrder: PayPalButtonsComponentProps['createOrder'] = (
    _,
    actions
  ) => {
    return actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: service.price.toString()
          }
        }
      ]
    });
  };

  const handleOnApprove: PayPalButtonsComponentProps['onApprove'] = async (
    data,
    actions
  ) => {
    return actions?.order?.capture().then(async () => {
      try {
        await axios.post(
          '/paypal/payment-success',
          {
            orderID: data.orderID,
            serviceId: service._id,
            sellerId: service?.profileId?._id,
            paypalAccountId: service.paypalAccountId,
            amount: service.price
          },
          {
            withCredentials: true
          }
        );
        toast.success('Payment successful.');
      } catch (error) {
        console.log('Payment processing failed: ', error);
        toast.error('Payment processing failed.');
      }
    });
  };

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

      <PayPalScriptProvider
        options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID }}
      >
        <PayPalButtons
          fundingSource="paypal"
          style={{ layout: 'horizontal', tagline: false }}
          createOrder={handleCreateOrder}
          onApprove={handleOnApprove}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Service;
