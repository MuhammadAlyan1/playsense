import React, { useState } from 'react';
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
import KillsIcon from '../../assets/icons/misc/kills.svg?react';
import DownsIcon from '../../assets/icons/misc/downs.svg?react';
import AssistsIcon from '../../assets/icons/misc/assists.svg?react';
import DamageIcon from '../../assets/icons/misc/damage.svg?react';
import EmblemInput from './EmblemInput';
import { MdDelete } from 'react-icons/md';
import AddIcon from '../../assets/icons/misc/add.svg?react';
import Modal from '../ui/Modal';
import { WeaponType } from '../../types/WeaponType';

const Weapons = () => {
  const [selectedWeapons, setSelectedWeapon] = useState<WeaponType[]>(
    weapons.filter((weapon) => weapon.isSelected === true)
  );
  const [isWeaponsModalOpen, setIsWeaponsModalOpen] = useState(false);

  const handleRemoveWeapon = (weaponId: string) => {
    const newWeapons = selectedWeapons.filter(
      (weapon) => weapon.id !== weaponId
    );
    setSelectedWeapon(newWeapons);
  };

  return (
    <div className="weapons">
      <h2 className="weapons__sub-heading">Weapons</h2>
      <div className="weapons__container">
        {selectedWeapons.map((weapon) => {
          return (
            <div key={weapon.id} className="weapons__weapon">
              <weapon.icon className="weapons__icon" />
              <div className="weapons__widgets">
                <EmblemInput
                  id={weapon.id}
                  label="Kills"
                  weapons={selectedWeapons}
                  setWeapons={setSelectedWeapon}
                  Icon={KillsIcon}
                />
                <EmblemInput
                  id={weapon.id}
                  label="Assists"
                  weapons={selectedWeapons}
                  setWeapons={setSelectedWeapon}
                  Icon={AssistsIcon}
                />
                <EmblemInput
                  id={weapon.id}
                  label="Downs"
                  weapons={selectedWeapons}
                  setWeapons={setSelectedWeapon}
                  Icon={DownsIcon}
                />
                <EmblemInput
                  id={weapon.id}
                  label="Damage"
                  weapons={selectedWeapons}
                  setWeapons={setSelectedWeapon}
                  Icon={DamageIcon}
                />
                <button
                  className="weapons__delete-button"
                  onClick={() => handleRemoveWeapon(weapon.id)}
                >
                  <MdDelete className="weapons__delete-button-icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="weapons__modal-button"
        onClick={() => setIsWeaponsModalOpen(true)}
      >
        <AddIcon className="weapons__modal-button-icon" />
        Add Weapon
      </button>
      <Modal
        title="Weapons"
        isOpen={isWeaponsModalOpen}
        onClose={setIsWeaponsModalOpen}
      >
        {weapons.map((weapon) => {
          return (
            <div
              title={weapon.name}
              className="weapons__icon-button icon-button"
              key={weapon.name}
              onClick={() => {
                setSelectedWeapon((prev) => {
                  const isWeaponAlreadySelected = Boolean(
                    prev.find((prevWeapon) => prevWeapon.id === weapon.id)
                  );

                  if (isWeaponAlreadySelected) {
                    return prev;
                  } else {
                    return [...prev, weapon];
                  }
                });
              }}
            >
              <weapon.icon className="weapons__icon" />
            </div>
          );
        })}
      </Modal>
    </div>
  );
};

export default Weapons;

const weapons = [
  {
    id: '125151251251252',
    name: 'Alternator',
    icon: AlternatorIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '2125151251',
    name: 'Arc Star',
    icon: ArcStarIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '11125125',
    name: 'Bocek Bow',
    icon: BocekBowIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '1125125',
    name: 'Car SMG',
    icon: CarIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '3125125',
    name: 'Charge Rifle',
    icon: ChargeRifleIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '11251258',
    name: 'Devotion',
    icon: DevotionIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '5125125',
    name: 'EVA-8',
    icon: Eva8Icon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '171512512',
    name: 'Flatline',
    icon: FlatlineIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '1147',
    name: 'Frag Grenade',
    icon: FragGrenadeIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '6124124',
    name: 'G7 Scout',
    icon: G7ScoutIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '7123123123',
    name: 'Havoc',
    icon: HavocIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '1141242',
    name: 'Hemlok',
    icon: HemlokIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '1612414124',
    name: 'Kraber',
    icon: KraberIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '1123145141',
    name: 'Longbow',
    icon: LongbowIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '11231235',
    name: 'L-STAR',
    icon: LstarIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '11414243',
    name: 'Mastiff',
    icon: MastiffIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '1124142',
    name: 'Mozambique',
    icon: MozambiqueIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '112412432',
    name: 'Nemesis',
    icon: NemesisIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '11241241240',
    name: 'P2020',
    icon: P2020Icon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '1121515151254',
    name: 'Peacekeeper',
    icon: PeacekeeperIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '812515215',
    name: 'Prowler',
    icon: ProwlerIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '11251251512541',
    name: 'R-99',
    icon: R99Icon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: true
  },
  {
    id: '12312312312315',
    name: 'R-301',
    icon: R301Icon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '1141241247',
    name: 'Rampage',
    icon: RampageIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '151237',
    name: '30-30 Repeater',
    icon: RepeaterIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '3217',
    name: 'Wingman',
    icon: WingmanIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: true
  },
  {
    id: '18123123123123',
    name: 'RE-45',
    icon: RE45Icon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '1241241247',
    name: 'Sentinel',
    icon: SentinelIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '312151253128',
    name: 'Spitfire',
    icon: SpitfireIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '11251251521239',
    name: 'Triple Take',
    icon: TripleTakeIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '12321231231319',
    name: 'Thermite',
    icon: ThermiteIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  },
  {
    id: '12312319',
    name: 'Volt',
    icon: VoltIcon,
    kills: 0,
    assists: 0,
    downs: 0,
    damage: 0,
    isSelected: false
  }
];
