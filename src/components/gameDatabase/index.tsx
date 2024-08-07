import { useState } from 'react';
import Legends from './Legends';
import Weapons from './Weapons';
import AddDatabaseItem from './addDatabaseItem';

const GameDatabase = () => {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  return (
    <div className="game-database">
      <div className="game-database__header">
        <h1 className="game-database__heading">Game Database</h1>
        <button
          className="game-database__button"
          onClick={() => {
            setIsAddItemModalOpen((prev) => !prev);
          }}
        >
          Contribute
        </button>
      </div>
      <Legends />
      <Weapons />
      <AddDatabaseItem
        isModalOpen={isAddItemModalOpen}
        setIsModalOpen={setIsAddItemModalOpen}
      />
    </div>
  );
};

export default GameDatabase;
