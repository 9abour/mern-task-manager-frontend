import React, { useEffect, useState } from "react";
import {
	TasksListItemCategoriesStyled,
	TasksListItemCategoriesWrapperStyled,
	TasksListItemInfoStyled,
	TasksListItemStyled,
	TasksListItemTitleStyled,
	TasksListItemXPStyled,
} from "./styles/index.styles";
import { ITask, ITaskCategory } from "@/types/task.types";
import handleApiRequest from "@/helpers/handleApiRequest";

const UserTaskItem = ({ task }: { task: ITask }) => {
	const [taskCategories, setTaskCategories] = useState<ITaskCategory[]>([]);

	const getListCategories = async (taskId: string) => {
		const categories: ITaskCategory[] = await handleApiRequest({
			url: `http://localhost:5000/taskCategories/${taskId}`,
			method: "GET",
		});

		setTaskCategories(categories);
	};

	useEffect(() => {
		getListCategories(task._id);
	}, []);

	const { _id, name, description, categories, isCompleted, xp } = task;

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
