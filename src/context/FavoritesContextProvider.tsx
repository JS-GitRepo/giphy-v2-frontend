import { ReactNode, useContext, useEffect, useState } from "react";
import Gif from "../models/Gif";
import {
  getFavorites,
  addNewFavorite,
  deleteFavorite,
} from "../services/FavoriteService";
import AuthContext from "./AuthContext";
import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Gif[]>([]);
  const { user } = useContext(AuthContext);

  const getAndSetFavorites = (user: any) => {
    getFavorites(user.uid).then((response) => {
      setFavorites(response);
    });
  };

  const addFavorite = (gif: Gif): void => {
    addNewFavorite(gif).then(() => {
      getAndSetFavorites(user);
    });
  };

  const removeFavorite = (id: string): void => {
    deleteFavorite(id).then(() => {
      getAndSetFavorites(user);
    });
  };

  const isFav = (id: string): boolean => favorites.some((gif) => gif.id === id);

  useEffect(() => {
    if (user) {
      getAndSetFavorites(user);
    }
  }, [user]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
