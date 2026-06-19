import { useEffect, useState } from "react";
import axios from "axios";
import "../style/NewsCard.css";

function NewsCard() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/news/")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="news-section">
      <h2 className="news-heading">
        Latest News & Updates
      </h2>

      <div className="news-grid">
        {news.map((item) => (
          <div className="news-card" key={item.id}>
            <img
                src={item.image}
                alt={item.title}
                className="news-image"
            />

            <div className="news-content">
              <h3>{item.title}</h3>

              <p>{item.description}</p>

               <button
                  className="read-more-btn"
                  onClick={() => window.open(item.news_url, "_blank")}
                  >
                   Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsCard;