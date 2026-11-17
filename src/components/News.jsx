import axios from 'axios';
import './News.css';
import { useState, useEffect } from 'react';
import Calendar from './Calendar';
import Weather from './Weather';
import userImg from '../assets/img/user.jpg';
import noImg from '../assets/img/no-img.png';
import NewsModal from './NewsModal';

const categories = ['general', 'world', 'nation', 'business', 'technology', 'entertainment', 'sports', 'science', 'health'];

const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      const api_key = '33b4de5ac8d377bc174b246739a92920';
      let url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${api_key}`;

      if (searchQuery) {
        url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&apikey=${api_key}`;
      }

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
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setSearchInput('');
  };

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blog</h1>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
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
              {categories.map((category) => (
                <a href="#" className="nav-link" key={category} onClick={(e) => handleCategoryClick(e, category)}>
                  {category}
                </a>
              ))}
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
        <NewsModal />
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
