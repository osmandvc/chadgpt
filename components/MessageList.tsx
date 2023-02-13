"use client";
import { useMsgStore } from "@/zustand/store";
import Message from "./Message";
import StartChatting from "./StartChatting";

type Props = {};

const MessageList = (props: Props) => {
  const messages = useMsgStore((state) => state.messages);
  return (
    <>
      {messages.length !== 0 ? (
        messages.map((message, i) => {
          return <Message key={i} msg={message} />;
        })
      ) : (
        <StartChatting />
      )}
    </>
  );
};

export default MessageList;
