import { colors } from "@/consts/colors";
import { useClickerStore } from "@/stores/clickerStore";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const { balance, increaseBalance } = useClickerStore();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headerText}>Clicker</Text>
                <Text style={styles.counterText}>Balance: {balance}</Text>
            </View>
            <Pressable style={styles.clickButton} onPress={increaseBalance} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: "40%",
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
