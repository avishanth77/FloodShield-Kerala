import { useEffect, useState } from "react";
import axios from "axios";
import NewscardReport from "./NewscardReport";
import "../style/NewsGrid.css";

function NewsGrid() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/news/")
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