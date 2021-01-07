import './App.css';

import Tabview from "./components/Tabview.js";
import TabviewMulti from "./components/TabviewMulti.js";
import TabviewFunc from "./components/TabviewFunc.js";

function App() {

  // hard coding for simplicity. fetching data is out of scope.
  const languages = [ "English", "French", "German" ];
  const contents = [
    "English Hello World",
    "French Hello World",
    "German Hello World"
  ];

  let selected = 0;

  return (
    <div className="App">
      <h2>Single React Class Component</h2>
      <Tabview titles={languages} contents={contents} initialtab={selected} />
      <h2>Multicomponent React Implementation (All Using Classes)</h2>
      <TabviewMulti titles={languages} contents={contents} initialtab={selected} />
      <h2>Multicomponent React Implementation (Functional Components and Hooks)</h2>
      <TabviewFunc titles={languages} contents={contents} initialtab={selected} />
    </div>
  );
}

export default App;
