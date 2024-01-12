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
import { useParams, useRouter } from "next/navigation";
import { UserContext } from "../../context/UserContext";
import Cookies from "js-cookie";
import { UIDataContext } from "../../context/UIDataContext";

const TaskList = () => {
	const { slug } = useParams();
	const { user } = useContext(UserContext);
	const uiDataContext = useContext(UIDataContext);
	const categoryTasks = uiDataContext?.categoryTasks;
	const categoryInfo = uiDataContext?.currentCategoryInfo;

	const token = Cookies.get("token");

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!user || !token) {
			router.push("/auth/login");
			return;
		}

		if (!(e.target instanceof HTMLFormElement)) {
			return;
		}

		const formData = new FormData(e.target);
		const formElement = e.target;

		const newTask: any = {
			name: "",
			description: "",
			xp: 10,
			categories: [slug],
		};

		formData.forEach((value, key) => {
			newTask[key] = value.toString();
		});

		uiDataContext?.handleAddTask(newTask);

		formElement.reset();
	};

	return (
		<TasksWrapperStyled>
			<Link href="/">/Home</Link>

			{categoryTasks ? (
				<>
					<TasksTitle>{categoryInfo?.name + " Tasks"}</TasksTitle>
					<TasksListWrapperStyled>
						{categoryTasks.map(task => (
							<TaskListItem key={task.name} task={task} />
						))}
					</TasksListWrapperStyled>
				</>
			) : (
				<h2>Loading...</h2>
			)}
			<AddTaskFormStyled onSubmit={handleSubmit}>
				<AddTaskInputStyled
					name="name"
					type="text"
					placeholder="Add task name"
					required
				/>
				<AddTaskInputStyled
					name="description"
					type="text"
					placeholder="Add task description"
					required
				/>
				<AddTaskInputStyled
					name="xp"
					type="number"
					placeholder="Add task XP"
					required
				/>
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
