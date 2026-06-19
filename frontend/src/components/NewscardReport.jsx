import "../style/NewscardReport.css";

function NewscardReport({ news }) {
  return (
    <div className="news-card">

      <img
        src={news.image}
        alt={news.title}
        className="news-card-image"
      />

      <div className="news-card-content">

        <span className="news-category">
          {news.category}
        </span>

        <h3>{news.title}</h3>

        <p>{news.description}</p>

        <button
          className="read-more-btn"
          onClick={() =>
            window.open(news.news_url, "_blank")
          }
        >
          Read More
        </button>

      </div>

    </div>
  );
}

export default NewscardReport;