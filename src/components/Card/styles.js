import styled from "styled-components";

export const Container = styled.a`
  position: relative;
  width: 250px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;
  /*border: 1px solid ${({ theme }) => theme.colors.divider}; */
  background-color: ${({ theme }) => theme.colors.card};
  cursor: pointer;

  @media (max-width: 768px) {
    width: calc(50vw - 50px);
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: inherit;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: inherit;
`;

export const Favorite = styled.i`
  position: absolute;
  right: 10px;
  top: 8px;
  width: 32px;
  height: 32px;
  font-size: 16px;
  line-height: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, favorite }) =>
    favorite ? theme.colors.primary : theme.text.colors.secondary};

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    font-size: 12px;
    line-height: 12px;
  }
`;

export const Name = styled.div`
  font-size: 13px;
  font-weight: bold;
  line-height: 13px;
`;

export const FullRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  /*border-top: 1px solid ${({ theme }) => theme.colors.divider}; */
  /*padding-top: 10px; */
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JazzIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;

export const Address = styled.div`
  font-family: 500;
  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.text.colors.secondary};
  margin-left: 10px;
`;

export const Crypto = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
`;

export const Price = styled.div`
  font-family: 500;
  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.text.colors.secondary};
`;
