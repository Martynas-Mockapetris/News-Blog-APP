import './Modal.css';
import './Bookmarks.css';
import demoImg from '../assets/img/demo.jpg';

const Bookmarks = ({show, bookmarks, onClose, onSelectArticle, onDeleteBookmark}) => {

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay bookmarks">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h2 className="bookmarks-heading">My Bookmarks</h2>
        <div className="bookmarks-list">
          {bookmarks.map((article, index) => (
            <div className="bookmark-item" key={index} onClick={() => onSelectArticle(article)}>
              <img src={article.image || demoImg} alt={article.title} />
              <h3>{article.title}</h3>
              <span className="delete-button" onClick={(e) => { e.stopPropagation(); onDeleteBookmark(article); }}>
                <i className="fa-regular fa-circle-xmark"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
