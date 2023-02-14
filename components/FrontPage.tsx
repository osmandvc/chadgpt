import Image from "next/image";
import Link from "next/link";

type Props = {};

const FrontPage = (props: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen gap-8 text-zinc-100">
      <div className="flex flex-col items-center w-full gap-10 p-8 bg-black/90">
        <h1 className="text-6xl font-black leading-[4rem]">
          Welcome to ChadGPT.
        </h1>
        <span className="text-zinc-400 md:text-xl">
          It is like ChatGPT, just faster, with more customization and no
          downtimes.
        </span>
        <button className="self-start p-4 font-semibold transition border md:self-center rounded-xl bg-zinc-900 border-zinc-100 hover:bg-zinc-700">
          <Link href="/chat"> Start Chatting</Link>
        </button>
      </div>
      <Image
        src="/images/openai-avatar.png"
        className="object-cover -z-10"
        alt="logo"
        fill
      />
    </div>
  );
};

export default FrontPage;
