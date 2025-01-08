import React, { useState, useEffect } from 'react';
import { Gallery } from './components/Gallery';

const appStyles = {
  container: {
    textAlign: 'center',
  },
};

export function App() {
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch('descriptions.txt')
      .then(response => response.text())
      .then(text => {
        const cleanedText = text.replace(/\r\n/g, '');
        setDescription(cleanedText.split(';').filter(description => description.trim() !== ''));
      });
  }, []);

  return (
    <div style={appStyles.container}>
      <Gallery />

      <div style={appStyles.buttonContainer}></div>
    </div>
  );
}
