import { useEffect, useRef, useState } from 'react';
import useChat from '../../../hooks/useChat';
import moment from 'moment';
import { getConversationId } from './utils/getConversationId';
import { socket } from '../../../socket';
import toast from 'react-hot-toast';
import IconTextField from '../../ui/IconTextField';
import TextIcon from '../../../assets/icons/misc/text.svg?react';
import SendIcon from '../../../assets/icons/misc/send.svg?react';
const ChatMessages = () => {
  const {
    sender,
    selectedConversation,
    setSelectedConversation,
    receiver,
    conversations
  } = useChat();
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast.error('Please enter message.');
      return;
    }
    if (!sender?._id || !receiver?._id) {
      console.log('Please select a user to begin chatting.');
      toast.error('Please select a user to begin chatting.');
      return;
    }

    socket.emit('sendMessage', {
      senderId: sender?._id,
      receiverId: receiver?._id,
      contents: message
    });
    setMessage('');
    messagesEndRef &&
      messagesEndRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
  };

  useEffect(() => {
    if (!receiver?._id || !sender?._id || !receiver._id) return;

    const conversationId = getConversationId({
      senderId: sender?._id,
      receiverId: receiver._id
    });

    const specificConversation = conversations.find(
      (conversation) => conversation.conversationId === conversationId
    );

    if (specificConversation) {
      setSelectedConversation(specificConversation);
    }
  }, [receiver?._id, sender?._id, JSON.stringify(conversations)]);

  if (!receiver?._id) {
    return;
  }

  return (
    <div className="chat-messages">
      <div className="chat-messages__header">
        <div className="chat-messages__selected-user">
          <div className="avatar-container post__avatar-container">
            <img
              src={receiver?.profilePicture}
              className="avatar-container__avatar post__avatar"
              alt={receiver?.username}
            />
          </div>
          <h1>{receiver?.username}</h1>
        </div>
      </div>
      <div className="chat-messages__messages">
        {selectedConversation?.messages.length === 0 ? (
          <h1 className="chat-messages__no-messages">No messages found.</h1>
        ) : (
          selectedConversation?.messages?.map((message) => {
            return (
              <div
                key={message._id}
                className={`chat-messages__message ${
                  message.senderId === sender?._id
                    ? 'chat-messages__message--sender'
                    : 'chat-messages__message--receiver'
                } `}
              >
                <p className="chat-messages__message-contents">
                  {message.contents}
                </p>
                <p className="chat-messages__message-time">
                  {moment(message.createdAt).fromNow()}
                </p>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="chat-messages__form">
        <IconTextField
          isRequired={true}
          placeholder="Enter Your Message."
          value={message}
          setValue={setMessage}
          type="text"
          Icon={TextIcon}
        />

        <button
          className="chat-messages__send-button"
          onClick={() => handleSendMessage()}
        >
          <SendIcon className="chat-messages__send-icon" />
        </button>
      </div>
    </div>
  );
};

export default ChatMessages;
