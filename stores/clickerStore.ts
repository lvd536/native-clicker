import { Clock, LucideIcon } from "lucide-react-native";
import { create } from "zustand";

interface IShopItem {
    name: string;
    level: number;
    price: number;
    Icon: LucideIcon;
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
        name: "+1 click",
        level: 1,
        price: 999,
        Icon: Clock,
    },
    {
        name: "+1 auto click",
        level: 1,
        price: 999,
        Icon: Clock,
    },
    {
        name: "+2 click",
        level: 1,
        price: 1999,
        Icon: Clock,
    },
    {
        name: "+2 auto click",
        level: 1,
        price: 1999,
        Icon: Clock,
    },
];

export const useClickerStore = create<IClickerStore>((set) => ({
    balance: 0,
    multiplier: 0,
    shopItems: shopItems,
    increaseBalance: () => set((state) => ({ balance: state.balance + 1 })),
    decreaseBalance: () => set((state) => ({ balance: state.balance - 1 })),
}));
