import { useState } from "react";
import { Feedback } from "./components/Feedback/Feedback";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Main } from "./AppStyled";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
  };

  return (
    <Main>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <Feedback onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} />
      </Section>
    </Main>
  );
};

export default App;
