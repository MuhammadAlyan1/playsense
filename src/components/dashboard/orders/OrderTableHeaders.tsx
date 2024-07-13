import { OrderType } from '../../../types/OrderType';
import { getTimeDifference } from '../../../utils/getTimeDifference';
import { TableColumn } from 'react-data-table-component';
type OrderTableHeadersType = {
  profileId: string;
  setIsScheduleAppointmentModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedModalOrderId: React.Dispatch<React.SetStateAction<string>>;
};

const OrderTableHeaders = ({
  profileId,
  setIsScheduleAppointmentModalOpen,
  setIsViewModalOpen,
  setOpenedModalOrderId
}: OrderTableHeadersType): TableColumn<OrderType>[] => {
  return [
    {
      name: 'Id',
      maxWidth: '80px',
      sortable: true,
      selector: (row: OrderType) => (row.sNo != undefined ? row.sNo : row._id)
    },

    {
      name: 'Status',
      sortable: true,
      minWidth: '150px',
      selector: (row: OrderType) => row.orderStatus
    },
    {
      name: 'Customer',
      sortable: true,
      minWidth: '150px',
      selector: (row: OrderType) =>
        typeof row?.customerId === 'object'
          ? row.customerId.username
          : row?.customerId
    },
    {
      name: 'Seller',
      sortable: true,
      minWidth: '150px',
      selector: (row: OrderType) =>
        typeof row?.sellerId === 'object'
          ? row.sellerId.username
          : row?.sellerId
    },
    {
      name: 'Order Date',
      sortable: true,
      minWidth: '150px',
      selector: (row: OrderType) => {
        const createdDate = new Date(row.createdAt);
        return `${createdDate?.getDate()}/${
          createdDate?.getMonth() + 1
        }/${createdDate?.getFullYear()}`;
      }
    },
    {
      name: 'Last Update',
      sortable: true,
      minWidth: '150px',
      selector: (row: OrderType) =>
        getTimeDifference(row?.updatedAt) || 'Just now'
    },
    {
      name: 'Actions',
      sortable: true,
      minWidth: '350px',
      cell: (row: OrderType) => (
        <div className="table-headers-actions">
          <button
            className="table-headers-actions--view-button"
            onClick={() => {
              setIsViewModalOpen((prev) => !prev);
              setOpenedModalOrderId(row._id);
            }}
          >
            View Details
          </button>
          {row.orderStatus === 'pending' &&
            row?.customerPaymentStatus === 'paid' &&
            row?.sellerId._id === profileId && (
              <button
                className="table-headers-actions--action-button"
                onClick={() => {
                  setIsScheduleAppointmentModalOpen((prev) => !prev);
                  setOpenedModalOrderId(row._id);
                }}
              >
                Schedule Session
              </button>
            )}
        </div>
      )
    }
  ];
};

export default OrderTableHeaders;
