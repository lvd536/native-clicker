import { colors } from "@/consts/colors";
import { useClickerStore } from "@/stores/clickerStore";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Shop() {
    const { balance, shopItems, upgradeItem } = useClickerStore();
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headerText}>Shop</Text>
                <Text style={styles.counterText}>Balance: {balance}</Text>
            </View>
            <View style={styles.shopContainer}>
                {shopItems.map(({ Icon, ...item }) => (
                    <Pressable
                        key={item.id}
                        style={({ pressed }) => [
                            styles.shopItem,
                            pressed && {
                                transform: [{ scale: 0.97 }],
                                opacity: 0.9,
                            },
                        ]}
                        onPressOut={() => upgradeItem(item.id)}
                    >
                        <View style={styles.shopItemHeader}>
                            <Text style={styles.shopItemTitle}>
                                {item.name}
                            </Text>
                        </View>

                        <View style={styles.shopItemBody}>
                            <Icon width={32} height={32} color="white" />
                        </View>

                        <View style={styles.shopItemFooter}>
                            <Text style={styles.shopItemFooterText}>
                                Level {item.level}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </View>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 14,
        paddingTop: 14 * 1.5,
        paddingBottom: 14,
        alignItems: "stretch",
    },

    headerText: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "700",
        color: colors.textPrimary,
        marginBottom: 14,
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
        marginBottom: 14,
    },

    shopContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingHorizontal: 14 / 2,
    },

    shopItem: {
        width: "48%",
        aspectRatio: 1,
        borderRadius: 12,
        backgroundColor: colors.cardBackground,
        marginBottom: 14,
        overflow: "hidden",

        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.18,
        shadowRadius: 6,
        elevation: 4,
    },

    shopItemText: {
        flex: 1,
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center",
        textAlignVertical: "center",
        color: colors.textPrimary,
        paddingHorizontal: 8,
    },

    shopItemHeader: {
        width: "100%",
        height: 28,
        backgroundColor: colors.stone500,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        justifyContent: "center",
        paddingHorizontal: 8,
    },

    shopItemFooter: {
        width: "100%",
        height: 28,
        backgroundColor: colors.stone600,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        justifyContent: "center",
        paddingHorizontal: 8,
    },

    shopItemTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: colors.textPrimary,
        textAlign: "center",
    },

    shopItemBody: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.stone600,
        alignItems: "center",
        justifyContent: "center",
    },

    shopItemFooterText: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.textMuted,
        textAlign: "center",
    },
});
