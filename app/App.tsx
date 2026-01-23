import { colors } from "@/consts/colors";
import { useClickerStore } from "@/stores/clickerStore";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const { balance, increaseBalance, autoClickMultiplier, clickMultiplier } =
        useClickerStore();

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoClickMultiplier > 0) increaseBalance(autoClickMultiplier);
        }, 1000);

        return () => clearInterval(interval);
    }, [autoClickMultiplier]);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headerText}>Clicker</Text>
                <View style={styles.headerContainer}>
                    <Text style={styles.statsText}>
                        Auto: {autoClickMultiplier}
                    </Text>
                    <View style={styles.headerSeparatingCircle} />
                    <Text style={styles.counterText}>Balance: {balance}</Text>
                    <View style={styles.headerSeparatingCircle} />
                    <Text style={styles.statsText}>
                        Click: {clickMultiplier}
                    </Text>
                </View>
            </View>
            <Pressable
                style={({ pressed }) => [
                    styles.clickButton,
                    pressed && {
                        transform: [{ scale: 0.97 }],
                        opacity: 0.9,
                    },
                ]}
                onPress={() => increaseBalance()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 14,
        paddingTop: 14 * 1.5,
        paddingBottom: 14,
        alignItems: "stretch",
        gap: "30%",
    },

    headerText: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "700",
        color: colors.textPrimary,
        marginBottom: 14,
    },
    headerContainer: {
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    headerSeparatingCircle: {
        width: 6,
        height: 6,
        backgroundColor: "white",
        borderRadius: "100%",
        marginHorizontal: 4,
    },
    counterText: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "700",
        color: colors.indigo400,
        alignSelf: "center",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
        backgroundColor: colors.cardBackground,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 4,
        elevation: 3,
    },
    statsText: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "700",
        color: colors.indigo400,
        alignSelf: "center",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        backgroundColor: colors.cardBackground,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 4,
        elevation: 3,
    },
    clickButton: {
        width: 200,
        height: 200,
        backgroundColor: colors.indigo400,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: "100%",
        borderColor: colors.indigo500,
        borderWidth: 10,
    },
});
