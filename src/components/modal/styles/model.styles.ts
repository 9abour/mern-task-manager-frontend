import styled from "styled-components";

export const ModelWrapperStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: grid;
	place-content: center;
	background-color: #00000052;
	z-index: 999999;
`;

export const ModelStyled = styled.div`
	width: 300px;
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	border-radius: 6px;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	box-shadow: ${({ theme }) => theme.colors.background} 0px 2px 8px 0px;
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	color: ${({ theme }) => theme.colors.textGray};

	p {
		font-size: 21px;
		font-weight: 500;
	}

	div:last-child {
		margin-top: 0.5rem;
		button:first-of-type {
			margin-right: 5px;
			&:hover {
				background-color: ${({ theme }) => theme.colors.gray};
				color: ${({ theme }) => theme.colors.background};
			}
		}
		button:last-child {
			margin-left: 5px;
			&:hover {
				background-color: #fc5703;
				color: ${({ theme }) => theme.colors.background};
			}
		}

		button {
			background-color: ${({ theme }) => theme.colors.background};
			border: none;
			color: ${({ theme }) => theme.colors.textGray};
			font-weight: 600;
			padding: 0.5rem 1rem;
			border-radius: 4px;
		}
	}
`;
