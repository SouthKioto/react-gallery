import React, { useState } from 'react';
import { modalVisibility } from '../helpers/modalVisibility';
//Komponent do wyświetlania szczegółowego widoku zdjęcia i jego opisu.
const modalStyles = {
  container: {
    //margin: '15px 30%',
    textAlign: 'center',
    minWidth: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '5px',
    padding: '20px',
    position: 'absolute',
    zIndex: 100,
  },

  thumbnail: {
    height: '400px',
    border: '2px solid #ddd',
    borderRadius: '5px',
    transition: 'transform 0.3s',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '0 10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export const Modal = ({ description, actual_index, handler }) => {
  const [index, setIndex] = useState(actual_index);

  const handleNext = () => {
    setIndex((index + 1) % description.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + description.length) % description.length);
  };

  return (
    <div style={modalStyles.container}>
      <img style={modalStyles.thumbnail} src={`./images/image${index}.png`} alt={description} />
      <h1 style={{ color: 'white' }}>{description[index]}</h1>

      <button onClick={handlePrev} style={modalStyles.button}>
        Wstecz
      </button>
      <button onClick={() => handler()} style={modalStyles.button}>
        Zamknij
      </button>
      <button onClick={handleNext} style={modalStyles.button}>
        Dalej
      </button>
    </div>
  );
};
