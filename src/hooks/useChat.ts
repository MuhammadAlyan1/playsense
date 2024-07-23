import { useContext } from 'react';
import ChatContext from '../context/chatContext';

const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export default useChat;
