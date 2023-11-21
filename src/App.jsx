import AddNumber from "./componets/AddNumber";
import AddRomanNumber from "./componets/AddRomanNumber";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <>
      <Header title="Roman numerals project" />
      <main>
        <h1>Roman Numerals Converter</h1>
        <p>
          This simple <strong>Roman Numerals Converter</strong> can be used at
          any time to <em>convert numbers to Roman numerals</em>. If you need to
          make conversion from Arabic numbers to Roman numerals, simply enter
          the number to the box on the right, and press the button 'Convert to
          Roman'. You will get the exact representation of the number in Roman
          Numeral Symbols.
        </p>
        <DataProvider>
          <div className="App">
            <AddNumber />
            <AddRomanNumber />
          </div>
        </DataProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
