const BodyControls = ({
  color,
  handleChangeColor,
  texture,
  handleToggleTexture,
  burst,
  handleToggleBurst,
  burstColor,
  handleChangeBurstColor,
}) => {
  return (
    <>
      <input type="color" value={color} onChange={handleChangeColor} />
      <button onClick={handleToggleTexture}>
        {texture ? "Remove Texture" : "Apply Texture"}
      </button>
      <button onClick={handleToggleBurst}>
        {burst ? "Remove Burst" : "Apply Burst"}
      </button>
      {burst && (
        <input
          type="color"
          value={burstColor}
          onChange={handleChangeBurstColor}
        />
      )}
    </>
  );
};

export default BodyControls;
