import { ProfileType } from '../../../types/ProfileType';
import { getTimeDifference } from '../../../utils/getTimeDifference';
import { TableColumn } from 'react-data-table-component';
type UsersTableHeadersType = {
  setSelectedProfileId: React.Dispatch<React.SetStateAction<string>>;
  setIsAssignRolesModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UsersTableHeaders = ({
  setIsAssignRolesModalOpen,
  setSelectedProfileId
}: UsersTableHeadersType): TableColumn<ProfileType>[] => {
  return [
    {
      name: 'Id',
      maxWidth: '80px',
      sortable: true,
      selector: (row: ProfileType) => (row.sNo != undefined ? row.sNo : row._id)
    },
    {
      name: 'Username',
      sortable: true,
      minWidth: '150px',
      selector: (row: ProfileType) => {
        return row.username;
      }
    },
    {
      name: 'Platform',
      sortable: true,
      minWidth: '150px',
      selector: (row: ProfileType) => {
        return row.platform;
      }
    },
    {
      name: 'Country',
      sortable: true,
      minWidth: '150px',
      selector: (row: ProfileType) => {
        return row.country;
      }
    },
    {
      name: 'Friends',
      sortable: true,
      minWidth: '150px',
      selector: (row: ProfileType) => {
        return row?.friends?.length || 0;
      }
    },
    {
      name: 'Roles',
      sortable: true,
      minWidth: '200px',
      cell: (row: ProfileType) => {
        return (
          <ul className="users__roles-container">
            {row?.roles?.sort()?.map((role) => {
              return (
                <li
                  key={role}
                  className={`users__role users__role--${role
                    .split(' ')
                    .join('-')}`}
                >
                  {role}
                </li>
              );
            })}
          </ul>
        );
      }
    },
    {
      name: 'Member Since',
      sortable: true,
      minWidth: '150px',
      selector: (row: ProfileType) => {
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
      selector: (row: ProfileType) =>
        getTimeDifference(row?.updatedAt) || 'Just now'
    },
    {
      name: 'Role Management',
      sortable: false,
      minWidth: '150px',
      cell: (row: ProfileType) => (
        <button
          className="users__assign-role-button"
          onClick={() => {
            setIsAssignRolesModalOpen(true);
            setSelectedProfileId(row._id);
          }}
        >
          Assign Roles
        </button>
      )
    }
  ];
};

export default UsersTableHeaders;
