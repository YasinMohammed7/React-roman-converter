import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [number, setNumber] = useState("");
  const [romanNum, setRomanNum] = useState("");
  const [originalNumber, setOriginalNumber] = useState("");
  const [romanNumber, setRomanNumber] = useState("");
  const [arabicNum, setArabicNum] = useState("");
  const [originalRomanNum, setOriginalRomanNum] = useState("");
  const [fetchError, setFetchError] = useState(null);

  const convertToRoman = (num) => {
    const romanNumeralLookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let romanNumeral = "";

    for (const numeral in romanNumeralLookup) {
      const value = romanNumeralLookup[numeral];
      while (value <= num) {
        num -= value;
        romanNumeral += numeral;
      }
    }

    return romanNumeral;
  };

  const convertToNum = (roman) => {
    const validator =
      /^M{0,3}(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
    const token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
    const key = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let num = 0;
    let m;

    if (!(roman && validator.test(roman))) {
      num = "Invalid";
    } else {
      while ((m = token.exec(roman))) {
        num += key[m[0]];
      }
    }
    if (num > 3999) {
      throw new Error("Invalid input. The number must be 3999 or less");
    }
    return num;
  };

  const handleConvertNumber = (e) => {
    e.preventDefault();
    const roman = convertToRoman(number);
    setOriginalNumber(number);
    setRomanNum(roman);
  };

  const handleConvertRoman = (e) => {
    e.preventDefault();
    try {
      const number = convertToNum(romanNumber);
      setOriginalRomanNum(romanNumber);
      setArabicNum(number);
      setFetchError(null);
    } catch (error) {
      setFetchError(error.message);
    }
  };
  return (
    <DataContext.Provider
      value={{
        handleConvertNumber,
        number,
        setNumber,
        originalNumber,
        romanNum,
        romanNumber,
        setRomanNumber,
        handleConvertRoman,
        originalRomanNum,
        arabicNum,
        fetchError,
        setFetchError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
