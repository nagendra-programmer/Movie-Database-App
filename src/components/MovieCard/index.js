import './index.css'

const MovieCard = ({movie}) => (
  <div className="card">
    <img
      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt={movie.title}
    />
    <h3>{movie.title}</h3>
    <p>Rating: {movie.vote_average}</p>
    <a href={`/movie/${movie.id}`}>
      <button type="button">View Details</button>
    </a>
  </div>
)
export default MovieCard
