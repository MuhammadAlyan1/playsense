import Modal from '../../../ui/Modal';
import Tabs from '../../../ui/Tabs';
import { useState } from 'react';
import ReviewOrder from './ReviewOrder';
import ServiceDetails from './ServiceDetails';
import OrderDetails from './OrderDetails';
import { OrderType } from '../../../../types/OrderType';
type ViewOrderDetailsType = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  order: OrderType | undefined;
  profileId: string;
  setOrders: React.Dispatch<React.SetStateAction<OrderType[]>>;
};

const ViewOrderDetails: React.FC<ViewOrderDetailsType> = ({
  isModalOpen,
  setIsModalOpen,
  order,
  profileId,
  setOrders
}) => {
  const [currentItem, setCurrentItem] = useState('order-details');

  const tabItems: { id: number; name: string; value: string }[] = [
    {
      id: 1,
      name: 'Order Details',
      value: 'order-details'
    },
    {
      id: 2,
      name: 'Service Details',
      value: 'service-details'
    },
    ...(order?.orderStatus === 'completed' && profileId === order.customerId._id
      ? [
          {
            id: 3,
            name: 'Review',
            value: 'review'
          }
        ]
      : [])
  ];

  if (!order) return;
  if (!tabItems) return;

  return (
    <Modal isOpen={isModalOpen} onClose={setIsModalOpen} title={''}>
      <div>
        <Tabs
          tabItems={tabItems}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <div className="view-order">
          {currentItem === 'order-details' && <OrderDetails order={order} />}

          {currentItem === 'service-details' && (
            <ServiceDetails order={order} />
          )}
          {currentItem === 'review' && (
            <ReviewOrder order={order} setOrders={setOrders} />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ViewOrderDetails;
