import React from 'react';
import './merchPage.css'; // Import custom CSS for the grid layout

const merchItems = [
  { id: 1, title: 'Merch Item 1', thumbnail: '/images/hat.jpg' },
  { id: 2, title: 'Merch Item 2', thumbnail: '/images/gloves.jpg' },
  { id: 3, title: 'Merch Item 3', thumbnail: '/images/boots.jpg' },
  { id: 4, title: 'Merch Item 4', thumbnail: '/images/sunglasses.jpg' },
  { id: 5, title: 'Merch Item 5', thumbnail: '/images/wallet.jpg' },
  { id: 6, title: 'Merch Item 6', thumbnail: '/images/pipe.jpg' },
 
];

const MerchPage: React.FC = () => {
  return (
    <div className="merch-page">
      <h1>Merch</h1>
      <p>Check out our latest merch items!</p>

      {/* Grid container */}
      <div className="grid-container">
        {merchItems.map((item) => (
          <div key={item.id} className="grid-item">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="merch-thumbnail"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchPage;
