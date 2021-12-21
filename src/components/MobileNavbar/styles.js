import styled from 'styled-components';

export const IconButton = styled.i`
	font-size: 24px;
	line-height: 24px;
	color: ${({ theme }) => theme.text.colors.secondary};
	cursor: pointer;
	margin-left: 15px;

	@media (min-width: 1024px) {
		display: none;
	}

	&:hover {
		opacity: 0.8;
	}
`;
