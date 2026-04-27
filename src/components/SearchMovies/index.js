import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import MovieCard from '../MovieCard'
import './index.css'

const API_KEY = '77f01a8541f06c4e3348a602e29dbaa5'

const SearchMovies = () => {
  const {query} = useParams()
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
      )
      const data = await res.json()
      setMovies(data.results || [])
    }
    getMovies()
  }, [query, page])

  return (
    <div>
      <h2>Search Results</h2>

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
        </button>{' '}
      </div>
    </div>
  )
}

export default SearchMovies
