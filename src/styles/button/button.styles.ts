import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: bold;
	font-size: 20px;
	background-color: ${({ theme }) => theme.colors.primary};
	border: 1.5px solid ${({ theme }) => theme.colors.gray};
	border-radius: 6px;
	transition: 0.3s all;
	cursor: pointer;

	&:hover {
		box-shadow: ${({ theme }) => theme.colors.background} 0px 2px 8px 0px;
	}
`;
