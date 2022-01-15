import styled from "styled-components";
import Color from "color";

export const Container = styled.a`
  position: relative;
  width: 250px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 6px;
  /*border: 1px solid ${({ theme }) => theme.colors.divider}; */
  background-color: ${({ theme }) => theme.colors.card};
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    width: calc(50vw - 50px);
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
  color: ${({ theme }) => theme.text.colors.primary};
`;

export const Description = styled.div`
  margin-top: 10px;
  font-size: 11px;
  line-height: 13px;
  font-weight: 400;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text.colors.secondary};
`;

export const FullRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  /*border-top: 1px solid ${({ theme }) => theme.colors.divider}; */
  /*padding-top: 10px; */

  &.bottom-spacer {
    margin-top: 0;
    margin-bottom: 15px;
  }
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

export const Crypto = styled.img`
  height: 24px;
  width: 24px;
`;

export const Price = styled.div`
  font-family: 600;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.text.colors.secondary};
  margin-left: 10px;
`;

export const OwnerRow = styled.div`
  position: absolute;
  right: 8px;
  bottom: 16px;
  display: flex;
  align-items: center;
`;

export const OptionsButton = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 16px;
  border-radius: 50%;
  color: ${({ theme }) => theme.text.colors.secondary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text.colors.primary};
    background-color: ${({ theme }) => Color(theme.colors.primary).alpha(0.2)};
  }
`;

export const Button = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  border-radius: 20px;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
