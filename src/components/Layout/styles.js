import styled, { keyframes } from 'styled-components'

const fade = keyframes`
	from {
		opacity: 0;
		visibility: hidden;
	}

	to {
		opacity: 1;
		visibility: visible;
	}
`

export const Container = styled.div` 
	width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	min-height: 100vh;
	position: relative;
`

export const Content = styled.div` 
	width: 100%;
	padding: 30px;
	animation: ${fade} .3s linear forwards;
`
