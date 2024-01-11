import styled from "styled-components";

export const CategoryCardStyled = styled.div`
	width: 300px;
	height: 200px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	border-radius: 16px;
	border: 1.5px solid ${({ theme }) => theme.colors.gray};
	box-shadow: ${({ theme }) => theme.colors.background} 0px 2px 8px 0px;
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	padding: 1rem;

	& > :first-child {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h3 {
			font-size: 22px;
			color: white;
			margin: 0;
			display: inline-block;
		}

		span {
			font-size: 18px;
			color: ${({ theme }) => theme.colors.textColor};
			text-align: end;
		}
	}

	p {
		margin: 1rem 0;
		display: -webkit-box;
		max-width: 300px;
		height: fit-content;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;

		color: ${({ theme }) => theme.colors.textGray};
	}

	& > :last-child {
		display: flex;
		align-items: center;
		justify-content: space-between;

		height: 50px;

		span {
			width: 250px;
			display: block;
			text-align: start !important;
			color: white;
		}

		button {
			width: 45px;
			height: 45px;

			color: ${({ theme }) => theme.colors.secondaryBackground};

			border: double ${({ theme }) => theme.colors.secondaryBackground};

			svg {
				scale: 1.2;
			}
		}
	}
`;
