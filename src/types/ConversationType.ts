import { ConversationUserType } from './ConversationUserType';
import { MessageType } from './MessageType';

export type ConversationType = {
  _id: string;
  conversationId: string;
  profiles: ConversationUserType[];
  messages: MessageType[];
  createdAt: string;
};
