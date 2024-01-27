import React from "react";
import {
	TasksListItemCategoriesStyled,
	TasksListItemCategoriesWrapperStyled,
	TasksListItemInfoStyled,
	TasksListItemStyled,
	TasksListItemTitleStyled,
	TasksListItemXPStyled,
} from "./styles/index.styles";
import { ITask } from "@/types/task.types";
import { useListCategories } from "./hooks/useListCategories";

const UserTaskItem = ({ task }: { task: ITask }) => {
	const { _id, name, description, isCompleted, xp } = task;

	const { taskCategories } = useListCategories(_id);

	return (
		<TasksListItemStyled>
			<TasksListItemInfoStyled>
				<TasksListItemTitleStyled className={isCompleted ? "completed" : ""}>
					{name}
				</TasksListItemTitleStyled>

				<TasksListItemXPStyled>{xp} XP</TasksListItemXPStyled>

				<p>{description}</p>

				{taskCategories ? (
					<TasksListItemCategoriesWrapperStyled>
						{taskCategories.map(category => (
							<TasksListItemCategoriesStyled
								key={category._id}
								href={`/category/${category._id}`}
							>
								#{category.name}
							</TasksListItemCategoriesStyled>
						))}
					</TasksListItemCategoriesWrapperStyled>
				) : null}
			</TasksListItemInfoStyled>
		</TasksListItemStyled>
	);
};

export default UserTaskItem;
