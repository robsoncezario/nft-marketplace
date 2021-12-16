import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2px;
	border-radius: 20px;
	background-color: ${({ theme, connected }) =>
		connected ? theme.text.colors.primary : 'transparent'};
`;

export const Balance = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	font-weight: 400;
	line-height: 13px;
	color: ${({ theme }) => theme.colors.divider};
	padding-right: 10px;
	padding-left: 8px;

	& img {
		width: 20px;
		height: 20px;
		margin-right: 8px;
	}
`;

export const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.card};
	background-color: ${({ theme }) => theme.colors.button};
	cursor: pointer;
	padding-left: 12px;
	padding-right: 12px;
	height: 36px;
	font-weight: 500;
	font-size: 13px;
	line-height: 13px;
	border-radius: 20px;
	opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};
	pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};

	& i {
		font-size: 14px;
		line-height: 14px;
		margin-left: 10px;
	}

	&:hover {
		opacity: 0.8;
	}
`;

export const Spacer = styled.div`
	margin-left: 10px;
`;
