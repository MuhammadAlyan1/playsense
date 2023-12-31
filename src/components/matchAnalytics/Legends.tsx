import React, { useState } from 'react';
import AddIcon from '../../assets/icons/misc/add.svg?react';
import AshIcon from '../../assets/icons/characters/ash.svg?react';
import BangaloreIcon from '../../assets/icons/characters/bangalore.svg?react';
import BloodhoundIcon from '../../assets/icons/characters/bloodhound.svg?react';
import BallisticIcon from '../../assets/icons/characters/ballistic.svg?react';
import CausticIcon from '../../assets/icons/characters/caustic.svg?react';
import CryptoIcon from '../../assets/icons/characters/crypto.svg?react';
import CatalystIcon from '../../assets/icons/characters/catalyst.svg?react';
import ConduitIcon from '../../assets/icons/characters/conduit.svg?react';
import FuseIcon from '../../assets/icons/characters/fuse.svg?react';
import GibraltarIcon from '../../assets/icons/characters/gibraltar.svg?react';
import HorizonIcon from '../../assets/icons/characters/horizon.svg?react';
import LifelineIcon from '../../assets/icons/characters/lifeline.svg?react';
import LobaIcon from '../../assets/icons/characters/loba.svg?react';
import MirageIcon from '../../assets/icons/characters/mirage.svg?react';
import MadMaggieIcon from '../../assets/icons/characters/mad-maggie.svg?react';
import NewcastleIcon from '../../assets/icons/characters/newcastle.svg?react';
import OctaneIcon from '../../assets/icons/characters/octane.svg?react';
import PathfinderIcon from '../../assets/icons/characters/pathfinder.svg?react';
import RampartIcon from '../../assets/icons/characters/rampart.svg?react';
import RevenantIcon from '../../assets/icons/characters/revenant.svg?react';
import WattsonIcon from '../../assets/icons/characters/wattson.svg?react';
import WraithIcon from '../../assets/icons/characters/wraith.svg?react';
import ValkyrieIcon from '../../assets/icons/characters/valkyrie.svg?react';
import VantageIcon from '../../assets/icons/characters/vantage.svg?react';
import SeerIcon from '../../assets/icons/characters/seer.svg?react';
import Modal from '../ui/Modal';

const Legends = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [isCharactersModalOpen, setIsCharactersModalOpen] = useState(false);

  return (
    <div className="legends">
      <h2 className="legends__sub-heading">Legend</h2>
      <div className="legends__legends-container">
        {favoriteLegends.map((legend) => {
          return (
            <div
              title={legend.name}
              className={`icon-button ${
                selectedCharacter === legend.name ? 'icon-button--selected' : ''
              }`}
              key={legend.name}
              onClick={() => setSelectedCharacter(legend.name)}
            >
              <legend.icon className="icon" />
            </div>
          );
        })}

        <div
          className="icon-button"
          title="Add Legend"
          onClick={() => setIsCharactersModalOpen((prev) => !prev)}
        >
          <AddIcon className="icon" />
        </div>
      </div>
      <Modal
        isOpen={isCharactersModalOpen}
        onClose={setIsCharactersModalOpen}
        title="Legends"
      >
        {legends.map((legend) => {
          return (
            <div
              title={legend.name}
              className={`icon-button ${
                selectedCharacter === legend.name ? 'icon-button--selected' : ''
              }`}
              key={legend.name}
              onClick={() => setSelectedCharacter(legend.name)}
            >
              <legend.icon className="icon" />
            </div>
          );
        })}
      </Modal>
    </div>
  );
};

export default Legends;

const legends = [
  {
    id: '1',
    name: 'Ash',
    icon: AshIcon
  },
  {
    id: '2',
    name: 'Bangalore',
    icon: BangaloreIcon
  },
  {
    id: '3',
    name: 'Ballistic',
    icon: BallisticIcon
  },
  {
    id: '4',
    name: 'Bloodhound',
    icon: BloodhoundIcon
  },
  {
    id: '5',
    name: 'Caustic',
    icon: CausticIcon
  },
  {
    id: '6',
    name: 'Crypto',
    icon: CryptoIcon
  },
  {
    id: '7',
    name: 'Catalyst',
    icon: CatalystIcon
  },
  {
    id: '8',
    name: 'Conduit',
    icon: ConduitIcon
  },
  {
    id: '9',
    name: 'Fuse',
    icon: FuseIcon
  },
  {
    id: '10',
    name: 'Gibraltar',
    icon: GibraltarIcon
  },
  {
    id: '11',
    name: 'Horizon',
    icon: HorizonIcon
  },
  {
    id: '12',
    name: 'Lifeline',
    icon: LifelineIcon
  },
  {
    id: '13',
    name: 'Loba',
    icon: LobaIcon
  },
  {
    id: '14',
    name: 'Mad Maggie',
    icon: MadMaggieIcon
  },
  {
    id: '15',
    name: 'Mirage',
    icon: MirageIcon
  },
  {
    id: '16',
    name: 'Newcastle',
    icon: NewcastleIcon
  },
  {
    id: '17',
    name: 'Octane',
    icon: OctaneIcon
  },
  {
    id: '18',
    name: 'Pathfinder',
    icon: PathfinderIcon
  },
  {
    id: '19',
    name: 'Rampart',
    icon: RampartIcon
  },
  {
    id: '20',
    name: 'Revenant',
    icon: RevenantIcon
  },
  {
    id: '21',
    name: 'Seer',
    icon: SeerIcon
  },
  {
    id: '22',
    name: 'Valkyrie',
    icon: ValkyrieIcon
  },
  {
    id: '23',
    name: 'Vantage',
    icon: VantageIcon
  },
  {
    id: '24',
    name: 'Wattson',
    icon: WattsonIcon
  },
  {
    id: '25',
    name: 'Wraith',
    icon: WraithIcon
  }
];

const favoriteLegends = [
  {
    id: '1',
    name: 'Pathfinder',
    icon: PathfinderIcon
  },
  {
    id: '2',
    name: 'Wraith',
    icon: WraithIcon
  },
  {
    id: '3',
    name: 'Horizon',
    icon: HorizonIcon
  },
  {
    id: '4',
    name: 'Gibraltar',
    icon: GibraltarIcon
  }
];
