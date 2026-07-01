import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounter = create<CounterStore>()(
  devtools(
    (set) => ({
      counter: 0,
      max: 5,
      increment: () => set((state) => ({ counter: state.counter + 1 })),
      reset: () => set(() => ({ max: 10 })),
    }),
    { name: "Counter" },
  ),
);

export default useCounter;
