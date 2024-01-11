import styled from "styled-components";

export const CategoryTitle = styled.h2`
	text-align: center;
	font-size: 40px;
	color: ${({ theme }) => theme.colors.primary};
	margin: 1rem 0;
`;

export const TasksTitle = styled.h2`
	text-align: start;
	font-size: 40px;
	text-transform: capitalize;
	padding: 1rem;
	color: ${({ theme }) => theme.colors.primary};
`;
