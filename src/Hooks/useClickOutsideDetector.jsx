import React, { useEffect } from "react";
function useClickOutsideDetector(ref, onClickOutside) {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside, {
      capture: true,
    });
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside, {
        capture: true,
      });
    };
  }, [ref, onClickOutside]);
}
export default useClickOutsideDetector;
