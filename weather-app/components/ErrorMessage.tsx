import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


type ErrorMessageProps = {
    message: string;
    onRetry: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
    return(
        <View style={styles.container}>
            <Text style={styles.error}>{message}</Text>
            <TouchableOpacity style={styles.button} onPress={onRetry}>
                <Text>Retry</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: "center",
    },
    error: {
        color: "red",
        marginBottom: 10,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0.2)",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
  }
})