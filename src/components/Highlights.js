import Wind from "./Wind";
import Humidity from "./Humidity";
import Visibility from "./Visibility"
import AirPressure from "./AirPressure"

const Highlights = () => {
  return (
    <>
    <h2>Today's Highlights</h2>
      <section className="highlights">
        <Wind />
        <Humidity />
        <Visibility />
        <AirPressure />
      </section>
    </>
  ) 
};

export default Highlights;
