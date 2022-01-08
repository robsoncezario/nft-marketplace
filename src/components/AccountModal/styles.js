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
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;

  & h4 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 13px;
    line-height: 13px;
    font-weight: 600;
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

export const Center = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  margin-bottom: 10px;
`;

export const Spacer = styled.div`
  margin-top: 20px;
`;

export const Connector = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  & img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  & .name {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 6px;
  padding-left: 12px;
  padding-right: 40px;
  font-weight: 600;
  font-size: 13px;
  line-height: 13px;
  color: ${({ theme }) => theme.text.colors.secondary};
  border: none;
  background: ${({ theme }) => theme.colors.background};
  cursor: pointer;

  &::placeholder {
    color: ${({ theme, withError }) =>
      withError ? theme.colors.error : theme.text.colors.secondary};
  }

  &::selection {
    background-color: ${({ theme }) => Color(theme.colors.primary).alpha(0.2)};
  }
`;

export const CopyButton = styled.i`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Balance = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .asset {
    font-size: 12px;
    line-height: 12px;
  }

  & .amount {
    font-size: 16px;
    line-height: 16px;
  }
`;

export const Redirect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  line-height: 13px;
  color: ${({ theme }) => theme.colors.primary};

  & i {
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

export const DisconnectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.card};
  background-color: ${({ theme }) => theme.colors.button};
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
  height: 36px;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  border-radius: 18px;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "all")};

  & i {
    font-size: 14px;
    line-height: 14px;
    margin-left: 10px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
