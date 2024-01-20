import { SquadPositionPropsType } from '../../types/SquadPositionPropsType';

const SquadPosition: React.FC<SquadPositionPropsType> = ({
  selectedPosition,
  setSelectedPosition
}) => {
  return (
    <div className="squad-position">
      <h2 className="squad-position__sub-heading">Squad Position</h2>
      <div className="squad-position__container">
        {squadPositions.map((position) => {
          return (
            <div
              key={position.name}
              className={`squad-position__position text-button ${
                selectedPosition === position.name
                  ? 'text-button--selected'
                  : ''
              }`}
              onClick={() => setSelectedPosition(position.name)}
            >
              <p className="squad-position__position-name text-button__text">
                {position.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SquadPosition;

const squadPositions = [
  {
    id: '1213',
    name: 'First Place'
  },
  {
    id: '1211233',
    name: 'Second Place'
  },
  {
    id: '1211231233',
    name: 'Top Three'
  },
  {
    id: '12141413',
    name: 'Top Five'
  },
  {
    id: '1121241413',
    name: 'Top Ten'
  },
  {
    id: '1121241413',
    name: 'Early Game'
  },
  {
    id: '1212412413',
    name: 'Others'
  }
];
