import { useGameContext } from "../provider";
import { Mark } from "../utils/constants";
import { Card } from "./Card";
import { IconO } from "./SVG/IconO";
import { IconX } from "./SVG/IconX";

export const GamePanel = () => {
  const [{ gamePanel, turn }, { setGamePanel, setTurn }] = useGameContext();

  return (
    <div className="flex flex-col gap-5 mb-5">
      {gamePanel.map((r, i) => {
        return (
          <div key={i} className="flex gap-5">
            {r.map((c, j) => {
              return (
                <Card
                  key={j}
                  onClick={() => {
                    if (c === null) {
                      const newGamePanel = [...gamePanel];
                      newGamePanel[i][j] = turn;
                      setTurn(turn === Mark.X ? Mark.O : Mark.X);
                      setGamePanel(newGamePanel);
                    }
                  }}
                >
                  {c === null ? null : c === Mark.X ? <IconX /> : <IconO />}
                </Card>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
