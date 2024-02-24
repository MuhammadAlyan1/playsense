import { CommentType } from './CommentType';
import { ProfileType } from './ProfileType';

export type PostWithCommentsType = {
  _id: string;
  contents: string;
  likedBy: string[];
  dislikedBy: string[];
  profileId: ProfileType;
  createdAt: string;
  updatedAt: string;
  __v: number;
  comments: CommentType[];
};
