import { useContext } from "react";
import { Context } from "../context/Context"

const Search = () => {
  const context = useContext(Context)
  const locations = context.locations
  return (
    <section className="search">
      <div className="wrapper">        
        <button className="search__close">
          <span 
          className="material-icons"
          onClick={() => context.setSearchOpen(false)}
          >
            close
          </span>
        </button>
      </div>
      <form className="search__bar" onSubmit={context.handleSubmit}>
            <div className="search__bar__input">
              <span className="material-icons">search</span> 
              <input 
              value={context.value}
              onChange={e => context.onChange(e.target.value)}
              type="text" 
              placeholder="search location"
              />
            </div>
            <button>Search</button>
      </form>
      {!context.error && locations.map((location) => (
        <div 
        onClick={() => context.getWeather(location.title)}
        className="search__lists" 
        key={location.woeid}>
          <div className="search__lists__list">
            <p 
            className="search__lists__list__place">
              {location.title}
            </p> 
            <span className="material-icons">chevron_right</span>
          </div>
        </div>
      ))}
      {context.error ? 
      <p className="search__error">
        Sorry, no location(s) found. Try another keywords!
      </p> : ''
      }
    </section>
  )
};

export default Search;
