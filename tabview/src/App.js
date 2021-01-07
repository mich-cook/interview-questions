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
      <p>Single React Class Component</p>
      <Tabview titles={languages} contents={contents} initialtab={selected} />
      <p>Multicomponent React Implementation (All Using Classes)</p>
      <TabviewMulti titles={languages} contents={contents} initialtab={selected} />
      <p>Multicomponent React Implementation (Functional Components and Hooks)</p>
      <TabviewFunc titles={languages} contents={contents} initialtab={selected} />
    </div>
  );
}

export default App;
