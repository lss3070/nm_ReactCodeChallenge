import { useState } from "react";

function useLockScroll() {
  const [isLocked, setLocked] = useState(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    return originalStyle;
  });

  const lockScroll = () => {
    document.body.style.overflow = "hidden";
    setLocked("hidden");
  };

  const unlockScroll = () => {
    document.body.style.overflow = "visible";
    setLocked("visible");
  };

  return [isLocked, { lockScroll, unlockScroll }];
}
export default useLockScroll;
