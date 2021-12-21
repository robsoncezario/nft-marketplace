import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export const Name = styled.div`
  font-family: "Oleo Script", sans-serif;
  font-size: ${({ size }) => size / 2}px;
  line-height: ${({ size }) => size / 2}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;
