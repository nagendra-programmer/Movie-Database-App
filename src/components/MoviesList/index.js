import {useEffect, useState} from 'react'
import MovieCard from '../MovieCard'
import './index.css'

const API_KEY = '77f01a8541f06c4e3348a602e29dbaa5'

const MoviesList = ({type}) => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&page=${page}`,
      )
      const data = await res.json()
      setMovies(data.results || [])
    }
    getMovies()
  }, [type, page])

  return (
    <div>
      <h1>
        {type === 'popular' && 'Popular'}
        {type === 'top_rated' && 'Top Rated'}
        {type === 'upcoming' && 'Upcoming'}
      </h1>
      <div className="movies">
        {movies.map(each => (
          <MovieCard key={each.id} movie={each} />
        ))}
      </div>

      <div className="pagination">
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <button type="button" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default MoviesList
