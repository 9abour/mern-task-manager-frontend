"use client";

import handleApiRequest from "@/helpers/handleApiRequest";
import { ICategory } from "@/types/category.types";
import { IChildren } from "@/types/index.types";
import { ITask } from "@/types/task.types";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";

export interface IUIDataContext {
	categories: ICategory[];
	categoryTasks: ITask[];
	currentCategoryInfo: ICategory | null;
	handleAddCategory: (category: ICategory) => void;
	handleRemoveCategory: (_id: string) => void;
	handleAddTask: (newTask: ITask) => void;
	handleRemoveTask: (dataPayload: {
		taskId: string;
		categoryId: string;
	}) => void;
	handleToggleTask: (_id: string) => void;
}

export const UIDataContext = createContext<IUIDataContext | null>(null);

export const UIDataProvider = ({ children }: IChildren) => {
	const [categoryTasks, setCategoryTasks] = useState<ITask[]>([]);
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [currentCategoryInfo, setCurrentCategoryInfo] =
		useState<ICategory | null>(null);

	const token = Cookies.get("token");
	const { slug } = useParams();

	useEffect(() => {
		if (slug && slug !== "add") {
			(async () => {
				const tasksRes: {
					tasks: ITask[];
					category: ICategory;
				} = await handleApiRequest({
					url: `${process.env.NEXT_PUBLIC_API_URL}/categories/tasks/${slug}`,
					method: "GET",
				});

				const categories: ICategory[] = await handleApiRequest({
					url: `${process.env.NEXT_PUBLIC_API_URL}/categories`,
					method: "GET",
				});

				setCategoryTasks(tasksRes.tasks);
				setCurrentCategoryInfo(tasksRes.category);
				setCategories(categories);
			})();
		}
	}, [slug]);

	const handleAddCategory = async (newCategory: ICategory) => {
		try {
			if (!token) {
				return;
			}
			const data: { category: ICategory; msg: string } = await handleApiRequest(
				{
					url: `${process.env.NEXT_PUBLIC_API_URL}/categories`,
					method: "POST",
					dataPayload: newCategory,
					headers: {
						Authorization: `Bearer ${JSON.parse(token)}`,
					},
				}
			);
			const { category } = data;

			setCategories([...categories, category]);
		} catch (error: any) {
			console.log(error.response.data.errors);
		}
	};
	const handleRemoveCategory = async (_id: string) => {
		try {
			if (!token) {
				return;
			}
			await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/categories/${_id}`,
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			});

			const filteredCategories = categories.filter(
				category => category._id !== _id
			);

			setCategories(filteredCategories);
		} catch (error: any) {
			console.log(error.response.data.errors);
		}
	};

	const handleAddTask = async (newTaskData: ITask) => {
		try {
			if (!token) {
				return;
			}

			const data: {
				msg: string;
				task: ITask;
			} = await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/tasks`,
				method: "POST",
				dataPayload: newTaskData,
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			});

			setCategoryTasks([...categoryTasks, data.task]);
		} catch (error) {}
	};

	const handleRemoveTask = async (dataPayload: {
		taskId: string;
		categoryId: string;
	}) => {
		try {
			if (!token) {
				return;
			}
			await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/tasks`,
				method: "DELETE",
				dataPayload: dataPayload,
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			});

			const filteredTasks = categoryTasks.filter(
				task => task._id !== dataPayload.taskId
			);

			setCategoryTasks(filteredTasks);
		} catch (error: any) {
			console.log(error.response.data.errors);
		}
	};

	const handleToggleTask = async (_id: string) => {
		if (token) {
			await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/toggleTask/${_id}`,
				method: "POST",
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			});

			const updateCategoryTasks: ITask[] = categoryTasks.map(task => {
				if (task._id === _id) {
					return {
						...task,
						isCompleted: !task.isCompleted,
					};
				} else {
					return task;
				}
			});

			setCategoryTasks(updateCategoryTasks);
		}
	};

	return (
		<UIDataContext.Provider
			value={{
				categoryTasks,
				categories,
				currentCategoryInfo,
				handleAddCategory,
				handleRemoveCategory,
				handleAddTask,
				handleRemoveTask,
				handleToggleTask,
			}}
		>
			{children}
		</UIDataContext.Provider>
	);
};
