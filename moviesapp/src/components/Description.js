import { movies } from "../Movies";
import { useParams,Link } from "react-router-dom";

export function Description() {
  const myMovie = useParams();
  let toPrint = movies.find((movie) => movie.title === myMovie.title);
  return (
    <>
      <br/>
      <br/>
      <h1>{toPrint.title}</h1>
      <p>{toPrint.description}</p>
      <Link to={toPrint.traiLerLink} style={{fontSize:"20px"}} target="_blank">Bande Annonce</Link>
      
    </>
  );
}
