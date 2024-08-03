const BodyControls = ({
  color,
  handleChangeColor,
  texture,
  handleToggleTexture,
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
        <label>Texture:</label>
        <button
          className="p-1 bg-blue-800 text-white rounded"
          onClick={handleToggleTexture}
        >
          {texture ? "Remove Wood Texture" : "Apply Wood Texture"}
        </button>
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
