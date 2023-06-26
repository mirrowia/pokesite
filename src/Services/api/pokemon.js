import axios from "../../AxoisConfig/AxiosConfig";

export const getPokemons = async (offset, limit) => {
  const response = await axios.get(`pokemon?offset=${offset}&limit=${limit}`);
  const data = await response.data.results;

  return data;
};
