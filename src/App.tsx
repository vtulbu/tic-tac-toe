import { AnimatePresence } from "framer-motion";
import { GameBoard } from "./components/GameBoard";
import { Layout } from "./components/Layout";
import { StartGameMenu } from "./components/StartGameMenu";
import { useGameContext } from "./provider";

function App() {
  const [{ opponent }] = useGameContext();

  return (
    <Layout>
      <AnimatePresence>
        {opponent ? <GameBoard /> : <StartGameMenu />}
      </AnimatePresence>
    </Layout>
  );
}

export default App;
