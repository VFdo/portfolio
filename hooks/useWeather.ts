import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=6.9271&longitude=79.8612&current=weather_code,is_day'

export function useWeather() {
  const { data, error, isLoading } = useSWR(WEATHER_URL, fetcher, {
    refreshInterval: 1000 * 60 * 15 * 60 * 3
  })

  return {
    weatherCode: data?.current?.weather_code,
    isDay: data?.current?.is_day === 1,
    isLoading,
    error,
  }
}