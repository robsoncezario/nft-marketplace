import styled, { keyframes, css } from 'styled-components';

const bounce = keyframes`
  from, to { 
		transform: scale(1, 1); 
	}

  25% { 
		transform: scale(0.9, 1.1); 
	}

  50% { 
		transform: scale(1.1, 0.9); 
	}

  75% { 
		transform: scale(0.95, 1.05); 
	}
`;

const slideUp = keyframes`
  from { 
		opacity: 0;
		transform: translateY(30px); 
	}

  to { 
		opacity: 1;
		transform: none; 
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Button = styled.i`
	width: 150px;
	height: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.card};
	background-color: ${({ theme, isDragActive, isDragReject }) => {
		switch (true) {
			case isDragReject === true:
				return theme.colors.error;
			case isDragActive === true:
				return theme.colors.secondary;
			default:
				return theme.colors.button;
		}
	}};
	font-size: 75px;
	line-height: 75px;
	border-radius: 50%;
	cursor: pointer;

	${({ isDragActive }) =>
		isDragActive &&
		css`
			animation: ${bounce} 1.25s infinite;
		`}

	&:hover {
		opacity: 0.8;
	}
`;

export const Trashcan = styled.i`
	position: absolute;
	right: -6px;
	top: -6px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	font-size: 12px;
	line-height: 12px;
	background-color: ${({ theme }) => theme.colors.error};
	color: ${({ theme }) => theme.colors.background};
	cursor: pointer;
	pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};
	opacity: ${({ isDisabled }) => (isDisabled ? 0.7 : 1.0)};

	&:hover {
		opacity: 0.8;
	}
`;

export const PreviewContainer = styled.div`
	position: relative;
`;

export const Preview = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 6px;
	animation: ${slideUp} 1s forwards;
`;

export const Name = styled.div`
	margin-top: 20px;
	font-size: 14px;
	line-height: 14px;
	color: ${({ theme }) => theme.text.colors.primary};
`;

export const FileSize = styled.div`
	margin-top: 5px;
	font-size: 11px;
	line-height: 11px;
	font-weight: 600;
	color: ${({ theme }) => theme.text.colors.secondary};
`;

export const Label = styled.div`
	font-size: 14px;
	line-height: 14px;
	margin-top: 20px;
	color: ${({ theme, isDragActive, isDragReject }) => {
		switch (true) {
			case isDragReject === true:
				return theme.colors.error;
			case isDragActive === true:
				return theme.colors.secondary;
			default:
				return theme.text.colors.secondary;
		}
	}};
`;
