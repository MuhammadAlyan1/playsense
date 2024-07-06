import { ProfileType } from './ProfileType';

export type ServiceType = {
  coverPicture: string;
  createdAt: string;
  description: string;
  game: string;
  price: number;
  rating: number;
  status: string;
  title: string;
  total_sales: number;
  reviews: number;
  updatedAt: string;
  paypalAccountId: string;
  _id: string;
  profileId: ProfileType;
};
