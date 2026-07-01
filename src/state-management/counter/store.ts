import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounter = create<CounterStore>()(
  devtools(
    (set) => ({
      counter: 0,
      max: 5,
      increment: () =>
        set((state) => ({ counter: Math.min(state.counter + 1, state.max) })),
      decrement: () =>
        set((state) => ({ counter: Math.max(0, state.counter - 1) })),
      reset: () => set(() => ({ counter: 0, max: 10 })),
    }),
    { name: "Counter" },
  ),
);

export default useCounter;
