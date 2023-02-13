import Image from "next/image";

type Props = {
  msg: Message;
};

const Message = ({ msg }: Props) => {
  return (
    <div className="flex gap-8 transition-opacity duration-700">
      <Image
        src={`/images/${msg.user}`}
        width={40}
        height={40}
        alt="avatar image"
        className="self-start rounded-full"
      />
      <p className="max-w-4xl font-light">{msg.text}</p>
    </div>
  );
};

export default Message;
