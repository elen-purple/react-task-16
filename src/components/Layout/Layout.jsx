import { Feedback } from "../Feedback/Feedback";
import { Section } from "../Section/Section";
import { Statistics } from "../Statistics/Statistics";
import { Main } from "./LayoutStyled";
import { LastChoice } from "../LastChoice/LastChoice";

export const Layout = () => {
  return (
    <Main>
      <Section title="Please leave feedback">
        <Feedback />
      </Section>
      <Section title="Statistics">
        <Statistics />
        <LastChoice />
      </Section>
    </Main>
  );
};
