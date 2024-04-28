import { ProfileType } from './ProfileType';
import { CommentType } from './CommentType';

export type FeedbackWithCommentsType = {
  _id: string;
  contents: string;
  likedBy: string[];
  dislikedBy: string[];
  profileId: ProfileType;
  createdAt: string;
  game: string;
  type: string;
  status: string;
  comments: CommentType[];
};
