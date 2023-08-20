import { Mark } from "./constants";

export const changeFavicon = (turn: Mark) => {
  const favicon = document.getElementById("favicon") as HTMLLinkElement;

  if (favicon) {
    if (turn === Mark.X) {
      favicon.href = "/icon-x.svg";
    } else {
      favicon.href = "/icon-o.svg";
    }
  }
};
