import { create } from "zustand";

interface IShopItem {
    name: string;
    level: number;
    price: number;
}

interface IClickerStore {
    balance: number;
    multiplier: number;
    shopItems: IShopItem[];
    increaseBalance: () => void;
    decreaseBalance: () => void;
}

const shopItems: IShopItem[] = [
    {
        name: "test",
        level: 1,
        price: 1,
    },
];

export const useClickerStore = create<IClickerStore>((set) => ({
    balance: 0,
    multiplier: 0,
    shopItems: shopItems,
    increaseBalance: () => set((state) => ({ balance: state.balance + 1 })),
    decreaseBalance: () => set((state) => ({ balance: state.balance - 1 })),
}));
