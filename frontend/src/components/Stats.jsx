import "../style/Stats.css";
const style = {
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,.05)"
};
function Stats() {
  return (
    <section className="stats1">

      <div className=".stat-card1"
      style={style}>
        <h2   style={{
        color: "#004ac6",
        marginBottom: "10px",
        fontSize: "2rem"
      }}>142</h2>
        <p>Active SOS Requests</p>
      </div>

      <div className=".stat-card1"
      style={style}>
        <h2   style={{
        color: "#004ac6",
        marginBottom: "10px",
        fontSize: "2rem"
      }}>86</h2>
        <p>Available Shelters</p>
      </div>

      <div className=".stat-card1"
      style={style}>
        <h2   style={{
        color: "#004ac6",
        marginBottom: "10px",
        fontSize: "2rem"
      }}>4520</h2>
        <p>Volunteers Registered</p>
      </div>

      <div className=".stat-card1"
        style={style}>
        <h2   style={{
        color: "#004ac6",
        marginBottom: "10px",
        fontSize: "2rem"
      }} >328</h2>
        <p>Disaster Reports</p>
      </div>

    </section>
  );
}

export default Stats;