import axios from "axios";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const API_KEY = process.env.NEXT_PUBLIC_GEODB_API_KEY;

export const fetchCities = async (query, limit = 10) => {
  try {
    const response = await axios.get(`${GEO_API_URL}/cities`, {
      params: { namePrefix: query, limit },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
};
