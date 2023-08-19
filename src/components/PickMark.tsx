import { useGameContext } from "../provider";
import { Mark, colors } from "../utils/constants";
import { PickButton } from "./PickButton";
import { IconOOutline } from "./SVG/IconOOutline";
import { IconXOutline } from "./SVG/IconXOutline";

export const PickMark = () => {
  const [{ firstPlayersMark }, { setFirstPlayerMark }] = useGameContext();

  return (
    <div className="flex bg-semi-dark-navy px-6 pt-6 pb-8 rounded-2xl flex-col justify-center items-center shadow-pickMenuShadow">
      <h1 className="text-silver text-base capitalize font-bold tracking-widest mb-6">
        PICK PLAYER 1’S MARK
      </h1>
      <div className="flex bg-dark-navy mb-4 rounded-lg p-2 gap-3">
        {[IconXOutline, IconOOutline].map((Icon, idx) => (
          <PickButton
            className={
              firstPlayersMark === Mark.X && idx === 0
                ? "bg-silver"
                : firstPlayersMark === Mark.O && idx === 1
                ? "bg-silver"
                : "bg-dark-navy"
            }
            onClick={() => {
              setFirstPlayerMark(idx === 0 ? Mark.X : Mark.O);
            }}
          >
            <Icon
              fill={
                firstPlayersMark === Mark.X && idx === 0
                  ? colors["semi-dark-navy"]
                  : firstPlayersMark === Mark.O && idx === 1
                  ? colors["semi-dark-navy"]
                  : idx === 0
                  ? colors.silver
                  : colors["light-yellow"]
              }
            />
          </PickButton>
        ))}
      </div>
      <p className="text-silver opacity-50 tracking-wider ">
        REMEMBER : X GOES FIRST
      </p>
    </div>
  );
};
