import { useEffect, useState } from 'react';
import useChat from '../../../hooks/useChat';
import { ConversationType } from '../../../types/ConversationType';
import IconTextField from '../../ui/IconTextField';
import SearchIcon from '../../../assets/icons/misc/search.svg?react';

const ConversationsList = () => {
  const { conversations, sender, setReceiver, setSelectedConversation } =
    useChat();
  const [filteredConversations, setFilteredConversations] =
    useState<ConversationType[]>(conversations);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!search?.trim()) {
      setFilteredConversations(conversations);
      return;
    }
    const filtered = conversations.filter((conversation) => {
      const otherUser = conversation?.profiles?.find(
        (profile) => profile?._id !== sender?._id
      );

      if (otherUser?.username?.toLowerCase()?.includes(search?.toLowerCase())) {
        return conversation;
      }
    });

    setFilteredConversations(filtered);
  }, [JSON.stringify(conversations), search]);

  return (
    <div className="conversations-list">
      <h1 className="conversations-list__title">Conversations</h1>
      <IconTextField
        Icon={SearchIcon}
        placeholder="Search by Username"
        value={search}
        setValue={setSearch}
        isRequired={false}
      />
      <div className="conversations-list__conversations">
        {filteredConversations.length === 0 && (
          <h1 className="conversations-list__no-conversations">
            No Conversations founds.
          </h1>
        )}
        {filteredConversations.map((conversation) => {
          const otherUser = conversation?.profiles?.find(
            (profile) => profile?._id !== sender?._id
          );
          return (
            <div
              className="conversations-list__conversation"
              onClick={() => {
                otherUser &&
                  setReceiver({
                    _id: otherUser._id,
                    profilePicture: otherUser.profilePicture,
                    username: otherUser.username
                  });
                setSelectedConversation(conversation);
              }}
            >
              <div className="avatar-container post__avatar-container">
                <img
                  src={otherUser?.profilePicture}
                  className="avatar-container__avatar post__avatar"
                  alt={otherUser?.username}
                />
              </div>
              <h1>{otherUser?.username}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationsList;
