import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import { ConversationType } from '../types/ConversationType';
import { ConversationUserType } from '../types/ConversationUserType';

type ChatContextType = {
  conversations: ConversationType[];
  setConversations: Dispatch<SetStateAction<ConversationType[]>>;
  selectedConversation: ConversationType | null;
  setSelectedConversation: Dispatch<SetStateAction<ConversationType | null>>;
  receiver: ConversationUserType | null;
  setReceiver: Dispatch<SetStateAction<ConversationUserType | null>>;
  sender: ConversationUserType | null;
  setSender: Dispatch<SetStateAction<ConversationUserType | null>>;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

type ChatProviderProps = {
  children: ReactNode;
};

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [conversations, setConversations] = useState<ConversationType[]>([]);
  const [selectedConversation, setSelectedConversation] =
    useState<ConversationType | null>(null);
  const [receiver, setReceiver] = useState<ConversationUserType | null>(null);
  const [sender, setSender] = useState<ConversationUserType | null>(null);
  return (
    <ChatContext.Provider
      value={{
        conversations,
        setConversations,
        selectedConversation,
        setSelectedConversation,
        receiver,
        setReceiver,
        sender,
        setSender
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
