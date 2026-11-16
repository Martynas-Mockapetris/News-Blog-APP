import './News.css';
import Calendar from './Calendar';
import Weather from './Weather';
import userImg from '../assets/img/user.jpg';

const News = () => {
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
                Travel
              </a>
              <a href="#" className="nav-link">
                Lifestyle
              </a>
              <a href="#" className="nav-link">
                Food
              </a>
              <a href="#" className="nav-link">
                Bookmarks <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          <div className="headline">Headline</div>
          <div className="news-grid">News Grid</div>
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
