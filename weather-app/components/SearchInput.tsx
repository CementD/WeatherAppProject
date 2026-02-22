import { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";

type SearchInputProps = {
    onSearch: (city: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
    const [city, setCity] = useState<string>("")

    const handleSearch = () => {
        if (city.trim() !== "") {
            onSearch(city);
            setCity("");
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder="Enter city name"
                value={city}
                onChangeText={setCity}
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.text}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginBottom: 20
    },
    input: {
        borderRadius: 8,
        padding: 8,
        backgroundColor: "rgba(255,255,255,0.2)",
        height: 40,
        width: "70%",
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0.2)",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
    },
    text: {
        color: "white",
    }
})