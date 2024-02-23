import axios from "axios";

export const coins = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
  return response.data; // Return the data
};

const crypyoService = {
  coins, // Corrected export
};

export default crypyoService;
