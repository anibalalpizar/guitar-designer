import { useState } from "react";
import BodyControls from "./BodyControls";
import TeleBody from "./TeleBody";
import TeleNeck from "./TeleNeck";

const App = () => {
  const [color, setColor] = useState("#ffc06a"); // Default color
  const [texture, setTexture] = useState(false); // Toggle texture
  const [burst, setBurst] = useState(false); // Toggle burst
  const [burstColor, setBurstColor] = useState("#000000"); // Default burst color

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
        className="border border-black w-[50%] h-[50vh] flex justify-center items-center"
        style={{ color }}
      >
        <TeleBody
          color={color}
          burst={burst}
          texture={texture}
          burstColor={burstColor}
        />
        <TeleNeck />
      </section>

      <BodyControls
        color={color}
        handleChangeColor={handleChangeColor}
        texture={texture}
        handleToggleTexture={handleToggleTexture}
        burst={burst}
        handleToggleBurst={handleToggleBurst}
        burstColor={burstColor}
        handleChangeBurstColor={handleChangeBurstColor}
      />
    </main>
  );
};

export default App;
