import React from 'react';

//Komponent do wyświetlania szczegółowego widoku zdjęcia i jego opisu.
const modalStyles = {
  container: {
    margin: '20px auto',
    textAlign: 'center',
  },
  thumbnail: {
    height: '400px',
    border: '2px solid #ddd',
    borderRadius: '5px',
    transition: 'transform 0.3s',
  },
};

export const Modal = ({ url, description }) => {
  return (
    <div style={modalStyles.container}>
      <img style={modalStyles.thumbnail} src={url} alt={description} />
      <h1>{description}</h1>
    </div>
  );
};
