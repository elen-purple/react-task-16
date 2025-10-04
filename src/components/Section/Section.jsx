import { Container, Sect, Title } from "./SectionStyled";

export const Section = ({ title, children }) => {
  return (
    <Sect>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Sect>
  );
};
