import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import CastList from '../CastList'
import './index.css'

const API_KEY = '77f01a8541f06c4e3348a602e29dbaa5'

const MovieDetails = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])

  useEffect(() => {
    const getDetails = async () => {
      const res1 = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
      )
      const data1 = await res1.json()
      setMovie(data1)

      const res2 = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
      )
      const data2 = await res2.json()
      setCast(data2.cast || [])
    }
    getDetails()
  }, [id])

  return (
    <div className="details">
      <h1>{movie.title}</h1>

      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />

      <p>{movie.overview}</p>

      <p>Rating: {movie.vote_average}</p>

      <p>Duration: {movie.runtime} mins</p>

      <p>
        Genres: {movie.genres && movie.genres.map(each => each.name).join(', ')}
      </p>

      <p>Release Date: {movie.release_date}</p>

      <h2>Cast</h2>
      <CastList cast={cast} />
    </div>
  )
}

export default MovieDetails
