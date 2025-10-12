import { Item, List } from "./StatisticsStyled";
import { useContext } from "react";
import { FeedbackContext } from "../../context/FeedbackContext";

export const Statistics = () => {
  const { good, neutral, bad } = useContext(FeedbackContext);
  return (
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {good + neutral + bad}</Item>
      <Item>
        Positive feedback:{" "}
        {good + neutral + bad
          ? Math.round((100 / (good + neutral + bad)) * good)
          : 0}
        %
      </Item>
    </List>
  );
};
