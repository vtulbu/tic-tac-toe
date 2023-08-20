import { FC, PropsWithChildren } from "react";

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black opacity-50 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center ">
          <div className="relative transform overflow-hidden bg-semi-dark-navy text-left shadow-xl transition-all w-full">
            <div className="px-4 pb-4 pt-5 w-full text-white">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
