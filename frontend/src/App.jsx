import React from "react";
import Docker from "./components/Docker";
import NetworkStats from "./components/NetworkStats";
import System from "./components/System";
function App() {
  return (
    <>
      <NetworkStats />
      <System />
      <Docker />
    </>
  );
}

export default App;
