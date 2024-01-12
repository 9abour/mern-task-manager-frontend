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
	-webkit-animation: spin 3s infinite linear;
	animation: spin 3s infinite linear;
	height: 50px;
	position: relative;
	width: 50px;
	&:before {
		content: "";
		display: block;
		height: 50px;
		width: 10px;
		-webkit-animation: spin 0.5s infinite;
		animation: spin 0.5s infinite;
		background: ${({ theme }) => theme.colors.primary};
		position: absolute;
		left: 50%;
		margin-left: -5px;
	}

	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;
