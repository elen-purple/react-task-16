import { Feedback } from "./components/Feedback/Feedback";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Main } from "./AppStyled";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Main>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <Feedback />
        </Section>
        <Section title="Statistics">
          <Statistics />
        </Section>
      </Main>
    </FeedbackProvider>
  );
};

export default App;
