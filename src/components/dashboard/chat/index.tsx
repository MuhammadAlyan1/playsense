import { useEffect } from 'react';
import { socket } from '../../../socket';
import useAuth from '../../../hooks/useAuth';
import ChatMessages from './ChatMessages';
import useChat from '../../../hooks/useChat';
import ConversationsList from './ConversationsList';

const Chat = () => {
  const auth = useAuth();
  const chat = useChat();
  const setConversations = chat?.setConversations;
  const setSender = chat?.setSender;
  const currentUser = auth?.auth && auth?.auth;

  useEffect(() => {
    if (!currentUser?._id) return;

    socket.connect();
    function onConnect() {
      console.log('USER CONNECTED');
    }

    socket.on('getConversations', (data) => {
      setConversations && setConversations(data?.conversations || []);
    });

    function onDisconnect() {
      console.log('USER DISCONNECTED');
    }

    socket.on('connect', () => {
      console.log('CONNECTED TO CHAT.');
      setSender({
        _id: currentUser?._id,
        profilePicture: currentUser?.profilePicture,
        username: currentUser?.username
      });
      socket.emit('getConversations', {
        connectedUserId: currentUser?._id
      });
    });
    socket.on('disconnect', onDisconnect);

    socket.on('sendMessage', (data) => {
      setConversations((prev) => {
        const updatedConversations = prev.map((conversation) => {
          if (conversation._id === data._id) {
            return data;
          } else {
            return conversation;
          }
        });

        const hasConversation = updatedConversations.find(
          (conversation) => conversation._id === data._id
        );
        if (hasConversation) {
          return updatedConversations;
        } else {
          return [...updatedConversations, data];
        }
      });
    });

    return () => {
      socket.disconnect();
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, [currentUser?._id]);
  return (
    <div className="chat">
      <ConversationsList />
      <ChatMessages />
    </div>
  );
};

export default Chat;
