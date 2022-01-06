import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 20px;
  background-color: ${({ theme, connected }) =>
    connected ? theme.text.colors.primary : "transparent"};

  @media (max-width: 768px) {
    display: ${({ desktopOnly }) => (desktopOnly == true ? "none" : "flex")};
  }
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 13px;
  color: ${({ theme }) => theme.colors.divider};
  padding-right: 10px;
  padding-left: 8px;

  & .container {
    width: 36px;
    height: 36px;
    margin-right: 4px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.card};
  background-color: ${({ theme }) => theme.colors.button};
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
  height: 36px;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  border-radius: 20px;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "all")};

  & i {
    font-size: 14px;
    line-height: 14px;
    margin-left: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Spacer = styled.div`
  margin-left: 8px;
`;
