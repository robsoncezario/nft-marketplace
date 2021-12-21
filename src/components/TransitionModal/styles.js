import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  z-index: 20;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  background: ${(props) =>
    props.open ? "rgba(10, 10, 10, 0.3)" : "transparent"};
  pointer-events: ${(props) => (props.open ? "all" : "none")};
  transition: background 0.3s;

  ${(props) => {
    switch (props.align) {
      case "bottomLeft":
        return `
					align-items: flex-end;
					justify-content: flex-start;
				`;
      default:
        return `
					align-items: center;
					justify-content: center;
				`;
    }
  }}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transform: ${(props) => (props.open ? "none" : "translateY(3em)")};
  pointer-events: ${(props) => (props.open ? "all" : "none")};
`;
