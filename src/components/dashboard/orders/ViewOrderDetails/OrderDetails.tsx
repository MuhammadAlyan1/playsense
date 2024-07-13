import moment from 'moment';
import { OrderType } from '../../../../types/OrderType';
import { getTimeDifference } from '../../../../utils/getTimeDifference';

type OrderDetailsType = {
  order: OrderType | undefined;
};

const OrderDetails: React.FC<OrderDetailsType> = ({ order }) => {
  if (!order) return;

  return (
    <>
      <p className="view-order__label">Status</p>
      <p
        className={`view-order__value view-order__badge view-order__badge--${
          order.orderStatus === 'pending'
            ? 'blue'
            : order.orderStatus === 'session scheduled'
            ? 'yellow'
            : 'green'
        }`}
      >
        {order.orderStatus}
      </p>
      <p className="view-order__label">Customer payment status</p>
      <p
        className={`view-order__value view-order__badge view-order__badge--${
          order.customerPaymentStatus === 'pending' ? 'blue' : 'green'
        }`}
      >
        {order.customerPaymentStatus}
      </p>
      <p className="view-order__label">Seller payment status</p>
      <p
        className={`view-order__value view-order__badge view-order__badge--${
          order.sellerPaymentStatus === 'pending' ? 'blue' : 'green'
        }`}
      >
        {order.sellerPaymentStatus}
      </p>
      <p className="view-order__label">Order Date</p>
      <p className="view-order__value view-order__badge view-order__badge--blue">
        {moment(order.createdAt).format('dddd, MMMM Do YYYY')}
      </p>
      <p className="view-order__label">Updated</p>
      <p className="view-order__value view-order__badge view-order__badge--blue">
        {getTimeDifference(order?.updatedAt) || 'Just now'}
      </p>
    </>
  );
};

export default OrderDetails;
