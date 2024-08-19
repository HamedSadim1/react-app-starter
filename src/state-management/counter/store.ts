import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounter = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  reset: () => set(() => ({ max: 10 })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Counter", useCounter);
}

export default useCounter;
