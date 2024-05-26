import { useNavigate } from 'react-router-dom';
import { WeaponsInfo } from './data/weapons';

const Weapons = () => {
  const navigate = useNavigate();

  return (
    <div className="weapons">
      <h2 className="weapons__sub-heading">Weapons</h2>
      <div className="weapons__container">
        {WeaponsInfo?.map((weapon) => {
          return (
            <div
              key={weapon.name}
              className="weapons__weapon"
              onClick={() => navigate(`/game-database/weapons/${weapon.name}`)}
            >
              <weapon.icon className="weapons__icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weapons;
