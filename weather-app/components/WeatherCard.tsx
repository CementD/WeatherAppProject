import { View, Image, Text, StyleSheet } from "react-native";
import { WeatherData } from "../types/weather";

type WeatherCardProps = {
  data: WeatherData;
};

export function WeatherCard({ data }: WeatherCardProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  function formatTime(unixTime: number): string {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{data.name}</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <Text style={styles.temp}>{Math.round(data.main.temp)}°C</Text>
      <Text style={styles.description}>{data.weather[0].description}</Text>
      <Text style={styles.feels}>
        {Math.round(data.main.temp_min)}°C / {Math.round(data.main.temp_max)}°C
        Feels like: {Math.round(data.main.feels_like)}°C
      </Text>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Image
            source={require("../assets/images/humidity.png")}
            style={{ width: 20, height: 20, marginBottom: -4 }}
          />
          <Text style={styles.detailText}>Humidity: {data.main.humidity}%</Text>
        </View>

        <View style={styles.detailItem}>
          <Image
            source={require("../assets/images/wind.png")}
            style={{ width: 20, height: 20, marginBottom: -4 }}
          />
          <Text style={styles.detailText}>Wind: {data.wind.speed} m/s</Text>
        </View>

        <View style={styles.detailItem}>
          <Image
            source={require("../assets/images/sunrise.png")}
            style={{ width: 20, height: 20, marginBottom: -4 }}
          />
          <Text style={styles.detailText}>
            Sunrise: {formatTime(data.sys.sunrise)}
          </Text>
        </View>

        <View style={styles.detailItem}>
          <Image
            source={require("../assets/images/sunset.png")}
            style={{ width: 20, height: 20, marginBottom: -4 }}
          />
          <Text style={styles.detailText}>
            Sunset: {formatTime(data.sys.sunset)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },

  city: {
    fontSize: 26,
    color: "white",
    marginTop: 10,
  },

  feels: {
    fontSize: 16,
    opacity: 0.8,
    color: "white",
  },

  temp: {
    fontSize: 80,
    color: "white",
    fontWeight: "bold",
    marginVertical: 5,
  },

  icon: {
    width: 100,
    height: 100,
  },

  details: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  detailItem: {
    width: "48%",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
  },

  detailText: {
    color: "white",
    fontSize: 14,
  },

  description: {
    fontSize: 22,
    color: "white",
    textTransform: "capitalize",
    marginBottom: 5,
  },
});
