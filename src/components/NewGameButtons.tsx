import { useGameContext } from "../provider";
import { Opponent } from "../utils/constants";
import { Button } from "./Button";

export const NewGameButtons = () => {
  const [, { setOpponent }] = useGameContext();

  return (
    <div className="flex flex-col gap-4 w-full">
      {["NEW GAME (VS CPU)", "NEW GAME (VS PLAYER)"].map((text, idx) => (
        <Button
          key={idx}
          text={text}
          className={
            idx === 0
              ? "bg-light-yellow shadow-newGameCpu"
              : "bg-light-blue shadow-newGamePlayer"
          }
          onClick={() => {
            setOpponent(idx === 0 ? Opponent.CPU : Opponent.Player);
          }}
        />
      ))}
    </div>
  );
};
