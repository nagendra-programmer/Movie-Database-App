import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'
import SearchMovies from './components/SearchMovies'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" render={() => <MoviesList type="popular" />} />
      <Route path="/top-rated" render={() => <MoviesList type="top_rated" />} />
      <Route path="/upcoming" render={() => <MoviesList type="upcoming" />} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/search/:query" component={SearchMovies} />
    </Switch>
  </BrowserRouter>
)
export default App
