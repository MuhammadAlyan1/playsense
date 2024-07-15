import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import axios from '../../../api/axios';
import { ProfileType } from '../../../types/ProfileType';
import { useNavigate } from 'react-router-dom';
import DataGrid from '../../dataGrid';
import UsersTableHeaders from './UsersTableHeaders';
import AssignRoles from './AssignRoles';

const Users = () => {
  const [allProfiles, setAllProfiles] = useState<ProfileType[] | []>([]);
  const [isAssignRolesModalOpen, setIsAssignRolesModalOpen] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState('');

  const auth = useAuth();
  const profileData = auth?.auth && auth?.auth;
  const profileId = profileData && profileData?._id;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfiles = async () => {
      if (!profileId) return;
      try {
        const response = await axios.get(
          `/profile/${profileId}?fetchAllProfiles=true`,
          {
            withCredentials: true
          }
        );
        console.log('All profiles response: ', response);
        if (response?.data?.success) {
          setAllProfiles(
            response?.data?.data.map((data: ProfileType, index: number) => {
              return {
                ...data,
                sNo: index + 1
              };
            })
          );
        }
      } catch (error) {
        console.log('Failed to fetch users: ', error);
        toast.error('Failed to fetch users');
      }
    };

    fetchProfiles();
  }, [profileId]);

  if (!profileId) return;
  if (!allProfiles || allProfiles.length === 0) return;
  if (
    !profileData?.roles?.includes('admin') &&
    !profileData?.roles?.includes('moderator')
  ) {
    toast.error(
      'You do you not the required privileges to perform this action.'
    );
    navigate('/dashboard');
    return;
  }

  return (
    <>
      <div className="users">
        <div className="users__header">
          <h1 className="users__heading">Users</h1>
          <button className="users__mark-all-as-read-button">
            Do something.
          </button>
        </div>
        <DataGrid
          columns={UsersTableHeaders({
            setIsAssignRolesModalOpen,
            setSelectedProfileId
          })}
          data={allProfiles}
        />
      </div>
      <AssignRoles
        allProfiles={allProfiles}
        setAllProfiles={setAllProfiles}
        isModalOpen={isAssignRolesModalOpen}
        setIsModalOpen={setIsAssignRolesModalOpen}
        selectedProfileId={selectedProfileId}
      />
    </>
  );
};

export default Users;