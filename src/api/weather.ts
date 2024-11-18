import { API_CONFIG } from "./config";
import { Coordinates, ForecastData, WeatherData, GeocodingResponse } from "./types";

class WeatherAPI {
  private createURL(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    });
    return `${endpoint}?${searchParams.toString()}`;
  }

  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async getCurrentWeather({ lat, long }: Coordinates): Promise<WeatherData> {
    const url = this.createURL(`${API_CONFIG.BASE_URL}/weather`, {
      lat: lat.toString(),
      long: long.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });

    return this.fetchData<WeatherData>(url);
  }

  async getForecast({ lat, long }: Coordinates): Promise<ForecastData> {
    const url = this.createURL(`${API_CONFIG.BASE_URL}/forecast`, {
      lat: lat.toString(),
      long: long.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });

    return this.fetchData<ForecastData>(url);
  }

  async getReverseGeoCode({ lat, long }: Coordinates): Promise<GeocodingResponse[]> {
    const url = this.createURL(`${API_CONFIG.GEO}/reverse`, {
      lat: lat.toString(),
      long: long.toString(),
      limit: 1,
    });

    return this.fetchData<GeocodingResponse[]>(url);
  }
}

export const weatherAPI = new WeatherAPI();