import axios from "axios";
import Gif from "../models/Gif";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getFavorites = async (user: any): Promise<Gif[]> => {
  return (await axios.get(baseURL)).data;
};

export const addNewFavorite = async (favorite: Gif): Promise<Gif> => {
  return (await axios.post(baseURL, favorite)).data;
};

export const deleteFavorite = async (id: string): Promise<void> => {
  return (await axios.delete(`${baseURL}/${encodeURIComponent(id)}`)).data;
};
