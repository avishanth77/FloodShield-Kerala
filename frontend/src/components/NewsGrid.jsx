import { useEffect, useState } from "react";
import axios from "axios";
import NewscardReport from "./NewscardReport";
import "../style/NewsGrid.css";

function NewsGrid() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://teflon.pythonanywhere.com/api/news/")
      .then((response) => {
        setNews(response.data);
      });
  }, []);

  return (
    <section className="news-grid-section">

      <h2>Recent Updates</h2>

      <div className="news-grid">

        {news.map((item) => (
          <NewscardReport
            key={item.id}
            news={item}
          />
        ))}

      </div>

    </section>
  );
}

export default NewsGrid;