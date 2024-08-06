import React, { useState } from "react";
import { GuitarNeckContext } from "../GuitarNeckContext";

export const GuitarNeckProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [fretboardWood, setFretboardWood] = useState("maple");
  const [inlaysColor, setInlaysColor] = useState("#414042");
  const [nutColor, setnutColor] = useState("white");

  const handleChangeFretboardWood = (e) => {
    setFretboardWood(e.target.value);
  };

  const handleChangeInlaysColor = (e) => {
    setInlaysColor(e.target.value);
  };

  const handleChangeNutColor = (e) => {
    setnutColor(e.target.value);
  };

  return (
    <GuitarNeckContext.Provider
      value={{
        fretboardWood,
        inlaysColor,
        nutColor,
        handleChangeFretboardWood,
        handleChangeInlaysColor,
        handleChangeNutColor,
      }}
    >
      {children}
    </GuitarNeckContext.Provider>
  );
};

export default GuitarNeckProvider;
