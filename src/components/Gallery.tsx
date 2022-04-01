import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Gif from "../models/Gif";
import { getGifsByTerm, getTrendingGifs } from "../services/GiphyService";
import Card from "./Card";
import "./Gallery.css";
import SearchBar from "./SearchBar";

const Gallery = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("term");

  useEffect(() => {
    // if there is no search term
    if (searchTerm) {
      getGifsByTerm(searchTerm).then((response) => {
        setGifs(response.data);
      });
    } else {
      getTrendingGifs().then((response) => {
        setGifs(response.data);
      });
    }
  }, [searchTerm]);

  return (
    <div className="Gallery">
      <SearchBar />
      <ul>
        {gifs.map((gif) => (
          <Card key={gif.id} singleGif={gif} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
