export type WeatherData = {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    };
    sys: {
        sunrise: number;
        sunset: number;
    };
}

export type LoadingState = "idle" | "loading" | "success" | "error";

export type WeatherError = {
    message: string;
    code?: number;
}