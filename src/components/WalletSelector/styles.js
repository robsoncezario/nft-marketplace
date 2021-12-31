import styled from "styled-components";

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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const Name = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  align-self: center;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const RedirectButton = styled.div`
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

  & i {
    font-size: 14px;
    line-height: 14px;
    margin-left: 10px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
