import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";
import { createContext, ReactNode, useContext, useState } from "react";
import { City } from "../types/City"
import { WeatherPrevision } from "../types/WeatherPrevision";

type CityContextType = {
    city: City | undefined;
    selectCity: (city: City) => void;
}

const CityContext = createContext<CityContextType>(null!);

export function CityContextProvider({ children }: { children: ReactNode }) {
    const [city, selectCity] = useState<City>();

    const { data: weatherPrevision } = useQuery({
        queryFn: () => getWeatherPrevisionByLocation(city?.latitude  ?? 0, city?.longitude ?? 0),
        queryKey: ["weather-prevision", { latitude: city?.latitude, longitude: city?.longitude }],
        enabled: !!city
    })

    function getWeatherPrevisionByLocation(latitude: number, longitude: number): Promise<WeatherPrevision> {
        const startDate = dayjs().format("YYYY-MM-DD");
        const endDate = dayjs().add(7, "days").format("YYYY-MM-DD");

        return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&precipitation_sum,precipitation_probability_max,windspeed_10m_max&start_date=${startDate}&end_date=${endDate}&timezone=America%2FSao_Paulo`) 
            .then(res => res.data);        
    }

    return <CityContext.Provider value={{ city, selectCity }}>
        {children}
    </CityContext.Provider>
}

export const useCity = () => useContext(CityContext);