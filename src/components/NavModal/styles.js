import styled from "styled-components";
import Color from "color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 95vw;
  max-width: 350px;
  box-sizing: border-box;
  margin-top: 20px;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;

  & .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Close = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  line-height: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.text.colors.secondary};
  cursor: pointer;
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "all")};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.7 : 1.0)};

  &:hover {
    opacity: 0.8;
  }
`;

export const Item = styled.div`
  height: 40px;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: ${({ isCurrent }) => (isCurrent ? "bold" : 500)};
  color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.colors.primary : theme.text.colors.secondary};
  cursor: pointer;
  border-radius: 4px;
  margin-top: 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => Color(theme.colors.primary).alpha(0.2)};
  }
`;
