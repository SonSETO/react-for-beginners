import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

Movie.propsTypes = {
  id: PropsTypes.number.isRequired,
  coverImg: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  summary: PropsTypes.string.isRequired,
  genres: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default Movie;
