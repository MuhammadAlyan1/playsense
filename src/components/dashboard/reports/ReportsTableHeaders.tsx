import { ReportType } from '../../../types/ReportType';
import { getTimeDifference } from '../../../utils/getTimeDifference';
import { TableColumn } from 'react-data-table-component';

const ReportsTableHeaders = (): TableColumn<ReportType>[] => {
  return [
    {
      name: 'Id',
      maxWidth: '80px',
      sortable: true,
      selector: (row: ReportType) => (row.sNo != undefined ? row.sNo : row._id)
    },
    {
      name: 'Reported By',
      sortable: true,
      minWidth: '150px',
      selector: (row: ReportType) => {
        return row.reporterId?.username;
      }
    },
    {
      name: 'Content Owner',
      sortable: true,
      minWidth: '150px',
      selector: (row: ReportType) => {
        console.log('CONTENT OWNER: ', row.reportedProfileId);
        return row.reportedProfileId?.username;
      }
    },
    {
      name: 'Category',
      sortable: true,
      minWidth: '150px',
      selector: (row: ReportType) => {
        return row.itemType;
      }
    },
    {
      name: 'Report Reason',
      sortable: true,
      minWidth: '200px',
      selector: (row: ReportType) => {
        return row.reason;
      }
    },

    {
      name: 'Created At',
      sortable: true,
      minWidth: '150px',
      selector: (row: ReportType) =>
        getTimeDifference(row?.createdAt) || 'Just now'
    }
  ];
};

export default ReportsTableHeaders;
