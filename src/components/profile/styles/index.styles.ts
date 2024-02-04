import styled from "styled-components";

export const UserProfileWrapperStyled = styled.section`
	height: 100vh;
	display: grid;
	place-items: center;
    padding: 0 2rem;
    

	& > div {
		max-width: 500px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		svg {
			border-radius: 50%;
			box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
				rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
				rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
			background-color: ${({ theme }) => theme.colors.secondaryBackground};
			color: ${({ theme }) => theme.colors.primary};
			border: 1px solid ${({ theme }) => theme.colors.gray};
			padding: 1rem;
		}

		h2 {
            text-align: center;
			color: ${({ theme }) => theme.colors.textGray};
		}

		p {
			color: ${({ theme }) => theme.colors.textGray};
		}

		span {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
	button {
		color: ${({ theme }) => theme.colors.gray};
		background-color: transparent;
		border: none;
		cursor: pointer;
		font-size: 16px;
	}
`;

export const TasksListItemStyled = styled.li`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 1rem;
	border-radius: 6px;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	box-shadow: ${({ theme }) => theme.colors.background} 0px 2px 8px 0px;
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;

export const TasksListItemInfoStyled = styled.div`
	p {
		font-size: 16px;
		color: white;
	}
`;

export const TasksListItemTitleStyled = styled.h3`
	color: white;
	font-size: 16px;

	&.completed {
		text-decoration: line-through;
	}
`;

export const TasksListItemXPStyled = styled.span`
	font-size: 13px;
	color: ${({ theme }) => theme.colors.textGray};
`;

export const TasksListItemCategoriesWrapperStyled = styled.div``;

export const TasksListItemCategoriesStyled = styled.div`
	display: inline-block;

	a {
		background-color: transparent;
		border: none;
		font-size: 14px;
		margin-right: 0.5rem;
		padding: 0;
		color: ${({ theme }) => theme.colors.background};
		cursor: pointer;

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
