import React, { useState, useEffect } from 'react';
import { Gallery } from './components/Gallery';

const appStyles = {
  container: {
    textAlign: 'center',
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

export function App() {
  const [index, setIndex] = useState(0);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch('descriptions.txt')
      .then(response => response.text())
      .then(text => {
        const cleanedText = text.replace(/\r\n/g, '');
        setDescription(cleanedText.split(';').filter(description => description.trim() !== ''));
      });
  }, []);

  const handleNext = () => {
    setIndex((index + 1) % description.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + description.length) % description.length);
  };

  return (
    <div style={appStyles.container}>
      <Gallery description={description[index]} url={`./images/image${index}.png`} />

      <div style={appStyles.buttonContainer}>
        <button onClick={handlePrev} style={appStyles.button}>
          Wstecz
        </button>
        <button onClick={handleNext} style={appStyles.button}>
          Dalej
        </button>
      </div>
    </div>
  );
}
