import { useState } from 'react';
import Modal from '../../ui/Modal';
import Select from '../../ui/Select';
import GameSvg from '../../../assets/icons/game.svg?react';
import TypeSvg from '../../../assets/icons/tag.svg?react';
import AddLegend from './AddLegend';
import AddWeapon from './AddWeapon';

type AddDatabaseItem = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

const AddDatabaseItem: React.FC<AddDatabaseItem> = ({
  isModalOpen,
  setIsModalOpen
}) => {
  const [game, setGame] = useState('apex legends');
  const [type, setType] = useState('weapon');

  return (
    <Modal isOpen={isModalOpen} onClose={setIsModalOpen} title={''}>
      <div className="add-database-item add-database-item">
        <h1 className="add-database-item__heading">
          Contribute to Game Database
        </h1>
        <p className="add-database-item__label">Game</p>
        <Select
          state={game}
          setState={setGame}
          selectOptions={['Apex Legends', 'Warzone', 'CSGO']}
          Icon={GameSvg}
        />
        <p className="add-database-item__label">Type</p>
        <Select
          state={type}
          setState={setType}
          selectOptions={['weapon', 'legend']}
          Icon={TypeSvg}
        />
        {type === 'weapon' ? (
          <AddWeapon game={game} setIsModalOpen={setIsModalOpen} />
        ) : (
          <AddLegend game={game} setIsModalOpen={setIsModalOpen} />
        )}
      </div>
    </Modal>
  );
};

export default AddDatabaseItem;
