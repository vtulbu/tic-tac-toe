import { useGameContext } from "../provider";
import { Mark, Opponent } from "../utils/constants";

export const GameBoardResults = () => {
  const [{ results, firstPlayersMark, opponent }] = useGameContext();

  const getLabel = (label: string) => {
    if (opponent === Opponent.CPU) {
      return firstPlayersMark === label ? "(player)" : "(cpu)";
    } else {
      return firstPlayersMark === label ? "(P1)" : "(P2)";
    }
  };

  return (
    <div className="flex gap-5">
      {[
        { label: Mark.X, className: "bg-light-blue" },
        { label: "ties", className: "bg-silver" },
        { label: Mark.O, className: "bg-light-yellow" },
      ].map((e) => {
        return (
          <div
            className={`flex flex-col items-center px-6 py-3 rounded-lg text-dark-navy uppercase ${e.className}`}
          >
            <span>{`${e.label} ${getLabel(e.label) || ""}`}</span>
            <span className="font-bold text-xl">{results.o}</span>
          </div>
        );
      })}
    </div>
  );
};
