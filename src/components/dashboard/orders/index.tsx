import React, { useEffect, useState } from 'react';
import { OrderType } from '../../../types/OrderType';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import toast from 'react-hot-toast';
import OrderTableHeaders from './OrderTableHeaders';
import DataGrid from '../../dataGrid';
import ScheduleSession from './ScheduleSession';
import ViewOrderDetails from './ViewOrderDetails';

const Orders = () => {
  const [orders, setOrders] = useState<OrderType[] | []>([]);
  const [fetchAs, setFetchAs] = useState<'customer' | 'seller'>('customer');
  const [isScheduleAppointmentModalOpen, setIsScheduleAppointmentModalOpen] =
    useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [openedModalOrderId, setOpenedModalOrderId] = useState('');
  const auth = useAuth();
  const profileData = auth?.auth && auth?.auth;
  const profileId = profileData && profileData?._id;
  console.log('PROFILE ID: ', profileId);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `/order?profileId=${profileId}${
            profileData?.roles?.includes('admin')
              ? ''
              : fetchAs === 'seller'
              ? '&fetchAsSeller=true'
              : '&fetchAsCustomer=true'
          }`,
          { withCredentials: true }
        );

        if (response?.data?.success) {
          setOrders(
            response?.data?.data.map((data: OrderType, index: number) => {
              return {
                ...data,
                sNo: index + 1
              };
            })
          );
        }
      } catch (error) {
        console.log('Failed to fetch orders: ', error);
        toast.error('Failed to fetch orders.');
      }
    };

    fetchOrders();
  }, [profileId, fetchAs]);

  if (!profileId) return;
  if (!orders) return;
  return (
    <div className="orders">
      <div className="orders__header">
        <h1 className="orders__title">Viewing orders as {fetchAs}</h1>
        <button
          className="orders__orders-swap-button"
          onClick={() =>
            setFetchAs((prev) => (prev === 'customer' ? 'seller' : 'customer'))
          }
        >
          Fetch as {fetchAs === 'customer' ? 'seller' : 'customer'}
        </button>
      </div>
      <DataGrid
        columns={OrderTableHeaders({
          profileId,
          setIsScheduleAppointmentModalOpen,
          setIsViewModalOpen,
          setOpenedModalOrderId
        })}
        data={orders}
      />
      <ScheduleSession
        isModalOpen={isScheduleAppointmentModalOpen}
        setIsModalOpen={setIsScheduleAppointmentModalOpen}
        openedModalOrderId={openedModalOrderId}
        setOrders={setOrders}
      />
      <ViewOrderDetails
        isModalOpen={isViewModalOpen}
        profileId={profileId}
        setIsModalOpen={setIsViewModalOpen}
        order={orders.find((order) => order._id === openedModalOrderId)}
        setOrders={setOrders}
      />
    </div>
  );
};

export default Orders;
