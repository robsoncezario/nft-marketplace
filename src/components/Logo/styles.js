import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  font-size: ${({ size }) => size / 2}px;
  line-height: ${({ size }) => size / 2}px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.card};
  border-radius: 50%;
  flex-shrink: 0;
`;

export const Name = styled.div`
  font-family: "Oleo Script", sans-serif;
  font-size: ${({ size }) => size / 2}px;
  line-height: ${({ size }) => size / 2}px;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    display: none;
  }
`;
