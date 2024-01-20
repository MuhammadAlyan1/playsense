import { WeaponType } from './WeaponType';

export type WeaponsPropsType = {
  selectedWeapons: WeaponType[] | [];
  setSelectedWeapons: React.Dispatch<React.SetStateAction<WeaponType[]>>;
};
