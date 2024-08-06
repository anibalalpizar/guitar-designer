import React, { useState } from "react";
import { GuitarBodyContext } from "../GuitarBodyContext";

export const GuitarBodyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [color, setColor] = useState("#ffc06a");
  const [texture, setTexture] = useState("alder");
  const [bodyPaintOpacity, setBodyPaintOpacity] = useState(1);
  const [burst, setBurst] = useState(false);
  const [burstColor, setBurstColor] = useState("#000000");
  const [hasPickguard, HasPickguard] = useState(true);
  const [pickguardColor, setPickguardColor] = useState("#1e1b1c");

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleChangeBurstColor = (e) => {
    setBurstColor(e.target.value);
  };

  const handleChangeTexture = (e) => {
    setTexture(e.target.value);
  };

  const handleChangeBodyPaintOpacity = (e) => {
    setBodyPaintOpacity(e.target.value);
  };

  const handleToggleBurst = () => {
    setBurst(!burst);
  };

  const handleTogglePickguard = () => {
    HasPickguard(!hasPickguard);
  };

  const handleChangePickguardColor = (e) => {
    setPickguardColor(e.target.value);
  };

  return (
    <GuitarBodyContext.Provider
      value={{
        color,
        texture,
        bodyPaintOpacity,
        burst,
        burstColor,
        hasPickguard,
        pickguardColor,
        handleChangeColor,
        handleChangeBurstColor,
        handleChangeTexture,
        handleChangeBodyPaintOpacity,
        handleToggleBurst,
        handleTogglePickguard,
        handleChangePickguardColor,
      }}
    >
      {children}
    </GuitarBodyContext.Provider>
  );
};

export default GuitarBodyProvider;
