import styled from "styled-components";
import Color from "color";

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Item = styled.div`
  height: 36px;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: ${({ isCurrent }) => (isCurrent ? "bold" : 500)};
  color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.colors.primary : theme.text.colors.secondary};
  cursor: pointer;
  border-radius: 6px;
  margin-left: 16px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;
