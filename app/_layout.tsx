import { colors } from "@/consts/colors";
import { Tabs } from "expo-router";
import { MousePointerClick, Store } from "lucide-react-native";

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: colors.background,
                tabBarInactiveBackgroundColor: colors.background,
            }}
        >
            <Tabs.Screen
                name="App"
                options={{
                    title: "Clicker",
                    tabBarIcon: ({ color }) => (
                        <MousePointerClick color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Shop"
                options={{
                    title: "Shop",
                    tabBarIcon: ({ color }) => <Store color={color} />,
                }}
            />
        </Tabs>
    );
}
