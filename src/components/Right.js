import Cards from "./Cards"
import Highlights from "./Highlights"
import Footer from "./Footer"

const Right = () => {
  return (
    <>
      <main>
        <div className="switches">
          <button className="switches__c active">°C</button>
          <button className="switches_f">°F</button>
        </div>
          <Cards />
          <Highlights />
      </main>
      {/* <Footer /> */}
    </>
  )
};

export default Right;
