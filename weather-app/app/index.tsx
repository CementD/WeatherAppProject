import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchInput } from "../components/SearchInput";
import { WeatherCard } from "../components/WeatherCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorMessage } from "../components/ErrorMessage";
import { WeatherData, LoadingState, WeatherError } from "../types/weather";
import { useState } from "react";

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export default function Index() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>("idle");
  const [error, setError] = useState<WeatherError | null>(null);

  const fetchWeather = async (city: string) => {
    setLoadingState("loading");
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=en`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data: WeatherData = await response.json();
      setWeatherData(data);
      setLoadingState("success");
    } catch (error) {
        if (error instanceof Error) {
          setError({ message: error.message });
        } else {
          setError({ message: "Unknown error occurred" });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput onSearch={fetchWeather} />
      
      {loadingState === "loading" && <LoadingSpinner />}
      {loadingState === "success" && weatherData && <WeatherCard data={weatherData} />}
      {error && <ErrorMessage message={error.message} onRetry={() => setLoadingState("idle")} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#87ceeb",
  },
});