import styled from "styled-components";

export const SidebarStyled = styled.aside`
	position: fixed;
	width: 300px;
	height: 100vh;
	top: 0;
	overflow-y: scroll;
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	transition: 0.5s all;
	z-index: 9;

	@media (max-width: 650px) {
		left: -285px;

		&:hover {
			left: 0;
		}
	}
`;

export const SidebarProfileStyled = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
	padding: 0 1rem;

	gap: 0.5rem;

	:first-child {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		h4 {
			font-size: 15px;
			font-weight: 500;
			margin: 0;
			color: ${({ theme }) => theme.colors.textGray};
		}

		img {
			border-radius: 50%;
		}
	}

	button {
		margin-left: auto;
		svg {
			scale: 0.7;
			color: ${({ theme }) => theme.colors.background};
		}
	}
`;

export const SidebarSingInWrapperStyled = styled.div`
	padding: 1rem 0 0 1rem;
	button {
		font-size: 16px;
		color: ${({ theme }) => theme.colors.background};
	}
`;

export const SidebarCategoriesWrapperStyled = styled.div`
	padding: 1rem;

	h2 {
		color: white;
		font-weight: 500;
		margin: 1rem 0;
	}
`;

export const SidebarCategoriesListStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 6px;

	margin-top: 1rem;
	margin-bottom: 0.5rem;
`;

export const SidebarCategoryCardStyled = styled.button`
	position: relative;
	width: 100%;
	height: 80px;

	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	box-shadow: ${({ theme }) => theme.colors.background} 0px 2px 8px 0px;
	background-color: ${({ theme }) => theme.colors.background};
	padding: 1rem;
	text-align: center;
	transition: 0.3s all;
	cursor: pointer;

	&.active {
		background-color: ${({ theme }) => theme.colors.primary};
		h4,
		span {
			color: ${({ theme }) => theme.colors.background};
		}
	}

	&:hover {
		border-color: white;

		.remove__category {
			display: block;
		}
	}

	h4 {
		color: white;
		margin: 0;
		font-size: 16px;
	}

	span {
		font-size: 10px;
		color: ${({ theme }) => theme.colors.textColor};
	}

	.remove__category {
		position: absolute;
		width: 25px;
		height: 25px;
		right: -0.5rem;
		top: -0.5rem;

		display: flex;
		justify-content: center;
		align-items: center;
		display: none;

		background-color: ${({ theme }) => theme.colors.textColor};
		color: ${({ theme }) => theme.colors.background};
		border: none;
		border-radius: 50%;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;

		z-index: 1;

		&:hover {
			background-color: #fc5703;
		}
	}
`;

export const SidebarAddCategoryStyled = styled.button`
	width: 100%;
	height: 80px;

	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	box-shadow: ${({ theme }) => theme.colors.background} 0px 2px 8px 0px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.textColor};
	padding: 1rem;
	text-align: center;
	transition: 0.3s all;
	cursor: pointer;

	svg {
		scale: 1.5;
		transition: 0.3s all;
	}

	&.cancel {
		svg {
			rotate: 45deg;
			transition: 0.3s all;
		}
	}

	&:hover {
		border-color: white;
	}

	h4 {
		color: white;
		margin: 0;
		font-size: 16px;
	}

	span {
		font-size: 10px;
		color: ${({ theme }) => theme.colors.textColor};
	}
`;

export const AddCategoryFormStyled = styled.form`
	margin-top: 2rem;
	h4 {
		text-align: center;
		margin-bottom: 0.5rem;
		color: ${({ theme }) => theme.colors.textGray};
	}

	input {
		width: 232px;
		margin: 0;
		background-color: ${({ theme }) => theme.colors.background};
		display: block;
		margin-bottom: 0.5rem;
	}

	button {
		width: 100%;
		height: 30px;

		border-radius: 8px;
		border: 1px solid ${({ theme }) => theme.colors.gray};
		box-shadow: ${({ theme }) => theme.colors.background} 0px 2px 8px 0px;
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.background};
		font-weight: bold;
		text-align: center;
		transition: 0.3s all;
		margin-bottom: 1.5rem;
		cursor: pointer;
	}
`;
