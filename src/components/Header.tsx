import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signOut, signInWithGoogle } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      <Link to="/">
        <h1>GifMaster</h1>
      </Link>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signInWithGoogle()}>Sign In</button>
      )}
      <Link to="/gifs/favorites">Favorites</Link>
    </header>
  );
};

export default Header;
