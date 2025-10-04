import { Button, Item, List } from "./FeedbackStyled";

export const Feedback = ({ onLeaveFeedback }) => {
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
