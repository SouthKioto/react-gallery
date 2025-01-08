import React, { useState, useEffect } from 'react';
import { Gallery } from './components/Gallery';

const appStyles = {
  container: {
    textAlign: 'center',
  },
};

export function App() {
  return (
    <div style={appStyles.container}>
      <Gallery />

      <div style={appStyles.buttonContainer}></div>
    </div>
  );
}
