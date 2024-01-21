import RepeaterIcon from '../../assets/icons/weapons/30-30-repeater.svg?react';
import AlternatorIcon from '../../assets/icons/weapons/alternator.svg?react';
import BocekBowIcon from '../../assets/icons/weapons/bocek-bow.svg?react';
import CarIcon from '../../assets/icons/weapons/car-smg.svg?react';
import ChargeRifleIcon from '../../assets/icons/weapons/charge-rifle.svg?react';
import DevotionIcon from '../../assets/icons/weapons/charge-rifle.svg?react';
import Eva8Icon from '../../assets/icons/weapons/eva-8.svg?react';
import FlatlineIcon from '../../assets/icons/weapons/flatline.svg?react';
import G7ScoutIcon from '../../assets/icons/weapons/G-7-scout.svg?react';
import HavocIcon from '../../assets/icons/weapons/havoc.svg?react';
import HemlokIcon from '../../assets/icons/weapons/hemlok.svg?react';
import KraberIcon from '../../assets/icons/weapons/kraber.svg?react';
import LongbowIcon from '../../assets/icons/weapons/longbow.svg?react';
import LstarIcon from '../../assets/icons/weapons/lstar.svg?react';
import MastiffIcon from '../../assets/icons/weapons/mastiff.svg?react';
import MozambiqueIcon from '../../assets/icons/weapons/mozambique.svg?react';
import NemesisIcon from '../../assets/icons/weapons/nemesis.svg?react';
import P2020Icon from '../../assets/icons/weapons/p2020.svg?react';
import PeacekeeperIcon from '../../assets/icons/weapons/peacekeeper.svg?react';
import ProwlerIcon from '../../assets/icons/weapons/prowler.svg?react';
import R99Icon from '../../assets/icons/weapons/R-99.svg?react';
import R301Icon from '../../assets/icons/weapons/R-301.svg?react';
import RampageIcon from '../../assets/icons/weapons/rampage.svg?react';
import RE45Icon from '../../assets/icons/weapons/RE-45.svg?react';
import SentinelIcon from '../../assets/icons/weapons/sentinel.svg?react';
import SpitfireIcon from '../../assets/icons/weapons/spitfire.svg?react';
import TripleTakeIcon from '../../assets/icons/weapons/triple-take.svg?react';
import VoltIcon from '../../assets/icons/weapons/volt.svg?react';
import WingmanIcon from '../../assets/icons/weapons/wingman.svg?react';
import ArcStarIcon from '../../assets/icons/weapons/arc-star.svg?react';
import FragGrenadeIcon from '../../assets/icons/weapons/frag-grenade.svg?react';
import ThermiteIcon from '../../assets/icons/weapons/thermite.svg?react';

const Weapons = () => {
  return (
    <div className="weapons">
      <h2 className="weapons__sub-heading">Weapons</h2>
      <div className="weapons__container">
        {weapons?.map((weapon) => {
          return (
            <div key={weapon.name} className="weapons__weapon">
              <weapon.icon className="weapons__icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weapons;

const weapons = [
  {
    name: 'Alternator',
    icon: AlternatorIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Arc Star',
    icon: ArcStarIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Bocek Bow',
    icon: BocekBowIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Car SMG',
    icon: CarIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Charge Rifle',
    icon: ChargeRifleIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Devotion',
    icon: DevotionIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'EVA-8',
    icon: Eva8Icon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Flatline',
    icon: FlatlineIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Frag Grenade',
    icon: FragGrenadeIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'G7 Scout',
    icon: G7ScoutIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Havoc',
    icon: HavocIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Hemlok',
    icon: HemlokIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Kraber',
    icon: KraberIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Longbow',
    icon: LongbowIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'L-STAR',
    icon: LstarIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Mastiff',
    icon: MastiffIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Mozambique',
    icon: MozambiqueIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Nemesis',
    icon: NemesisIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'P2020',
    icon: P2020Icon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Peacekeeper',
    icon: PeacekeeperIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Prowler',
    icon: ProwlerIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'R-99',
    icon: R99Icon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: true
  },
  {
    name: 'R-301',
    icon: R301Icon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Rampage',
    icon: RampageIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: '30-30 Repeater',
    icon: RepeaterIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Wingman',
    icon: WingmanIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: true
  },
  {
    name: 'RE-45',
    icon: RE45Icon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Sentinel',
    icon: SentinelIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Spitfire',
    icon: SpitfireIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Triple Take',
    icon: TripleTakeIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Thermite',
    icon: ThermiteIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    name: 'Volt',
    icon: VoltIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  }
];
