import { EliminationReasonPropsType } from '../../types/EliminationReasonPropsType';

const EliminationReason: React.FC<EliminationReasonPropsType> = ({
  eliminationReason,
  setEliminationReason
}) => {
  return (
    <div className="elimination-reason">
      <h2 className="elimination-reason__sub-heading">Elimination Reason</h2>
      <div className="elimination-reason__eliminations-container">
        {eliminationReasons.map((reason) => {
          return (
            <div
              key={reason.name}
              className={`elimination-reason__elimination text-button ${
                eliminationReason === reason.name ? 'text-button--selected' : ''
              }`}
              onClick={() => setEliminationReason(reason.name)}
            >
              <p className="elimination-reason__elimination-reason text-button__text">
                {reason.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EliminationReason;

const eliminationReasons = [
  {
    id: '1213',
    name: 'Fair Fight'
  },
  {
    id: '1211233',
    name: 'Focused Fire'
  },
  {
    id: '1211231233',
    name: '3rd Partied'
  },
  {
    id: '12141413',
    name: 'Zone Death'
  },
  {
    id: '1121241413',
    name: 'Resource Deficit'
  },
  {
    id: '1212412413',
    name: 'Others'
  }
];
