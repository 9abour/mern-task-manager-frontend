import styled from "styled-components";

export const PrimaryInputStyled = styled.input`
	width: calc(100% - 32px);
	height: 40px;

	color: white;
	outline: none;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	border-radius: 6px;
	padding: 0 1rem;
`;
