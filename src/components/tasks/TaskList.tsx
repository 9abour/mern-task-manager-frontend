import React, { useContext } from "react";
import {
	AddTaskButtonStyled,
	AddTaskInputStyled,
	AddTaskFormStyled,
	TasksListWrapperStyled,
	TasksWrapperStyled,
} from "./styles/index.styles";
import TaskListItem from "./TaskListItem";
import { TasksTitle } from "@/styles/typography/title.styles";
import Link from "next/link";
import { UIDataContext } from "../../context/components/UIDataContext";
import Loader from "../common/Loader";
import { useHandleAddTask } from "./hooks/useHandleAddTask";
import { useHandleLoadingTasks } from "./hooks/useHandleLoadingTasks";

const TaskList = () => {
	const uiDataContext = useContext(UIDataContext);
	const categoryTasks = uiDataContext.categoryTasks;
	const currentCategory = uiDataContext.currentCategoryInfo;

	const { handleSubmit } = useHandleAddTask(currentCategory?._id);
	const { isLoading, noTasksFound } = useHandleLoadingTasks(categoryTasks);

	return (
		<TasksWrapperStyled>
			<Link href="/">/Home</Link>

			{!isLoading ? (
				<>
					{currentCategory ? (
						<TasksTitle>{currentCategory.name + " Tasks"}</TasksTitle>
					) : (
						<TasksTitle>No Categories</TasksTitle>
					)}

					{categoryTasks.length ? (
						<TasksListWrapperStyled>
							{categoryTasks.map(task => (
								<TaskListItem key={task.name} task={task} />
							))}
						</TasksListWrapperStyled>
					) : null}

					{noTasksFound && <p>No tasks to show.</p>}
				</>
			) : (
				<Loader />
			)}

			<AddTaskFormStyled onSubmit={handleSubmit}>
				<AddTaskInputStyled
					name="name"
					type="text"
					placeholder="Name"
					required
				/>
				<AddTaskInputStyled
					name="description"
					type="text"
					placeholder="Description"
					required
				/>
				<AddTaskInputStyled name="xp" type="number" placeholder="XP" required />
				<AddTaskButtonStyled type="submit">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
					>
						<path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
					</svg>
				</AddTaskButtonStyled>
			</AddTaskFormStyled>
		</TasksWrapperStyled>
	);
};

export default TaskList;
