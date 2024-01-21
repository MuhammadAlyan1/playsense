import { ProfileType } from './ProfileType';

export type PostType = {
  _id: string;
  contents: string;
  likedBy: string[];
  dislikedBy: string[];
  profileId: ProfileType;
  createdAt: string;
  updatedAt: string;
  __v: number;
  comments: string[];
};
