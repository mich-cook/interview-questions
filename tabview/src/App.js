import './App.css';

import Tabview from "./components/Tabview.js";

function App() {

  // hard coding for simplicity. fetching data is out of scope.
  const languages = [ "English", "French", "German" ];
  const contents = [
    "English Hello World",
    "French Hello World",
    "German Hello World"
  ];

  return (
    <div className="App">
      <Tabview titles={languages} contents={contents} />
    </div>
  );
}

export default App;
