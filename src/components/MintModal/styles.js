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

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 6px;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 600;
  font-size: 13px;
  line-height: 13px;
  color: ${({ theme }) => theme.text.colors.secondary};
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  margin-top: 15px;

  &[type="password"] {
    padding-right: 36px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text.colors.secondary};
  }

  &::selection {
    background-color: ${({ theme }) => Color(theme.colors.primary).alpha(0.2)};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.text.colors.primary};
    background-color: ${({ theme }) =>
      Color(theme.colors.background).darken(0.025)};
  }

  &:hover::placeholder,
  &:focus::placeholder {
    color: ${({ theme }) => theme.text.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  resize: none;
  border: none;
  border-radius: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-weight: 600;
  font-size: 13px;
  line-height: 13px;
  color: ${({ theme }) => theme.text.colors.secondary};
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  margin-top: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.text.colors.secondary};
  }

  &::selection {
    background-color: ${({ theme }) => Color(theme.colors.primary).alpha(0.2)};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.text.colors.primary};
    background-color: ${({ theme }) =>
      Color(theme.colors.background).darken(0.025)};
  }

  &:hover::placeholder,
  &:focus::placeholder {
    color: ${({ theme }) => theme.text.colors.primary};
  }
`;

export const FeeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Price = styled.div`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  margin-left: 10px;
`;

export const Button = styled.div`
  width: 100%;
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
  margin-top: 15px;

  & i {
    font-size: 14px;
    line-height: 14px;
    margin-left: 10px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
