"use client";
import { useMsgStore } from "@/zustand/store";
import Message from "./Message";

type Props = {};

const MessageList = (props: Props) => {
  const messages = useMsgStore((state) => state.messages);
  return (
    <>
      {messages.map((message, i) => {
        return <Message key={i} msg={message} />;
      })}
    </>
  );
};

export default MessageList;
