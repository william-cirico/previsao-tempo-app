export interface WeatherPrevision {
    dayly: {
        time: number[],
        temperature_2m_max: number[],
        temperature_2m_min: number[],
        precipitation_sum: number[],
        precipitation_probability_max: number[],
    }
}