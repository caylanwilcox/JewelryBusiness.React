const Popup = ({ onClose }) => {
    return (
      <div className="popup-container">
        <div className="popup-message">
          Item added to cart!
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

  export default Popup;