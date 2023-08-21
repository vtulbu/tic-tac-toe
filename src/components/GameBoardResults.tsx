import { useGameContext } from "../provider";
import { Mark, Opponent } from "../utils/constants";

const resultBoxes = [
  { label: Mark.X, className: "bg-light-blue" },
  { label: "ties", className: "bg-silver" },
  { label: Mark.O, className: "bg-light-yellow" },
] as const;

export const GameBoardResults = () => {
  const [{ results, firstPlayersMark, opponent }] = useGameContext();

  const getLabel = (label: (typeof resultBoxes)[number]["label"]) => {
    if (opponent === Opponent.CPU) {
      if (label === Mark.X) {
        return firstPlayersMark === Mark.X ? "(player)" : "(cpu)";
      } else if (label === Mark.O) {
        return firstPlayersMark === Mark.O ? "(player)" : "(cpu)";
      }
    } else {
      if (label === Mark.X) {
        return firstPlayersMark === Mark.X ? "(P1)" : "(P2)";
      } else if (label === Mark.O) {
        return firstPlayersMark === Mark.O ? "(P1)" : "(P2)";
      }
    }
    return "";
  };

  return (
    <div className="flex gap-5 max-w-360 min-w-360">
      {resultBoxes.map((e) => {
        return (
          <div
            key={`result-box-${e.label}`}
            className={`flex flex-col items-center px-6 py-3 rounded-lg text-dark-navy uppercase ${e.className}`}
          >
            <span>{`${e.label} ${getLabel(e.label) || ""}`}</span>
            <span className="font-bold text-xl">{results[e.label]}</span>
          </div>
        );
      })}
    </div>
  );
};
