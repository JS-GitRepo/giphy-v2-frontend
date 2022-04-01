import axios from "axios";
import GiphyResponse from "../models/GiphyResponse";
import SingleGif from "../models/SingleGif";

const key: string = process.env.REACT_APP_GIPHY_KEY || "";

export const getTrendingGifs = (): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getGifsByTerm = (searchString: string): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: { api_key: key, q: searchString },
    })
    .then((response) => {
      return response.data;
    });
};

export const getGifById = (id: string): Promise<SingleGif> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/${encodeURIComponent(id)}`, {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      return response.data;
    });
};
