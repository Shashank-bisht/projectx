// BackgroundContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const BackgroundColorContext = createContext();

// BackgroundColorProvider component
export const BackgroundColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Default color

  return (
    <BackgroundColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

// Custom hook to use context
export const useBackgroundColor = () => {
  return useContext(BackgroundColorContext);
};
