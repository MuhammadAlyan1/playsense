import { ProfileType } from './ProfileType';

export type MessageType = {
  _id: string;
  senderId: string | ProfileType;
  receiverId: string | ProfileType;
  contents: string;
  isRead: boolean;
  createdAt: string;
};
