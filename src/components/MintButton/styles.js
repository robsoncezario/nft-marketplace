import styled from 'styled-components';

export const Button = styled.i`
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.card};
	background-color: ${({ theme }) => theme.colors.button};
	font-size: 20px;
	line-height: 20px;
	border-radius: 6px;
	margin-right: 10px;
	cursor: pointer;

	@media (max-width: 768px) {
		display: none;
	}

	&:hover {
		opacity: 0.8;
	}
`;
