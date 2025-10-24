import styled from "styled-components";

export const Text = styled.p`
  color: #ffffff;
  text-align: center;
  margin-top: 8px;
`;

export const Span = styled.span`
  color: ${({ $choice }) =>
    $choice === "good"
      ? "#1a680cff"
      : $choice === "neutral"
      ? "#b6830cff"
      : $choice === "bad"
      ? "#aa0d0dff"
      : ""};
`;
