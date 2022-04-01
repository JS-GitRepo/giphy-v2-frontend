import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import FavoritesContext from "../context/FavoritesContext";
import { signInWithGoogle } from "../firebaseConfig";
import Card from "./Card";

import "./Favorites.css";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="Favorites">
      {user ? (
        favorites.map((favorite) => (
          <Card singleGif={favorite} key={favorite.id} />
        ))
      ) : (
        <button onClick={signInWithGoogle}>Sign In</button>
      )}
    </div>
  );
};

export default Favorites;
