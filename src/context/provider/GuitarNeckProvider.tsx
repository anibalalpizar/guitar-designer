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
  const [hasNeckBinding, setHasNeckBinding] = useState(false);
  const [neckBindingColor, setNeckBindingColor] = useState("#ffffff");

  const handleChangeFretboardWood = (e) => {
    setFretboardWood(e.target.value);
  };

  const handleChangeInlaysColor = (e) => {
    setInlaysColor(e.target.value);
  };

  const handleChangeNutColor = (e) => {
    setnutColor(e.target.value);
  };

  const handleToggleNeckBinding = () => {
    setHasNeckBinding(!hasNeckBinding);
  };

  const handleChangeNeckBindingColor = (e) => {
    setNeckBindingColor(e.target.value);
  };

  return (
    <GuitarNeckContext.Provider
      value={{
        fretboardWood,
        inlaysColor,
        nutColor,
        hasNeckBinding,
        neckBindingColor,
        handleChangeFretboardWood,
        handleChangeInlaysColor,
        handleChangeNutColor,
        handleToggleNeckBinding,
        handleChangeNeckBindingColor,
      }}
    >
      {children}
    </GuitarNeckContext.Provider>
  );
};

export default GuitarNeckProvider;
