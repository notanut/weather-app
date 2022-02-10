import sleet from "../images/Sleet.png"

const Cards = () => {
  return (
      <article className="cards">
        <div className="card">
          <p className="card__date">Tomorrow</p>
          <img src={sleet} alt="" />
          <div className="card__temp">
            <p className="card__temp__celcius">20°C</p>
            <p className="card__temp__fahrenheit">11°C</p>
          </div>
        </div>
        <div className="card">
          <p className="card__date">Tomorrow</p>
          <img src={sleet} alt="" />
          <div className="card__temp">
            <p className="card__temp__celcius">20°C</p>
            <p className="card__temp__fahrenheit">11°C</p>
          </div>
        </div>
        <div className="card">
          <p className="card__date">Tomorrow</p>
          <img src={sleet} alt="" />
          <div className="card__temp">
            <p className="card__temp__celcius">20°C</p>
            <p className="card__temp__fahrenheit">11°C</p>
          </div>
        </div>
        <div className="card">
          <p className="card__date">Tomorrow</p>
          <img src={sleet} alt="" />
          <div className="card__temp">
            <p className="card__temp__celcius">20°C</p>
            <p className="card__temp__fahrenheit">11°C</p>
          </div>
        </div>
        <div className="card">
          <p className="card__date">Tomorrow</p>
          <img src={sleet} alt="" />
          <div className="card__temp">
            <p className="card__temp__celcius">20°C</p>
            <p className="card__temp__fahrenheit">11°C</p>
          </div>
        </div>

      </article>
  )
};

export default Cards;
