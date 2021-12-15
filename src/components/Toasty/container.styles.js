import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: calc(5vh - 5px);
  z-index: 10000000;
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
`

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`