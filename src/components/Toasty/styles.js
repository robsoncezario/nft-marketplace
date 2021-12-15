import styled, {keyframes} from 'styled-components'

const bounce = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  animation-name: ${bounce};
  animation-timing-function: ease;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  color: ${({color}) => color}; 
  border-left: 3px solid ${({color}) => color}; 
  opacity: 0;
  margin-top: 5px;
`

export const Icon = styled.div`
  margin-right: 10px;
  font-size: 18px;
  width: 18px;
  height: 18px;
`;

export const Description = styled.div`
  width: 250px;
  font-size: 13px;
  line-height: 13px;
  font-weight: 500;
  padding-right: 10px;
  word-break: break-all;
  color: rgb(24, 24, 27);
`;

export const Close = styled.i`
  position: absolute;
  right: 4px;
  top: 4px;
  font-size: 16px;
  color: #767676;
  cursor: pointer;
  pointer-events: all;

  &:hover {
    opacity: .7;
  }
`;