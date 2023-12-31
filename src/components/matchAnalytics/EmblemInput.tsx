import React, { useRef } from 'react';
import { WeaponType } from '../../types/WeaponType';

type EmblemInputPropsType = {
  id: string;
  label: string;
  weapons: WeaponType[];
  setWeapons: (value: WeaponType[]) => void;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const EmblemInput: React.FC<EmblemInputPropsType> = ({
  id,
  label,
  weapons,
  setWeapons,
  Icon
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const weapon = weapons.find((weapon: WeaponType) => weapon.id === id);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedWeaponData = weapons.map((weapon) => {
      if (weapon.id === id) {
        return {
          ...weapon,
          [label.toLowerCase()]: parseInt(e.target.value)
        };
      } else {
        return weapon;
      }
    });

    setWeapons(updatedWeaponData);
  };

  console.log(weapon);

  return (
    <div className="emblem-input" onClick={() => inputRef?.current?.focus()}>
      <Icon className="emblem-input__emblem" />
      <label className="emblem-input__label">{label}</label>
      <input
        ref={inputRef}
        type="number"
        className="emblem-input__input"
        // value={weapon?.[label.toLowerCase()]}
        value={
          (weapon as Record<string, number> | undefined)?.[label.toLowerCase()]
        }
        onChange={(e) => handleValueChange(e)}
        min={0}
      />
    </div>
  );
};

export default EmblemInput;
