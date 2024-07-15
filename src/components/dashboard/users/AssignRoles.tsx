import React, { useEffect, useState } from 'react';
import { ProfileType } from '../../../types/ProfileType';
import Modal from '../../ui/Modal';
import toast from 'react-hot-toast';
import axios from '../../../api/axios';

type AssignRolesTypes = {
  allProfiles: ProfileType[];
  setAllProfiles: React.Dispatch<React.SetStateAction<ProfileType[]>>;
  selectedProfileId: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AssignRoles: React.FC<AssignRolesTypes> = ({
  allProfiles,
  setAllProfiles,
  selectedProfileId,
  isModalOpen,
  setIsModalOpen
}) => {
  const allRoles = [
    'admin',
    'coach',
    'content creator',
    'esport elite',
    'game developer',
    'moderator',
    'user'
  ];
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const selectedProfile = allProfiles.find(
    (profile) => profile._id === selectedProfileId
  );
  useEffect(() => {
    selectedProfile?.roles && setSelectedRoles(selectedProfile.roles);
  }, [selectedProfileId]);

  const handleAssignRoles = async () => {
    try {
      const response = await axios.put(
        'profile/assign-roles',
        { selectedUserProfileId: selectedProfileId, roles: selectedRoles },
        { withCredentials: true }
      );

      console.log('ASSIGN ROLES RESPONSE: ', response);
      setAllProfiles((allProfiles) => {
        return allProfiles.map((profile) => {
          if (profile._id === selectedProfileId) {
            return {
              ...profile,
              roles: [...selectedRoles]
            };
          } else {
            return profile;
          }
        });
      });
      toast.success('Successfully assigned roles.');
    } catch (error) {
      console.log('Failed to assign roles.', error);
      toast.error('Failed to assign roles.');
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={setIsModalOpen} title="">
      <div className="assign-roles">
        <h1 className="assign-roles__title">Assign Roles</h1>
        <p className="assign-roles__label">Current Roles</p>
        <ul className="users__roles-container">
          {selectedRoles?.sort()?.map((role) => {
            return (
              <li
                onClick={() => {
                  setSelectedRoles((prev) =>
                    prev.filter((item) => item !== role)
                  );
                }}
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
        <p className="assign-roles__label">Click to Assign Roles</p>
        <ul className="users__roles-container">
          {allRoles?.sort()?.map((role) => {
            return (
              <li
                onClick={() =>
                  setSelectedRoles((prev) => [...new Set([...prev, role])])
                }
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
        <button
          className="assign-roles__button"
          disabled={selectedRoles?.length === 0}
          onClick={handleAssignRoles}
        >
          Assign Roles
        </button>
      </div>
    </Modal>
  );
};

export default AssignRoles;
