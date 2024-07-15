import { ProfileType } from './ProfileType';

export type ReportType = {
  _id: string;
  status: string;
  reporterId: ProfileType;
  reportedProfileId: ProfileType;
  itemId: string;
  itemType: string;
  reason: string;
  createdAt: string;
  updatedAt: string;
  sNo?: number;
};
