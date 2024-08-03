const BodyControls = ({
  color,
  handleChangeColor,
  texture,
  bodyPaintOpacity,
  handleChangeTexture,
  handleChangeBodyPaintOpacity,
  burst,
  handleToggleBurst,
  burstColor,
  handleChangeBurstColor,
  hasPickguard,
  pickguardColor,
  handleTogglePickguard,
  handleChangePickguardColor,
}) => {
  return (
    <section className="flex flex-col ">
      <div className="flex justify-start items-center gap-3 p-2">
        <label>Body Color:</label>
        <input type="color" value={color} onChange={handleChangeColor} />
      </div>

      <div className="flex justify-start items-center gap-3 p-2">
        <label>Body Paint Opacity:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={bodyPaintOpacity}
          onChange={handleChangeBodyPaintOpacity}
        />
      </div>

      <div className="flex justify-start items-center gap-3 p-2">
        <label>Body Texture:</label>
        <select
          value={texture}
          onChange={handleChangeTexture}
          className="
          p-2
          bg-white
          text-black
          border
          border-black
          rounded
        "
        >
          <option value="alder">Alder</option>
          <option value="flamedMaple">Flamed Maple</option>
        </select>
      </div>

      <div className="flex justify-start items-center gap-3 p-2">
        <label>Burst:</label>
        <button
          className="p-1 bg-blue-800 text-white rounded"
          onClick={handleToggleBurst}
        >
          {burst ? "Remove Burst" : "Apply Burst"}
        </button>
        {burst && (
          <input
            type="color"
            value={burstColor}
            onChange={handleChangeBurstColor}
          />
        )}
      </div>

      <div className="flex justify-start items-center gap-3 p-2">
        <label>Pickguard:</label>
        <button
          className="p-1 bg-blue-800 text-white rounded"
          onClick={handleTogglePickguard}
        >
          {hasPickguard ? "Remove Pickguard" : "Apply Pickguard"}
        </button>
        {hasPickguard && (
          <input
            type="color"
            value={pickguardColor}
            onChange={handleChangePickguardColor}
          />
        )}
      </div>

      <div className="flex justify-start items-center gap-3 p-2"></div>
    </section>
  );
};

export default BodyControls;
