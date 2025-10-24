import { useRef, useState } from "react";
import { createContext } from "react";

export const FeedbackContext = createContext(null);

export const FeedbackProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const lastChoice = useRef("_____");

  const onLeaveFeedback = (e) => {
    switch (e.target.id) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
    }
    lastChoice.current = e.target.id;
  };

  return (
    <FeedbackContext.Provider
      value={{ good, neutral, bad, onLeaveFeedback, lastChoice }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
