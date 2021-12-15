import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	padding-left: 30px;
	padding-right: 30px;
	background: ${({theme}) => theme.colors.card};
	border-bottom: 1px solid ${({theme}) => theme.colors.divider};
	z-index: 1;

	@media(max-width: 768px) {
		padding-left: 20px;
		padding-right: 20px;
		justify-content: space-between;
	}

	&.start {
		justify-content: flex-start !important;
	}
`

export const Logo = styled.img` 
	width: 32px;
	height: 32px;
`		