import DataTable, { Alignment, TableColumn } from 'react-data-table-component';
import { TiArrowSortedDown } from 'react-icons/ti';

type DataGridProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  props?: unknown;
};

const DataGrid = <T,>({ columns, data, ...props }: DataGridProps<T>) => {
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        responsive={true}
        subHeaderAlign={Alignment.RIGHT}
        subHeaderWrap
        progressComponent={<h1>Loading..</h1>}
        sortIcon={<TiArrowSortedDown className="sortIcon" />}
        customStyles={{
          noData: {
            style: {
              backgroundColor: 'transparent',
              color: '#fff'
            }
          }
        }}
        {...props}
      />
    </div>
  );
};

export default DataGrid;
