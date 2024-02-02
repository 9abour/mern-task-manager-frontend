import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
    position: relative;
  }
  
  p, span {
    margin: 0;
  }

  svg {
    margin: 0 !important;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
	width: 3px;
}

::-webkit-scrollbar-track {
	background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
	background: #888;
}

::-webkit-scrollbar-thumb:hover {
	background: #555;
}

`;

export default globalStyles;
