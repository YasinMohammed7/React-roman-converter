import { useContext } from "react";
import DataContext from "../context/DataContext";

const AddNumber = () => {
  const { handleConvertNumber, number, setNumber, originalNumber, romanNum } =
    useContext(DataContext);

  return (
    <div className="converter">
      <form onSubmit={handleConvertNumber}>
        <legend>Convert to Roman Numerals</legend>
        <label htmlFor="convert-to-roman">Number</label>
        <input
          type="number"
          id="convert-to-roman"
          min="1"
          max="3999"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {originalNumber && romanNum ? (
        <p>{`${originalNumber} = ${romanNum}`}</p>
      ) : (
        <p>2023 = MMXXIII</p>
      )}
    </div>
  );
};

export default AddNumber;
