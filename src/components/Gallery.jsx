import React, { useState } from 'react';
import { Modal } from './Modal';

// Komponent galerii wyświetlający miniatury zdjęć.

const galleryStyles = {
  container: {
    margin: '20px auto',
    textAlign: 'center',
  },
  thumbnail: {
    height: '100px',
    cursor: 'pointer',
    border: '2px solid #ddd',
    borderRadius: '5px',
    transition: 'transform 0.3s',
  },
  thumbnailHover: {
    transform: 'scale(1.1)',
  },
};

export const Gallery = ({ url, description }) => {
  const [modalVis, setModalVis] = useState(false);

  const handleChangeDescVisibility = () => {
    setModalVis(!modalVis);
  };

  return (
    <div style={galleryStyles.container}>
      <img onClick={handleChangeDescVisibility} src={url} alt={description} style={galleryStyles.thumbnail} />
      {modalVis ? (
        <div>
          <Modal description={description} url={url} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
