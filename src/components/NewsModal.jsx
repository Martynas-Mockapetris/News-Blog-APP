import demoImg from '../assets/img/demo.jpg';
import './NewsModal.css';

const NewsModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img src={demoImg} alt="Demo" className="modal-image" />
        <h2 className="modal-title">Lorem ipsum dolor sit.</h2>
        <p className="modal-source">Source: Delfi</p>
        <p className="modal-date">Date: 2024-06-12</p>
        <p className="modal-content-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi magni consectetur adipisci, quisquam corrupti velit vel perferendis tempora ipsum ratione, commodi quos voluptatem rerum aspernatur natus. Repudiandae, facilis sapiente?
          Numquam id accusamus eaque consequuntur a.
        </p>
        <a href="#" className="read-more-link">Read more</a>
      </div>
    </div>
  );
};

export default NewsModal;
