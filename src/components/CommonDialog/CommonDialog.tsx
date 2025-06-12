import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface TCommonDialogProps {
  children: ReactNode;
}

const CommonDialog: FC<TCommonDialogProps> = ({ children }) => {
  const el = document.getElementById("dialog-root");

  if (!el) {
    return <></>;
  }

  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-stone-800/50">
      <div
        className="bg-stone-700 p-6 rounded shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    el
  );
};

export default CommonDialog;
