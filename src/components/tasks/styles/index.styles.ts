import styled from "styled-components";

export const TasksWrapperStyled = styled.main`
	position: relative;
	width: calc(100% - 300px);
	height: 100vh;
	margin-left: auto;
	padding-top: 1rem;

	& > a {
		margin-left: 1rem;
		color: white;
	}

	@media (max-width: 650px) {
		width: calc(100% - 15px);
	}
`;

export const TasksListWrapperStyled = styled.ul`
	list-style: none;
	margin: 0 1rem 0 1rem;
	padding: 0;

	padding-bottom: 60px;

	& > :not(:first-child) {
		margin-top: 0.6rem;
	}
`;

export const TasksListItemStyled = styled.li`
	display: flex;
	align-items: center;

	min-height: 110px;

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

export const TasksListItemCheckStyled = styled.button`
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.gray};
	display: flex;
	cursor: pointer;
`;

export const TasksListItemRemoveStyled = styled.button`
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.gray};
	display: flex;
	margin-left: auto;
	cursor: pointer;

	:hover {
		color: #fc5703;
	}
`;

export const AddTaskFormStyled = styled.form`
	position: fixed;
	right: 0;
	bottom: 0;

	width: calc(100% - 300px);
	height: 50px;
	display: flex;
	align-items: center;

	border-top: 1px solid ${({ theme }) => theme.colors.gray};
	background-color: ${({ theme }) => theme.colors.secondaryBackground};

	@media (max-width: 650px) {
		width: calc(100% - 15px);
	}

	input:last-of-type {
		width: 50%;
	}
`;

export const AddTaskInputStyled = styled.input`
	width: 100%;
	height: 30px;

	background-color: transparent;
	color: white;
	outline: none;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	border-radius: 6px;

	margin: 0 0.5rem;
	padding: 0 1rem;
`;

export const AddTaskButtonStyled = styled.button`
	width: 30px;
	height: 30px;
	margin-right: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	border: none;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	cursor: pointer;

	svg {
		scale: 1.5;
		color: ${({ theme }) => theme.colors.textGray};
	}
`;
