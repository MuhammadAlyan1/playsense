import { FeedbackType } from '../../../types/FeedbacKType';
import { getTimeDifference } from '../../../utils/getTimeDifference';
import { TableColumn } from 'react-data-table-component';
type FeedbackTableHeadersType = {
  setIsChangeStatusModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedModalFeedbackId: React.Dispatch<React.SetStateAction<string>>;
};
const FeedbackTableHeaders = ({
  setIsChangeStatusModalOpen,
  setOpenedModalFeedbackId
}: FeedbackTableHeadersType): TableColumn<FeedbackType>[] => {
  return [
    {
      name: 'Id',
      maxWidth: '80px',
      sortable: true,
      selector: (row: FeedbackType) =>
        row.sNo != undefined ? row.sNo : row._id
    },
    {
      name: 'Username',
      sortable: true,
      minWidth: '150px',
      selector: (row: FeedbackType) => {
        return row.profileId?.username;
      }
    },
    {
      name: 'Contents',
      sortable: true,
      minWidth: '300px',
      cell: (row: FeedbackType) => {
        return <p>{row.contents}</p>;
      }
    },

    {
      name: 'Game',
      sortable: true,
      minWidth: '150px',
      selector: (row: FeedbackType) => {
        return row.game;
      }
    },
    {
      name: 'Category',
      sortable: true,
      minWidth: '150px',
      selector: (row: FeedbackType) => {
        return row.type;
      }
    },
    {
      name: 'Status',
      sortable: true,
      minWidth: '100px',
      selector: (row: FeedbackType) => {
        return row.status;
      }
    },

    {
      name: 'Created At',
      sortable: true,
      minWidth: '150px',
      selector: (row: FeedbackType) =>
        getTimeDifference(row?.createdAt) || 'Just now'
    },
    {
      name: 'Change Status',
      sortable: true,
      minWidth: '150px',
      cell: (row: FeedbackType) => (
        <button
          className="dashboard-feedback__change-status-button"
          onClick={() => {
            setIsChangeStatusModalOpen((prev) => !prev);
            setOpenedModalFeedbackId(row._id);
          }}
        >
          Change Status
        </button>
      )
    }
  ];
};

export default FeedbackTableHeaders;
