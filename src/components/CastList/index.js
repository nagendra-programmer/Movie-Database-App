import './index.css'

const CastList = ({cast}) => (
  <div className="cast">
    {cast.slice(0, 10).map(each => (
      <div key={each.id} className="cast-card">
        <img
          src={
            each.profile_path
              ? `https://image.tmdb.org/t/p/w200${each.profile_path}`
              : 'https://via.placeholder.com/200'
          }
          alt=""
        />
        <p>{each.name}</p>
        <p>{each.character}</p>
      </div>
    ))}
  </div>
)

export default CastList
