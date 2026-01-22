import { colors } from "@/consts/colors";
import { useClickerStore } from "@/stores/clickerStore";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Shop() {
    const { balance, shopItems } = useClickerStore();
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headerText}>Shop</Text>
                <Text style={styles.counterText}>Balance: {balance}</Text>
            </View>
            <View style={styles.shopContainer}>
                {shopItems.map((item) => (
                    <Pressable style={styles.shopItem} key={item.name}>
                        <Text style={styles.shopItemText}>{item.name}</Text>
                    </Pressable>
                ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: "30%",
        backgroundColor: colors.background,
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
    },
    counterText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
    },
    shopContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignSelf: "center",
        marginHorizontal: "auto",
        gap: 15,
        paddingHorizontal: 20,
    },
    shopItem: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: colors.indigo600,
        justifyContent: "center",
    },
    shopItemText: {
        textAlign: "center",
        fontWeight: "medium",
        textAlignVertical: "center",
        color: "white",
    },
});
