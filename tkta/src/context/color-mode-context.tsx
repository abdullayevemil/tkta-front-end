"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ColorModeContextType {
  isBlackAndWhite: boolean;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

export const ColorModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isBlackAndWhite, setIsBlackAndWhite] = useState<boolean>(false);

  const toggleColorMode = () => {
    const newMode = !isBlackAndWhite;

    setIsBlackAndWhite(newMode);

    localStorage.setItem("isBlackAndWhite", JSON.stringify(newMode));

    document.documentElement.classList.toggle("black-and-white", newMode);
  };

  useEffect(() => {
    const savedMode = JSON.parse(
      localStorage.getItem("isBlackAndWhite") || "false"
    );

    setIsBlackAndWhite(savedMode);

    if (savedMode) {
      document.documentElement.classList.add("black-and-white");
    }
  }, []);

  return (
    <ColorModeContext.Provider value={{ isBlackAndWhite, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return context;
};
