import { WeaponType } from './WeaponType';

export type MatchAnalyticsType = {
  _id: string;
  profileId: string;
  kills: number;
  damage: number;
  downs: number;
  assists: number;
  eliminationReason: string;
  character: string;
  mode: string;
  map: string;
  mapCoordinates: {
    x: number;
    y: number;
  };
  position: number;
  createdAt: string;
  weapons: WeaponType[] | [];
};
