export function getConversationId({
  senderId,
  receiverId
}: {
  senderId: string;
  receiverId: string;
}): string {
  const profiles =
    senderId > receiverId ? [senderId, receiverId] : [receiverId, senderId];
  const conversationId = profiles.join('-');

  return conversationId;
}
