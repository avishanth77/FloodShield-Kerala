import { useEffect, useState } from "react";
import axios from "axios";
import "../style/NewsHero.css";

function NewsHero() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8000/api/news/breaking-news/"
      )
      .then((response) => {
        setNews(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!news) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="news-hero">

      <div className="hero-image">
        <img
          src={news.image}
          alt={news.title}
        />

       
      </div>

      <div className="hero-content">

        <span className="hero-category">
          🚨 {news.category}
        </span>

        <h1>{news.title}</h1>

        <p>{news.description}</p>

        <div className="hero-meta">
          <span>📍 {news.location}</span>
        </div>

        <button
          className="read-more-btn"
          onClick={() =>
            window.open(
              news.news_url,
              "_blank"
            )
          }
        >
          Read Full Story
        </button>

      </div>

    </section>
  );
}

export default NewsHero;