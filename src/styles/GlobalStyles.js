import { createGlobalStyle } from "styled-components";

import poppinsLight from "../assets/fonts/Poppins/Poppins-Light.ttf";
import poppinsRegular from "../assets/fonts/Poppins/Poppins-Regular.ttf";
import poppinsMedium from "../assets/fonts/Poppins/Poppins-Medium.ttf";
import poppinsSemiBold from "../assets/fonts/Poppins/Poppins-SemiBold.ttf";
import poppinsBold from "../assets/fonts/Poppins/Poppins-Bold.ttf";
import oleoScript from "../assets/fonts/Oleo_Script/OleoScript-Regular.ttf";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	div, img {
		-webkit-user-select: none;
		-webkit-user-drag: none;
	}

	@font-face {
		font-family: ${({ theme }) => theme.text.fontFamily};
		src: url(${poppinsLight}) format('truetype');
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: ${({ theme }) => theme.text.fontFamily};
		src: url(${poppinsRegular});
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: ${({ theme }) => theme.text.fontFamily};
		src: url(${poppinsMedium});
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: ${({ theme }) => theme.text.fontFamily};
		src: url(${poppinsSemiBold});
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: ${({ theme }) => theme.text.fontFamily};
		src: url(${poppinsBold});
		font-weight: bold;
		font-style: normal;
	}

	@font-face {
		font-family: 'Oleo Script';
		src: url(${oleoScript}) format('truetype');
		font-weight: 400;
		font-style: normal;
	}

  body {
		background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.text.colors.primary};
    font-family: ${({ theme }) => theme.text.fontFamily};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: subpixel-antialiased !important;
    overflow-x: hidden;
  }
`;
