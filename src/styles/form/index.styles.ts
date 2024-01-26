import styled from "styled-components";

export const FormWrapperStyled = styled.div`
	height: 100vh;
	display: grid;
	place-items: center;
	padding: 0 1rem;
`;

export const FormStyled = styled.form`
	max-width: 500px;
	width: 100%;

	& > div {
		width: 100%;
		margin-top: 0.5rem;
	}

	label {
		color: white;
	}

	input {
		margin-top: 0.2rem;
	}

	button {
		margin: 1rem auto;
		font-size: 16px;
		padding: 0.5rem 1rem;
		background: ${({ theme }) => theme.colors.gray};
		color: ${({ theme }) => theme.colors.textGray};

		&:hover {
			background: ${({ theme }) => theme.colors.primary};
			color: ${({ theme }) => theme.colors.secondaryBackground};
			border-color: ${({ theme }) => theme.colors.secondaryBackground};
		}
	}

	p {
		text-align: center;
		display: block;
		color: ${({ theme }) => theme.colors.gray};
		margin: 0.5rem;
	}

	a {
		text-align: center;
		margin: 0 0.5rem;
		padding: 0;
		color: white;
	}
`;
