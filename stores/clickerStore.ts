import { Clock, LucideIcon } from "lucide-react-native";
import { create } from "zustand";

interface IShopItem {
    id: number;
    name: string;
    level: number;
    price: number;
    Icon: LucideIcon;
    clickMultiplier?: number;
    autoClickMultiplier?: number;
}

interface IClickerStore {
    balance: number;
    clickMultiplier: number;
    autoClickMultiplier: number;
    shopItems: IShopItem[];
    increaseBalance: (value?: number) => void;
    decreaseBalance: (value: number) => void;
    upgradeItem: (id: number) => void;
}

const shopItems: IShopItem[] = [
    {
        id: 1,
        name: "+1 click",
        level: 1,
        price: 999,
        Icon: Clock,
        clickMultiplier: 1,
    },
    {
        id: 2,
        name: "+1 auto click",
        level: 1,
        price: 999,
        Icon: Clock,
        autoClickMultiplier: 1,
    },
    {
        id: 3,
        name: "+2 click",
        level: 1,
        price: 1999,
        Icon: Clock,
        clickMultiplier: 2,
    },
    {
        id: 4,
        name: "+2 auto click",
        level: 1,
        price: 1999,
        Icon: Clock,
        autoClickMultiplier: 2,
    },
];

export const useClickerStore = create<IClickerStore>((set, get) => ({
    balance: 992280,
    clickMultiplier: 1,
    autoClickMultiplier: 0,
    shopItems: shopItems,
    increaseBalance: (value?: number) =>
        set((state) => ({
            balance: value
                ? state.balance + value
                : state.balance + get().clickMultiplier,
        })),
    decreaseBalance: (value: number) =>
        set((state) => ({
            balance: state.balance - value,
        })),
    upgradeItem: (id) => {
        const targetItem = get().shopItems.find((i) => i.id === id);
        if (!targetItem) return;
        if (get().balance < targetItem.price) return;
        const updatedItem: IShopItem = {
            ...targetItem,
            price: Math.round(targetItem.price * 1.5),
            level: targetItem.level + 1,
        };

        const updatedItems: IShopItem[] = [
            ...get().shopItems.filter((i) => i.id !== id),
            updatedItem,
        ];
        set((state) => ({
            balance: state.balance - targetItem.price,
            shopItems: updatedItems,
            autoClickMultiplier: updatedItem.autoClickMultiplier
                ? updatedItem.autoClickMultiplier + state.autoClickMultiplier
                : state.autoClickMultiplier,
            clickMultiplier: updatedItem.clickMultiplier
                ? state.clickMultiplier + updatedItem.clickMultiplier
                : state.clickMultiplier,
        }));
    },
}));
