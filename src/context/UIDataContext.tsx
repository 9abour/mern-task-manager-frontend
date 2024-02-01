"use client";

import { ICategory } from "@/types/category.types";
import { IChildren } from "@/types/index.types";
import { ITask } from "@/types/task.types";
import { createContext, useEffect, useState } from "react";
import { IUIDataContext } from "./types/uiData.types";
import { handleFetchUIData } from "./services/handleFetchUIData";

export const UIDataContext = createContext<IUIDataContext | null>(null);

export const UIDataProvider = ({ children }: IChildren) => {
	const [categoryTasks, setCategoryTasks] = useState<ITask[]>([]);
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [currentCategoryInfo, setCurrentCategoryInfo] =
		useState<ICategory | null>(null);

	console.log({ categories, currentCategoryInfo });

	useEffect(() => {
		const res: Promise<ICategory[]> = handleFetchUIData("categories", "GET");

		res.then(data => setCategories(data));
	}, []);

	useEffect(() => {
		if (!currentCategoryInfo && categories.length) {
			setCurrentCategoryInfo(categories[0]);
		}
	}, [categories]);

	useEffect(() => {
		if (currentCategoryInfo) {
			setCategoryTasks([]);

			(async () => {
				const tasksRes: {
					tasks: ITask[];
					category: ICategory;
				} = await handleFetchUIData(
					`categories/tasks/${currentCategoryInfo?._id}`,
					"GET"
				);

				setCategoryTasks(tasksRes.tasks);
			})();
		}
	}, [currentCategoryInfo]);

	const handleAddCategory = async (newCategory: ICategory) => {
		const data: { category: ICategory } = await handleFetchUIData(
			"categories",
			"POST",
			newCategory
		);

		const { category } = data;

		setCategories([...categories, category]);
	};

	const handleRemoveCategory = async (_id: string) => {
		await handleFetchUIData(`categories/${_id}`, "DELETE");

		// The current category should be checked if it is the same as the one you want to delete,
		// and if so, make the first one active.
		if (currentCategoryInfo?._id === _id) {
			setCurrentCategoryInfo(null);
		}

		const filteredCategories = categories.filter(
			category => category._id !== _id
		);

		setCategories(filteredCategories);
	};

	const handleAddTask = async (newTaskData: ITask) => {
		const data: {
			message: string;
			task: ITask;
		} = await handleFetchUIData("tasks", "POST", newTaskData);

		const { task } = data;

		setCategoryTasks([...categoryTasks, task]);
	};

	const handleRemoveTask = async (dataPayload: {
		taskId: string;
		categoryId: string;
	}) => {
		await handleFetchUIData(`tasks`, "DELETE", dataPayload);

		const filteredTasks = categoryTasks.filter(
			task => task._id !== dataPayload.taskId
		);

		setCategoryTasks(filteredTasks);
	};

	const handleToggleTask = async (_id: string) => {
		await handleFetchUIData(`toggleTask/${_id}`, "POST");

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
				setCurrentCategoryInfo,
			}}
		>
			{children}
		</UIDataContext.Provider>
	);
};
