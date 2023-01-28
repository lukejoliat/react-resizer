import { Resizer } from "./components/Resizer";
import "./styles.css";

export default function App() {
  return (
    <Resizer dir="horizontal">
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      {/* <Resizer.Dragger /> */}
    </Resizer>
  );
}
