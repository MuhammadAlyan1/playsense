import React from 'react';
import { getTimeDifference } from '../../utils/getTimeDifference';
import { MatchAnalyticsType } from '../../types/MatchAnalyticsType';
import DataGrid from '../dataGrid';
import { TableColumn } from 'react-data-table-component';

type MatchAnalyticsTablePropsType = {
  matchData: MatchAnalyticsType[] | [];
};

const tableHeaders: TableColumn<MatchAnalyticsType>[] = [
  {
    name: 'Id',
    maxWidth: '80px',
    sortable: true,
    selector: (row: MatchAnalyticsType) =>
      row.sNo != undefined ? row.sNo : row._id
  },
  {
    name: 'Time',
    sortable: true,
    minWidth: '150px',
    selector: (row: MatchAnalyticsType) =>
      getTimeDifference(row?.createdAt) || 'Just now'
  },
  {
    name: 'Character',
    sortable: true,
    minWidth: '150px',
    selector: (row: MatchAnalyticsType) => row.character
  },
  {
    name: 'Mode',
    sortable: true,
    minWidth: '180px',
    selector: (row: MatchAnalyticsType) => row.mode
  },
  {
    name: 'Kills',
    sortable: true,
    minWidth: '50px',
    selector: (row: MatchAnalyticsType) => row.kills
  },
  {
    name: 'Damage',
    sortable: true,
    minWidth: '150px',
    selector: (row: MatchAnalyticsType) => row.damage
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '150px',
    selector: (row: MatchAnalyticsType) => row.position
  },
  {
    name: 'Map',
    sortable: true,
    minWidth: '150px',
    selector: (row: MatchAnalyticsType) => row.map
  }
];

const MatchAnalyticsTable: React.FC<MatchAnalyticsTablePropsType> = ({
  matchData
}) => {
  return <DataGrid columns={tableHeaders} data={matchData} />;
};

export default MatchAnalyticsTable;
