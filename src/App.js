import React, { useState, useEffect } from 'react';             /* start terminal and start react */
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [timePassed, setTimePassed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const images = [  
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
  ];

  useEffect(() => {
    const calculateTimePassed = () => {
      const startDate = new Date('2025-01-01');   /* date of being together*/
      const currentDate = new Date(); 
      const timeDifference = currentDate - startDate; 

      const days = Math.floor(timeDifference / (1000 * 3600 * 24)); 
      const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600)); 
      const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60)); 
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); 

      setTimePassed({ days, hours, minutes, seconds });
    };

    calculateTimePassed(); 

    const intervalId = setInterval(calculateTimePassed, 1000); 

    return () => clearInterval(intervalId); 
  }, []); 

  const openPopup = () => {
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false); 
  };

  const closeSurprise = () => {
    setShowSurprise(false);
  };

  return (
    <div className="valentine-card">
      <h1>Happy valentine days!</h1>

      <button onClick={openPopup}>Valentine</button>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra tristique est, vitae ullamcorper nulla semper id. Suspendisse porta enim libero, eget aliquam purus iaculis nec. Curabitur hendrerit faucibus commodo. Fusce egestas blandit felis.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      {/* Display of days, hours, minutes and seconds*/}
      <p>Together since: {timePassed.days} days, {timePassed.hours} hours, {timePassed.minutes} minutes, {timePassed.seconds} seconds</p><br></br>

      {/* Gallery of memories */}
      <div className="gallery">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={8000}
          showThumbs={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Memories ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <button onClick={() => setShowSurprise(true)}>
      Click to discover the surprise
      </button>

      {/* Surprise */}
      {showSurprise && (
        <div className="surprise">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <img src="/images/card.jpg" alt="Popup Image" className="popup-image" />
          <button onClick={closeSurprise}>Close surprise</button>
        </div>
      )}
      <br></br> <br></br>

      <div className="footer">
      </div>
    </div>
  );
}

export default App;
