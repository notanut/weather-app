const Wind = () => {
  return (
    <div className="wind">
      <p className="wind__heading">Wind status</p>
      <div className="wind__amount">
        <h2>7</h2>
        <span>mph</span>
      </div>
      <div className="wind__direction">
        <span className="material-icons">navigation</span>
        <p>WSW</p>
      </div>
    </div>
  )
};

export default Wind;
