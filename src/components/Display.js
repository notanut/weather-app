import { useContext } from "react";
import { Context } from "../context/Context";
import shower from "../images/Shower.png"

const Display = () => {
  const context = useContext(Context)
  return (
    <aside className="display">
      <div className="display__nav">
        <button 
        className="display__nav__search"
        onClick={() => context.setSearchOpen(true)}
        >
          Search for places
        </button>
        <button className="display__nav__currentLoc">
          <span className="material-icons">gps_fixed</span>
        </button>
      </div>

      <div className="display__main">
        <div className="display__main__wrapper">
          <div className="display__main__wrapper__bg"></div>
          <div className="display__main__wrapper__image">
            <img src={shower} alt="" />
          </div>
        </div>
        <div className="display__main__temp">
          <h1>15</h1>
          <span>°C</span>
        </div>
        <p className="display__main__status"></p>
      </div>

      <div className="display__footer">
        <p className="display__footer__name">
          shower
        </p>
        <p className="display__footer__date">
          <span>Today</span>
          <span>•</span>
          <span>Wed, 2 Jan</span>
        </p>
        <div className="display__footer__loc">
          <span className="material-icons">location_on</span>
          <p>Helsinki</p>
        </div>
      </div>
    </aside>
  )
};

export default Display;
