import { useContext } from "react";
import DataContext from "../context/DataContext";

const AddRomanNumber = () => {
  const {
    romanNumber,
    setRomanNumber,
    handleConvertRoman,
    originalRomanNum,
    arabicNum,
    fetchError,
  } = useContext(DataContext);

  return (
    <div className="converter">
      <form onSubmit={handleConvertRoman}>
        <legend>Convert to Number</legend>
        <label htmlFor="convert-to-number">Roman Numeral</label>
        <input
          type="text"
          id="convert-to-number"
          required
          value={romanNumber}
          onChange={(e) => setRomanNumber(e.target.value.toUpperCase())}
        />
        <button type="submit">Convert</button>
      </form>
      {fetchError ? (
        <p style={{ color: "red", fontSize: "13px" }}>
          {`Error: ${fetchError}!`}
        </p>
      ) : (
        <p>
          {originalRomanNum && arabicNum
            ? `${originalRomanNum} = ${arabicNum}`
            : "MMXXIII = 2023"}
        </p>
      )}
    </div>
  );
};

export default AddRomanNumber;
