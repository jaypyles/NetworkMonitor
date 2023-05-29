import Docker from "./components/Docker";
import NetworkStats from "./components/NetworkStats";
import System from "./components/System";
function App() {
  return (
    <>
      <NetworkStats />
      <Docker />
      <System />
    </>
  );
}

export default App;
