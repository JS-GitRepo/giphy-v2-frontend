import { createContext } from "react";
import Gif from "../models/Gif";

interface FavoritesContextModel {
  favorites: Gif[];
  addFavorite: (gif: Gif) => void;
  removeFavorite: (id: string) => void;
  isFav: (id: string) => boolean;
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFav: () => false,
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
