import { Button, Item, List } from "./FeedbackStyled";
import { FeedbackContext } from "../../context/FeedbackContext";
import { useContext } from "react";

export const Feedback = () => {
  const { onLeaveFeedback } = useContext(FeedbackContext);
  return (
    <List onClick={onLeaveFeedback}>
      <Item>
        <Button id="good">Good</Button>
      </Item>
      <Item>
        <Button id="neutral">Neutral</Button>
      </Item>
      <Item>
        <Button id="bad">Bad</Button>
      </Item>
    </List>
  );
};
