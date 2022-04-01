import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gif from "../models/Gif";
import { getGifById } from "../services/GiphyService";
import Card from "./Card";
import "./Details.css";

const Details = () => {
  const [gif, setGif] = useState<Gif>();
  const id: string | undefined = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    getGifById(id!)
      .then((response) => {
        setGif(response.data);
        console.log(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, [id, navigate]);

  return (
    <div className="Details">
      {gif ? <Card singleGif={gif!} /> : <p>Loading</p>}
    </div>
  );
};

export default Details;
