import { ProfileType } from './ProfileType';

export type FeedbackType = {
  _id: string;
  contents: string;
  likedBy: string[];
  dislikedBy: string[];
  profileId: ProfileType;
  createdAt: string;
  comments: string[];
  game: string;
  type: string;
  status: string;
  sNo?: number;
};
