import moment from 'moment';
import { OrderType } from '../../../../types/OrderType';
import { FaStar } from 'react-icons/fa';

type ServiceDetailsType = {
  order: OrderType | undefined;
};

const ServiceDetails: React.FC<ServiceDetailsType> = ({ order }) => {
  if (!order) return;

  return (
    <>
      <p className="view-order__label">Seller</p>
      <p
        className={`view-order__value view-order__badge view-order__badge--blue`}
      >
        {order?.sellerId?.username}
      </p>
      <p className="view-order__label">Title</p>
      <p className="view-order__value view-order__badge view-order__badge--info">
        {order?.serviceId?.title}
      </p>
      <p className="view-order__label">Price</p>
      <p className="view-order__value view-order__badge view-order__badge--green">
        ${order?.serviceId?.price}
      </p>

      <p className="view-order__label">Rating</p>
      <p
        className={`view-order__value view-order__badge view-order__badge--rating view-order__rating `}
      >
        {order.serviceId?.rating?.toFixed(1) || 0}{' '}
        <FaStar className="view-order__rating-icon" />
      </p>
      <p className="view-order__label">Total Sales</p>
      <p
        className={`view-order__value view-order__badge view-order__badge--blue`}
      >
        {order.serviceId.totalSales || 0}
      </p>
      <p className="view-order__label">Created At</p>
      <p className="view-order__value view-order__badge view-order__badge--blue">
        {moment(order?.serviceId?.createdAt).format('dddd, MMMM Do YYYY')}
      </p>
    </>
  );
};

export default ServiceDetails;
