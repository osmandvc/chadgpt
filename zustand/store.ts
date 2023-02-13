import { create } from "zustand";

interface BearState {
  messages: Message[];
  addMessage: (msg: Message) => void;
}

export const useMsgStore = create<BearState>()((set) => ({
  messages: [],
  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),
}));
