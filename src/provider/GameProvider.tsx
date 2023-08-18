import React, { FC, PropsWithChildren } from "react";
import { GameContextType } from "./types";

export const GameContext = React.createContext<GameContextType>([{}, {}]);

export const GameProvider: FC<PropsWithChildren> = (props) => {
  return (
    <GameContext.Provider value={[{}, {}]}>
      {props.children}
    </GameContext.Provider>
  );
};
