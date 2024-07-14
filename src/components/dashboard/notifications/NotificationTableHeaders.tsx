import { NotificationType } from '../../../types/NotificationType';
import { getTimeDifference } from '../../../utils/getTimeDifference';
import { TableColumn } from 'react-data-table-component';
type NotificationTableHeaderType = {
  handleMarkAsRead: (id: string[]) => void;
};

const NotificationTableHeaders = ({
  handleMarkAsRead
}: NotificationTableHeaderType): TableColumn<NotificationType>[] => {
  return [
    {
      name: 'Id',
      maxWidth: '80px',
      sortable: true,
      selector: (row: NotificationType) =>
        row.sNo != undefined ? row.sNo : row._id
    },
    {
      name: 'Message',
      width: '350px',
      sortable: false,
      cell: (row: NotificationType) => <p>{row.message}</p>
    },

    {
      name: 'Read',
      sortable: true,
      minWidth: '100px',
      selector: (row: NotificationType) => {
        return row.isRead ? 'Read' : 'Not Read';
      }
    },
    {
      name: 'Sender',
      sortable: true,
      minWidth: '100px',
      selector: (row: NotificationType) =>
        typeof row?.senderId === 'object'
          ? row?.senderId?.username
          : row?.senderId
    },
    {
      name: 'Type',
      sortable: true,
      minWidth: '100px',
      selector: (row: NotificationType) => row.type
    },

    {
      name: 'Created At',
      sortable: true,
      minWidth: '150px',
      selector: (row: NotificationType) =>
        getTimeDifference(row?.createdAt) || 'Just now'
    },
    {
      name: 'Actions',
      sortable: true,
      minWidth: '150px',
      cell: (row: NotificationType) => {
        return (
          <button
            disabled={row.isRead}
            className="notifications__change-notification-status"
            onClick={() => handleMarkAsRead([row?._id])}
          >
            Mark as Read
          </button>
        );
      }
    }
  ];
};

export default NotificationTableHeaders;
