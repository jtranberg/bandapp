import React from 'react';
import './musicPage.css'; // Import custom CSS for the grid layout

// You can add the full YouTube video URLs of your most recent 4 YouTube videos here
const videos = [
  {
    id: '1_CbClV_eTU',  // Extracted video ID
    url: 'https://www.youtube.com/watch?v=1_CbClV_eTU&list=RD1_CbClV_eTU&start_radio=1',
    title: 'Video Title 1',
  },
  {
    id: 'aCyGvGEtOwc',
    url: 'https://www.youtube.com/watch?v=aCyGvGEtOwc&list=RDaCyGvGEtOwc&start_radio=1',
    title: 'Video Title 2',
  },
  {
    id: 'Jwgf3wmiA04',
    url: 'https://www.youtube.com/watch?v=Jwgf3wmiA04&list=RDJwgf3wmiA04&start_radio=1',
    title: 'Video Title 3',
  },
  {
    id: '5A4xBp2rizQ',
    url: 'https://www.youtube.com/watch?v=5A4xBp2rizQ',
    title: 'Video Title 4',
  },
];


const MusicPage: React.FC = () => {
  return (
    <div className="music-page">
      <h1>Latest Music</h1>
      <p>Check out my latest YouTube videos below:</p>

      {/* Grid container */}
      <div className="grid-container">
        {videos.map((video) => (
          <div key={video.id} className="grid-item">
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              {/* Video thumbnail as an image */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="video-thumbnail"
              />
              <p>{video.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPage;
