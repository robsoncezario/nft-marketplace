import styled, { keyframes } from 'styled-components';

const fade = keyframes`
	from {
		opacity: 0;
		visibility: hidden;
	}

	to {
		opacity: 1;
		visibility: visible;
	}
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	overflow-y: scroll;
	/* mobile viewport bug fix */
	max-height: -webkit-fill-available;
	max-height: -moz-available;
	min-height: stretch;
	position: relative;

	@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
		& {
			min-height: 100vh;
		}
	}
`;

export const Content = styled.div`
	width: 100%;
	padding: 30px;
	animation: ${fade} 0.3s linear forwards;
`;
