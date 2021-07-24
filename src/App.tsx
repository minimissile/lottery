import React from 'react'
import Home from "./views/Home";

const APP: React.FC = () => {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default React.memo(APP)
