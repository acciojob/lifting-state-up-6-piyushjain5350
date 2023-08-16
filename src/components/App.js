import React from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Container</h1>
        <Child/>
    </div>
  )
}

export default App
