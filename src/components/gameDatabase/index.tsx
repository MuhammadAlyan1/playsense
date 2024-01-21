import Legends from './Legends';
import Weapons from './Weapons';

const GameDatabase = () => {
  return (
    <div className="game-database">
      <h1 className="game-database__heading">Game Database</h1>
      <Legends />
      <Weapons />
    </div>
  );
};

export default GameDatabase;
