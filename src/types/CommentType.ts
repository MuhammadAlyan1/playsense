import { ProfileType } from './ProfileType';

export type CommentType = {
  _id: string;
  content: string;
  profileId: ProfileType;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
