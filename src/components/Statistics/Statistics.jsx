import { Item, List } from "./StatisticsStyled";

export const Statistics = ({ good, neutral, bad }) => {
  console.log();
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
