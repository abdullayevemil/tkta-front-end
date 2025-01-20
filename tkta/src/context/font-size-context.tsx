"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface FontSizeContextType {
  fontSize: string;
  setFontSize: (size: string) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSizeState] = useState<string>("16px");

  const setFontSize = (size: string) => {
    setFontSizeState(size);
    
    localStorage.setItem("selectedFontSize", size);

    document.documentElement.style.fontSize = size;
  };

  useEffect(() => {
    const savedFontSize = localStorage.getItem("selectedFontSize") || "16px";

    setFontSizeState(savedFontSize);
    
    document.documentElement.style.fontSize = savedFontSize;
  }, []);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextType => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
};
