import './News.css';
import Calendar from './Calendar';
import Weather from './Weather';
import userImg from '../assets/img/user.jpg';
import techImg from '../assets/img/tech.jpg';
import sportsImg from '../assets/img/sports.jpg';
import scienceImg from '../assets/img/science.jpg';
import worldImg from '../assets/img/world.jpg';
import healthImg from '../assets/img/health.jpg';
import nationImg from '../assets/img/nation.jpg';

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
                Nation
              </a>
              <a href="#" className="nav-link">
                Bookmarks <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          <div className="headline">
            <img src={techImg} alt="Headline img" />
            <h2 className="headline-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, porro.</h2>
            <i className="fa-regular fa-bookmark bookmark"></i>
          </div>
          <div className="news-grid">
            <div className="news-grid-item">
              <img src={techImg} alt="News img" />
              <h3>
                Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
             <div className="news-grid-item">
              <img src={sportsImg} alt="News img" />
              <h3>
                Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={scienceImg} alt="News img" />
              <h3>
                Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={worldImg} alt="News img" />
              <h3>
                Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={healthImg} alt="News img" />
              <h3>
                Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={nationImg} alt="News img" />
              <h3>
                Lorem ipsum dolor sit amet. <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
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
