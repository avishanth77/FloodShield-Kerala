import NewsHero from "../components/NewsHero";
import NewsGrid from "../components/NewsGrid";
import WeatherWidget from "../components/WeatherWidget";
import EmergencyContacts from "../components/EmergencyContacts";
import "../style/Reports.css";
import Footer from "../components/Footer";

function Reports() {
  return (
    <div className="reports-page">

      <NewsHero />

      <div className="reports-layout">

        <div className="reports-main">
          <NewsGrid />
        </div>

        <div className="reports-sidebar">
          <WeatherWidget />
          <EmergencyContacts />
        </div>

      </div>

    </div>
    
  );
  <Footer />
}

export default Reports;