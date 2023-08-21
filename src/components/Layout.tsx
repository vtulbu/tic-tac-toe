import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-dark-navy flex-col min-w-360">
      {children}
    </div>
  );
};
