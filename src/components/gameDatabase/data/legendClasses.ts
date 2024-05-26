import SkirmisherIcon from '../../../assets/characters/skirmisher-class.svg?react';
import AssaultIcon from '../../../assets/characters/assault-class.svg?react';
import ControllerIcon from '../../../assets/characters/controller-class.svg?react';
import SupportIcon from '../../../assets/characters/support-class.svg?react';
import ReconIcon from '../../../assets/characters/recon-class.svg?react';

type LegendClasses = {
  [key: string]: {
    description: string[];
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  };
};

export const legendClasses: LegendClasses = {
  skirmisher: {
    description: [
      'Reveal Care Package contents to see the highest value item inside.'
    ],
    icon: SkirmisherIcon
  },
  assault: {
    description: [
      'Access the hidden loot in red Weapon Supply Bins for High Value Weapon Attachments.',
      'Can carry an extra stack of ammo in each inventory slot.'
    ],
    icon: AssaultIcon
  },
  recon: {
    description: [
      'Scan Survey Beacons to reveal all enemy positions for a short time'
    ],
    icon: ReconIcon
  },
  controller: {
    description: [
      "Activate Ring Consoles to reveal the next circle's location."
    ],
    icon: ControllerIcon
  },
  support: {
    description: [
      'Craft unrecovered or expired ally banner cards at Replicators.',
      'Access the hidden loot in blue Extended Supply Bins for Healing and Survival Items.'
    ],
    icon: SupportIcon
  }
};
