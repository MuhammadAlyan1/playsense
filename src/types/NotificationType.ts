import { ProfileType } from './ProfileType';

export type NotificationType = {
  isRead: boolean;
  _id: string;
  sNo: number;
  senderId: ProfileType;
  receiverId: ProfileType;
  href: string;
  type: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};
