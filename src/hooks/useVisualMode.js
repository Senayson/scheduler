import { useState } from "react";

function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(next, replace = false) {
    setMode(next);
    if (replace === true) {
      setHistory((prev) => {
        prev.pop();
        return [...prev, next];
      });
    } else {
      setHistory((prev) => [...prev, next]);
    }
  }

  function back() {
    if (history.indexOf(mode) === 0) {
      return mode;
    }
    console.log("Backhistory", history);
    setMode(history[history.indexOf(mode) - 1]);
  }
  return { mode: mode, transition: transition, back: back };
}

export default useVisualMode;
