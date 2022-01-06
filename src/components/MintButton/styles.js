import styled from "styled-components";
import Color from "color";

export const Button = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => Color(theme.colors.primary).alpha(0.2)};
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
  border-radius: 20px;
  margin-right: 10px;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;

  & i {
    font-size: 15px;
    line-height: 15px;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    display: ${({ desktopOnly }) => (desktopOnly == true ? "none" : "flex")};
  }

  &:hover {
    opacity: 0.8;
  }
`;
