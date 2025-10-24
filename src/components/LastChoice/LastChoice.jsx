import { useContext } from "react";
import { FeedbackContext } from "../../context/FeedbackContext";
import { Span, Text } from "./LastChoiceStyled";

export const LastChoice = () => {
  const { lastChoice } = useContext(FeedbackContext);
  return (
    <Text>
      Your last choice:{" "}
      <Span $choice={lastChoice.current}>{lastChoice.current}</Span>
    </Text>
  );
};
