import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  console.log(movie);
  return (
    <div>
      <h1>Movie Detail</h1>

      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <p>Year: {movie.year}</p>
          <p>synopsis: {movie.synopsis}</p>
          <p>rating: {movie.rating}</p>
          <p>Genres: {movie.genres.join(", ")}</p>
          <p>runtime: {movie.runtime}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
