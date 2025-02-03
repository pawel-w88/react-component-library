import { React } from "react";
import { UiComponents } from "./components/Display/UiComponents/UiComponents";
import "./App.css";
import { DataProcesingComponents } from "./components/Display/DataProcesingComponents";
import {
  MultimediaComponents,
  NaviMenuComponents,
  ServerCommunicateComponents,
  ToolsComponents,
} from "./components";

function App() {
  return (
    <div className="App">
      <h1>Biblioteka Komponentów</h1>
      <NaviMenuComponents />
      <MultimediaComponents />
      <UiComponents />
      <DataProcesingComponents />
      <ToolsComponents />
      <ServerCommunicateComponents />
    </div>
  );
}

export default App;
