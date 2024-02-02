import React, { useContext } from "react";
import {
	TasksListItemCategoriesStyled,
	TasksListItemCategoriesWrapperStyled,
	TasksListItemCheckStyled,
	TasksListItemInfoStyled,
	TasksListItemRemoveStyled,
	TasksListItemStyled,
	TasksListItemTitleStyled,
	TasksListItemXPStyled,
} from "./styles/index.styles";
import { ITask } from "@/types/task.types";
import { UserContext } from "../../context/components/UserContext";
import { UIDataContext } from "../../context/components/UIDataContext";
import { useGetTaskCategories } from "./hooks/useGetTaskCategories";
import { getCategoryById } from "@/helpers/getCategoryById";
import { ModalContext } from "@/context/components/ModalContext";

const TaskListItem = ({ task }: { task: ITask }) => {
	const { user } = useContext(UserContext);
	const uiDataContext = useContext(UIDataContext);
	const modalContext = useContext(ModalContext);

	const { _id, name, description, xp, isCompleted } = task;

	const taskCategories = useGetTaskCategories(_id);

	const toggle = async () => {
		if (user) {
			uiDataContext.handleToggleTask(_id);
		}
	};

	const removeTask = () => {
		if (uiDataContext.currentCategoryInfo) {
			uiDataContext.handleRemoveTask({
				taskId: _id,
				categoryId: uiDataContext.currentCategoryInfo._id,
			});
		}
	};

	const handleChangeCategory = (categoryId: string) => {
		const newCategory = getCategoryById(categoryId, uiDataContext.categories);

		uiDataContext?.setCurrentCategoryInfo(newCategory);
	};

	if (!taskCategories) return null;

	return (
		<TasksListItemStyled>
			{user ? (
				<TasksListItemCheckStyled
					className={isCompleted ? "checked" : ""}
					onClick={toggle}
				>
					{isCompleted ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="m10.6 15.508l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM5.615 20q-.69 0-1.152-.462Q4 19.075 4 18.385V5.615q0-.69.463-1.152Q4.925 4 5.615 4h12.77q.69 0 1.152.463q.463.462.463 1.152v12.77q0 .69-.462 1.152q-.463.463-1.153.463z"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M5.615 20q-.69 0-1.152-.462Q4 19.075 4 18.385V5.615q0-.69.463-1.152Q4.925 4 5.615 4h12.77q.69 0 1.152.463q.463.462.463 1.152v12.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h12.77q.23 0 .423-.192q.192-.193.192-.423V5.615q0-.23-.192-.423Q18.615 5 18.385 5H5.615q-.23 0-.423.192Q5 5.385 5 5.615v12.77q0 .23.192.423q.193.192.423.192"
							/>
						</svg>
					)}
				</TasksListItemCheckStyled>
			) : null}

			<TasksListItemInfoStyled>
				<TasksListItemTitleStyled className={isCompleted ? "completed" : ""}>
					{name}
				</TasksListItemTitleStyled>

				<TasksListItemXPStyled>{xp} XP</TasksListItemXPStyled>

				<p>{description}</p>

				{taskCategories ? (
					<TasksListItemCategoriesWrapperStyled>
						{taskCategories.map(category => (
							<TasksListItemCategoriesStyled key={category._id}>
								<button
									onClick={() => handleChangeCategory(category._id)}
									disabled={
										category._id == uiDataContext.currentCategoryInfo?._id
									}
								>
									#{category.name}
								</button>
							</TasksListItemCategoriesStyled>
						))}
					</TasksListItemCategoriesWrapperStyled>
				) : null}
			</TasksListItemInfoStyled>

			{user ? (
				<TasksListItemRemoveStyled
					onClick={() => {
						modalContext.toggle(removeTask);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M7.615 20q-.67 0-1.143-.472Q6 19.056 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463zM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.23 0 .423-.192q.192-.193.192-.423zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
						/>
					</svg>
				</TasksListItemRemoveStyled>
			) : null}
		</TasksListItemStyled>
	);
};

export default TaskListItem;
