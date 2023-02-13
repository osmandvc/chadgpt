"use client";

import { useMsgStore } from "@/zustand/store";
import { useState } from "react";

type Props = {};

const InputField = (props: Props) => {
  const addMessage = useMsgStore((state) => state.addMessage);
  const [msg, setMessage] = useState("");

  const handleMsgInput = async () => {
    if (!msg) return;
    const userMsg = { user: "avatar.jpg", text: msg };
    addMessage(userMsg);
    const res = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userMsg),
    });
    const data = await res.json();
    addMessage({ user: "openai-avatar.png", text: data.prompt });
    setMessage("");
  };

  return (
    <div className="flex">
      <input
        type="text"
        value={msg}
        onChange={(e) => setMessage(e.target.value)}
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
