import './Modal.css';
import './Bookmarks.css';
import demoImg from '../assets/img/demo.jpg';

const Bookmarks = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h2 className="bookmarks-heading">My Bookmarks</h2>
        <div className="bookmarks-list">
          <div className="bookmark-item">
            <img src={demoImg} alt="Demo" />
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, libero.</h3>
            <span className="delete-button">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
          <div className="bookmark-item">
            <img src={demoImg} alt="Demo" />
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, libero.</h3>
            <span className="delete-button">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
