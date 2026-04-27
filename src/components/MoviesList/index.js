import {useEffect, useState} from 'react'
import MovieCard from '../MovieCard'
import './index.css'

const API_KEY = '77f01a8541f06c4e3348a602e29dbaa5'

const MoviesList = ({type}) => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  // Reset page when switching tabs
  useEffect(() => {
    setPage(1)
  }, [type])

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`,
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
          onClick={() => setPage(prev => prev - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        {/* THIS IS THE KEY FIX */}
        <p>{page}</p>

        <button type="button" onClick={() => setPage(prev => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default MoviesList
