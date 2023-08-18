import { Layout } from "./components/Layout";
import { GameProvider } from "./provider";

function App() {
  return (
    <GameProvider>
      <Layout>hello</Layout>
    </GameProvider>
  );
}

export default App;
