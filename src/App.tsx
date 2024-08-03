import { useState } from "react";
import BodyControls from "./components/common/BodyControls";
import Guitar from "./components/common/Guitar";
import NeckControls from "./components/common/NeckControls";

const App = () => {
  const [color, setColor] = useState("#ffc06a"); // Default color
  const [texture, setTexture] = useState(false); // Toggle texture
  const [burst, setBurst] = useState(false); // Toggle burst
  const [burstColor, setBurstColor] = useState("#000000"); // Default burst color
  const [hasPickguard, HasPickguard] = useState(true);
  const [pickguardColor, setPickguardColor] = useState("#1e1b1c");
  const [fretboardWood, setFretboardWood] = useState("maple");
  const [inlaysColor, setInlaysColor] = useState("#414042");

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleChangeBurstColor = (e) => {
    setBurstColor(e.target.value);
  };

  const handleToggleTexture = () => {
    setTexture(!texture);
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

  const handleChangeFretboardWood = (e) => {
    setFretboardWood(e.target.value);
  };

  const handleChangeInlaysColor = (e) => {
    setInlaysColor(e.target.value);
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl">Guitar Designer</h1>
      <h2 className="text-2xl text-center">
        This page is in <strong>very very very early development. </strong>{" "}
        Thanks for your patience! 🙏
      </h2>

      <h3>
        If you are a developer and this project looks interesting, contributions
        are highly appreciated!{" "}
        <a
          href="https://github.com/alfres2503/guitar-designer"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          Click to GitHub Repo
        </a>
      </h3>

      <section
        className="w-[75%] h-[50vh] flex justify-center items-center"
        style={{ color }}
      >
        <Guitar
          color={color}
          burst={burst}
          texture={texture}
          burstColor={burstColor}
          hasPickguard={hasPickguard}
          pickguardColor={pickguardColor}
          fretboardWood={fretboardWood}
          inlaysColor={inlaysColor}
        />
      </section>

      <div className="flex justify-start w-[75%]">
        <BodyControls
          color={color}
          handleChangeColor={handleChangeColor}
          texture={texture}
          handleToggleTexture={handleToggleTexture}
          burst={burst}
          handleToggleBurst={handleToggleBurst}
          burstColor={burstColor}
          handleChangeBurstColor={handleChangeBurstColor}
          hasPickguard={hasPickguard}
          pickguardColor={pickguardColor}
          handleTogglePickguard={handleTogglePickguard}
          handleChangePickguardColor={handleChangePickguardColor}
        />
        <NeckControls
          fretboardWood={fretboardWood}
          handleChangeFretboardWood={handleChangeFretboardWood}
          inlaysColor={inlaysColor}
          handleChangeInlaysColor={handleChangeInlaysColor}
        />
      </div>
    </main>
  );
};

export default App;
