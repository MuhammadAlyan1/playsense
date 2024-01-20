import BattleRoyaleIcon from '../../assets/icons/modes/battle-royale.svg?react';
import ControlIcon from '../../assets/icons/modes/control.svg?react';
import RankedIcon from '../../assets/icons/modes/ranked.svg?react';
import TeamDeathMatchIcon from '../../assets/icons/modes/team-death-match.svg?react';
import OthersIcon from '../../assets/icons/modes/others.svg?react';
import { ModesPropsType } from '../../types/ModesPropsType';

const Modes: React.FC<ModesPropsType> = ({ selectedMode, setSelectedMode }) => {
  return (
    <div className="modes">
      <h2 className="modes__sub-heading">Mode</h2>
      <div className="modes__modes-container">
        {modes.map((mode) => {
          return (
            <div
              key={mode.name}
              className={`modes__mode icon-button ${
                selectedMode === mode.name ? 'icon-button--selected' : ''
              }`}
              title={mode.name}
              onClick={() => setSelectedMode(mode.name)}
            >
              <mode.icon className="icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modes;

const modes = [
  {
    id: '1123',
    name: 'Battle Royale',
    icon: BattleRoyaleIcon
  },
  {
    id: '1121233',
    name: 'Ranked',
    icon: RankedIcon
  },
  {
    id: '1112312323',
    name: 'Team Death Match',
    icon: TeamDeathMatchIcon
  },
  {
    id: '1112312323',
    name: 'Control',
    icon: ControlIcon
  },
  {
    id: '11123123235',
    name: 'Others',
    icon: OthersIcon
  }
];
