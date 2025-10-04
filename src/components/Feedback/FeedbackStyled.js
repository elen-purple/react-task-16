import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 12px 36px;
  color: #ffffff;
  font-weight: bold;
  border-radius: 40px;
`;

export const Item = styled.li`
  &:nth-child(1) ${Button} {
    background-color: #370303ff;

    &:hover {
      background-color: #aa0d0dff;
    }
  }

  &:nth-child(2) ${Button} {
    background-color: #372703ff;

    &:hover {
      background-color: #b6830cff;
    }
  }

  &:nth-child(3) ${Button} {
    background-color: #082004ff;

    &:hover {
      background-color: #1a680cff;
    }
  }
`;
