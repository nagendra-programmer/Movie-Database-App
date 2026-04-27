import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import './index.css'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const history = useHistory()

  const handleSearch = () => {
    if (search.trim() !== '') {
      history.push(`/search/${search}`)
    }
  }

  return (
    <nav className="nav">
      <h1 className="logo">movieDB</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>

      <div>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </nav>
  )
}

export default Navbar
