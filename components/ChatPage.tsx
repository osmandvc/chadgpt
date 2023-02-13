import InputField from "./InputField";
import MessageList from "./MessageList";

type Props = {};

const ChatPage = (props: Props) => {
  return (
    <div className="flex flex-col h-screen text-zinc-200 bg-zinc-900/90">
      <div className="flex flex-col flex-1 gap-8 overflow-x-hidden overflow-y-auto p-14">
        <MessageList />
      </div>
      <InputField />
    </div>
  );
};

export default ChatPage;
