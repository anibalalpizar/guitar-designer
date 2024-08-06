import { useGuitarNeckContext } from "../../hooks/useGuitarNeck";

const NeckControls = () => {
  const {
    fretboardWood,
    handleChangeFretboardWood,
    inlaysColor,
    handleChangeInlaysColor,
    nutColor,
    handleChangeNutColor,
    hasNeckBinding,
    neckBindingColor,
    handleToggleNeckBinding,
    handleChangeNeckBindingColor,
  } = useGuitarNeckContext();

  return (
    <section className="flex flex-col ">
      <div className="flex justify-start items-center gap-3 p-2">
        <label>Fretboard Wood:</label>
        <select
          value={fretboardWood}
          onChange={handleChangeFretboardWood}
          className="
          p-2
          bg-white
          text-black
          border
          border-black
          rounded
        "
        >
          <option value="rosewood">Rosewood</option>
          <option value="maple">Maple</option>
        </select>
      </div>

      <div className="flex justify-start items-center gap-3 p-2">
        <label>Inlays Color:</label>
        <input
          type="color"
          value={inlaysColor}
          onChange={handleChangeInlaysColor}
        />
      </div>

      <div className="flex justify-start items-center gap-3 p-2">
        <label>Nut Color:</label>
        <select
          value={nutColor}
          onChange={handleChangeNutColor}
          className="
          p-2
          bg-white
          text-black
          border
          border-black
          rounded
        "
        >
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
      </div>

      <div className="flex justify-start items-center gap-3 p-2">
        <label>Neck Binding:</label>
        <button
          className="p-1 bg-blue-800 text-white rounded"
          onClick={handleToggleNeckBinding}
        >
          {hasNeckBinding ? "Remove Binding" : "Add Binding"}
        </button>
        {hasNeckBinding && (
          <input
            type="color"
            value={neckBindingColor}
            onChange={handleChangeNeckBindingColor}
          />
        )}
      </div>
    </section>
  );
};

export default NeckControls;
