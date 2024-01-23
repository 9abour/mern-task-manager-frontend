import styled from "styled-components";

export const PageLoaderWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	place-items: center;
`;

export const LoadingWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
`;

export const LoaderStyled = styled.div`
	border: 4px solid ${({ theme }) => theme.colors.primary};
	border-left-color: transparent;
	border-radius: 50%;

	width: 36px;
	height: 36px;

	animation: loader 1s linear infinite;

	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;
