import React from 'react';
import r301 from '../../../../assets/weapons/images/r301.png';
import BarrelIcon from '../../../../assets/weapons/misc icons/barrel-stabilizer.svg?react';
import ExtendedMagIcon from '../../../../assets/weapons/misc icons/extended-mag.svg?react';
import StockIcon from '../../../../assets/weapons/misc icons/standard-stock.svg?react';
import LaserIcon from '../../../../assets/weapons/misc icons/laser-sight.svg?react';
import OpticsIcon from '../../../../assets/weapons/misc icons/optics.svg?react';
import SingleFireIcon from '../../../../assets/weapons/misc icons/single-fire.svg?react';
import BurstFireIcon from '../../../../assets/weapons/misc icons/burst-fire.svg?react';
import FullAutoIcon from '../../../../assets/weapons/misc icons/full-auto.svg?react';
import DamagePerSecondIcon from '../../../../assets/weapons/misc icons/dps.svg?react';
import HeadIcon from '../../../../assets/weapons/misc icons/head.svg?react';
import BodyIcon from '../../../../assets/weapons/misc icons/body.svg?react';
import LegsIcon from '../../../../assets/weapons/misc icons/legs.svg?react';
import { WeaponsInfo } from '../../data/weapons';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
const Weapon = () => {
  const { weaponName } = useParams();
  const weapon = WeaponsInfo.find((weapon) => weapon.name === weaponName);

  if (!weapon) {
    toast.error('Please enter a valid weapon');

    return <h1>Please Enter a valid weapon</h1>;
  }

  type Attachments =
    | 'BarrelStabilizer'
    | 'StandardStock'
    | 'LaserSight'
    | 'ExtendedMag'
    | 'Optics';

  const renderAttachments = (attachment: Attachments, isAvailable: boolean) => {
    if (attachment === 'BarrelStabilizer' && isAvailable === true) {
      return (
        <Badge
          label="Barrel Stabilizer"
          Icon={BarrelIcon}
          className="barrel-stabilizer"
        />
      );
    } else if (attachment === 'StandardStock' && isAvailable === true) {
      return (
        <Badge
          label="Standard Stock"
          Icon={StockIcon}
          className="standard-stock"
        />
      );
    } else if (attachment === 'LaserSight' && isAvailable === true) {
      return (
        <Badge label="Laser Sight" Icon={LaserIcon} className="laser-sight" />
      );
    } else if (attachment === 'ExtendedMag' && isAvailable === true) {
      return (
        <Badge
          label="Extended Mag"
          Icon={ExtendedMagIcon}
          className="extended-mag"
        />
      );
    } else if (attachment === 'Optics' && isAvailable === true) {
      return <Badge label="Optics" Icon={OpticsIcon} className="optics" />;
    }
  };

  const renderFireModes = (fireMode: 'single' | 'auto' | 'burst') => {
    if (fireMode === 'auto') {
      return (
        <Badge label="Full Auto" Icon={FullAutoIcon} className={fireMode} />
      );
    } else if (fireMode === 'single') {
      return (
        <Badge label="Single Fire" Icon={SingleFireIcon} className={fireMode} />
      );
    } else if (fireMode === 'burst') {
      return (
        <Badge label="Burst Fire" Icon={BurstFireIcon} className={fireMode} />
      );
    }
  };

  const renderDamage = (type: string, amount: number) => {
    if (type === 'body') {
      return (
        <Badge Icon={BodyIcon} className={type} label={`${amount} BODY`} />
      );
    } else if (type === 'head') {
      return (
        <Badge Icon={HeadIcon} className={type} label={`${amount} HEAD`} />
      );
    } else if (type === 'torso') {
      return (
        <Badge Icon={LegsIcon} className={type} label={`${amount} LEGS`} />
      );
    } else if (type === 'damagePerSecond') {
      return (
        <Badge
          Icon={DamagePerSecondIcon}
          className={type}
          label={`${amount} DPS `}
        />
      );
    }
  };

  return (
    <div className="detailed-weapon">
      <div className="detailed-weapon__contents">
        <div className="detailed-weapon__name-image-container">
          <div className="detailed-weapon__name-class-container">
            <Badge label={weapon?.type} className="detailed-weapon__type" />
            <h1 className="detailed-weapon__name">{weapon?.name}</h1>
          </div>
          <div className="detailed-weapon__image-container">
            <img
              src={weapon?.image}
              alt={weapon?.name}
              className="detailed-weapon__image"
            />
          </div>
        </div>
        <div className="detailed-weapon__label-badge-container">
          <p className="detailed-weapon__label">Ammo</p>
          <div className="detailed-weapon__badges">
            {weapon?.ammo?.map((ammo) => {
              return (
                <Badge className={ammo.split(' ')?.join('')} label={ammo} />
              );
            })}
          </div>
        </div>
        <div className="detailed-weapon__label-badge-container">
          <p className="detailed-weapon__label">Fire Mode</p>
          <div className="detailed-weapon__badges">
            {weapon?.fireModes?.map((fireMode) => {
              return renderFireModes(fireMode as 'single' | 'burst' | 'auto');
            })}
          </div>
        </div>
        <div className="detailed-weapon__label-badge-container">
          <p className="detailed-weapon__label">Attachments</p>
          <div className="detailed-weapon__badges">
            {Object.keys(weapon?.attachments)?.map((attachment) => {
              return renderAttachments(
                `${attachment?.replace('has', '')}` as Attachments,
                weapon.attachments[
                  attachment as keyof typeof weapon.attachments
                ]
              );
            })}
          </div>
        </div>
        <div className="detailed-weapon__label-badge-container">
          <p className="detailed-weapon__label">Damage</p>
          <div className="detailed-weapon__badges">
            {Object.keys(weapon?.damage)?.map((type) => {
              return renderDamage(
                type,
                weapon?.damage[type as keyof typeof weapon.damage]
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weapon;

type BadgeProps = {
  label: string;
  className?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Badge: React.FC<BadgeProps> = ({ label, Icon, className }) => {
  return (
    <div className={`badge ${className}`}>
      {Icon && <Icon className="badge__icon" />}
      <p className="badge__label">{label}</p>
    </div>
  );
};
