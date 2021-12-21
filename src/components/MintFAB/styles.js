import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.card};
  background-color: ${({ theme }) => theme.colors.button};
  font-size: 24px;
  line-height: 24px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
