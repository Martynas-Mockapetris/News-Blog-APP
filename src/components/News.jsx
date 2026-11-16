import axios from 'axios';
import './News.css';
import { useState, useEffect } from 'react';
import Calendar from './Calendar';
import Weather from './Weather';
import userImg from '../assets/img/user.jpg';
import noImg from '../assets/img/no-img.png';

const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const api_key = '33b4de5ac8d377bc174b246739a92920';
      const url = `https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=${api_key}`;

      const response = await axios.get(url);
      const fetchedNews = response.data.articles;

      fetchedNews.forEach((article) => {
        if (!article.image) {
          article.image = noImg;
        }
      });

      setHeadline(fetchedNews[0]);
      setNews(fetchedNews.slice(1, 7));
      // console.log(fetchedNews[0]);
      // console.log(news);
    };

    fetchNews();
  }, []);

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blog</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">
            <img src={userImg} alt="User" />
            <p>Ieva's Corner</p>
          </div>
          <nav className="categories">
            <h1 className="nav-header">Categories</h1>
            <div className="nav-links">
              <a href="#" className="nav-link">
                General
              </a>
              <a href="#" className="nav-link">
                World
              </a>
              <a href="#" className="nav-link">
                Nation
              </a>
              <a href="#" className="nav-link">
                Business
              </a>
              <a href="#" className="nav-link">
                Technology
              </a>
              <a href="#" className="nav-link">
                Entertainment
              </a>
              <a href="#" className="nav-link">
                Sports
              </a>
              <a href="#" className="nav-link">
                Science
              </a>
              <a href="#" className="nav-link">
                Health
              </a>
              <a href="#" className="nav-link">
                Bookmarks <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          {headline && (
            <div className="headline">
              <img src={headline.image || noImg} alt={headline.title} />
              <h2 className="headline-title">{headline.title}</h2>
            </div>
          )}
          <div className="news-grid">
            {news.map((article, index) => (
              <div className="news-grid-item" key={index}>
                <img src={article.image || noImg} alt={article.title} />
                <h3>
                  {article.title} <i className="fa-regular fa-bookmark bookmark"></i>
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="my-blogs">My Blogs</div>
        <div className="w-c-container">
          <Weather />
          <Calendar />
        </div>
      </div>
      <footer className="news-footer">Footer</footer>
    </div>
  );
};

export default News;
