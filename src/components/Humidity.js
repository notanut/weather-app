import LinearProgess from "@mui/material/LinearProgress"

const Humidity = () => {
  return (
    <div className="humidity">
      <p className="humidity__heading">Humidity</p>
      <div className="humidity__amount">
        <h2>84</h2>
        <span>%</span>
      </div>
      <div className="humidity__bar">
        <div className="humidity__bar__num">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
        <LinearProgess 
        value={84} 
        variant="determinate"
        />
        <span className="humidity__bar__icon">%</span>
      </div>
    </div>
  )
};

export default Humidity;
