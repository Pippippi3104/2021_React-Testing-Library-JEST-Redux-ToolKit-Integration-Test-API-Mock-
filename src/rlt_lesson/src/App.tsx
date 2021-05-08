import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import RenderInput from "./RenderInput";
import FrameworkList from "./FrameworkList";
import MockServer from "./MockServer";
import Redux from "./Redux";
import ReduxAsync from "./ReduxAsync";
import CustomHooks from "./CustomHooks";

// 追加 output関数
export const output = (text: string) => {
  console.log(text);
};

// ダミーデータ
export const data = [
  { id: 1, item: "React" },
  { id: 2, item: "Angular" },
  { id: 3, item: "Vue" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />

        {/* lesson04 */}
        <RenderInput outputConsole={output} />

        {/* lesson06 */}
        {/* <FrameworkList frameworks={data} /> */}
        <FrameworkList />

        {/* lesson09 */}
        <MockServer />

        {/* lesson16 */}
        <Redux />

        {/* lesson17 */}
        <ReduxAsync />

        {/* lesson20 */}
        <CustomHooks />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
