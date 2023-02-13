"use client";

import { useMsgStore } from "@/zustand/store";
import { useState } from "react";
import { toast } from "react-hot-toast";

type Props = {};

const InputField = (props: Props) => {
  const addMessage = useMsgStore((state) => state.addMessage);
  const [msg, setMessage] = useState("");

  const handleMsgInput = async () => {
    if (!msg) return;

    const notifaction = toast.loading("ChadGPT is thinking...");
    const userMsg = { user: "avatar.jpg", text: msg };
    addMessage(userMsg);
    setMessage("");
    await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userMsg),
    })
      .then((data) => data.json())
      .then((res) => {
        toast.success("ChadGPT has responded.", {
          id: notifaction,
        });
        addMessage({ user: "openai-avatar.png", text: res.prompt });
      });
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && msg) {
      handleMsgInput();
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        value={msg}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Start chatting with ChadGPT..."
        className="relative w-full p-4 bg-transparent border rounded-lg border-zinc-600 focus:outline-none text-zinc-50 caret-white"
      />
      <button
        onClick={() => handleMsgInput()}
        className="p-4 font-light bg-black text-zinc-50 "
      >
        Enter
      </button>
    </div>
  );
};

export default InputField;
