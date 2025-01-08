import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { modalVisibility } from '../helpers/modalVisibility';

// Komponent galerii wyświetlający miniatury zdjęć.

const galleryStyles = {
  container: {
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

  row: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 4px',
  },

  column: {
    flex: '25%',
    maxWidth: '25%',
    padding: '0 4px',
  },
};

export const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [modalVis, setModalVis] = useState(false);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch('descriptions.txt')
      .then(response => response.text())
      .then(text => {
        const cleanedText = text.replace(/\r\n/g, '');
        setDescription(cleanedText.split(';').filter(description => description.trim() !== ''));
      });
  }, []);

  const handleChangeDescVisibility = () => {
    setModalVis(!modalVis);
  };

  const handleImageClick = index => {
    handleChangeDescVisibility();
    setIndex(index);
  };

  return (
    <div style={galleryStyles.container}>
      {modalVis ? (
        <div>
          <Modal description={description} actual_index={index} handler={handleChangeDescVisibility} />
        </div>
      ) : (
        ''
      )}
      <div className={galleryStyles.row}>
        <div className={galleryStyles.column}>
          {description.map((data, x) => (
            <img
              id={x}
              onClick={() => handleImageClick(x)}
              style={{ width: '300px' }}
              src={`./images/image${x}.png`}
              alt={`obraz${x}`}></img>
          ))}
        </div>
      </div>
    </div>
  );
};
