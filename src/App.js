import React, { useState, useEffect } from 'react';
import { Gallery } from './components/Gallery';
import { Modal } from './components/Modal';

export function App() {
  const [index, setIndex] = useState(0);
  const [description, setDescription] = useState([]);
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch('descriptions.txt')
      .then(response => response.text())
      .then(text => {
        const cleanedText = text.replace(/\r\n/g, '');
        setDescription(cleanedText.split(';').filter(description => description.trim() !== ''));
      });
  }, []);

  const handleNext = () => {
    if (index === description.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex(description.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <Gallery description={description[index]} />
      <Modal description={description[index]} />

      <ul>
        {description.map((data, index) => (
          <li index={index}>{data}</li>
        ))}
      </ul>

      <button>Wstecz</button>
      <button>Dalej</button>
    </>
  );
}
