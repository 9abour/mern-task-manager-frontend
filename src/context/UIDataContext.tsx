"use client";

import { ICategory } from "@/types/category.types";
import { IChildren } from "@/types/index.types";
import { ITask } from "@/types/task.types";
import { createContext } from "react";
import { IUIDataContext } from "./types/uiData.types";
import { handleMakeSecureRequest } from "./services/handleMakeSecureRequest";
import { useCategories } from "./hooks/useCategories";
import { useCurrentCategory } from "./hooks/useCurrentCategory";

export const UIDataContext = createContext<IUIDataContext>({
	categoryTasks: [],
	categories: [],
	currentCategoryInfo: null,
	handleAddCategory: () => {},
	handleRemoveCategory: () => {},
	handleAddTask: () => {},
	handleRemoveTask: () => {},
	handleToggleTask: () => {},
	setCurrentCategoryInfo: () => {},
});

export const UIDataProvider = ({ children }: IChildren) => {
	const { categories, setCategories } = useCategories();

	const {
		categoryTasks,
		currentCategoryInfo,
		setCategoryTasks,
		setCurrentCategoryInfo,
	} = useCurrentCategory(categories);

	const handleAddCategory = async (newCategory: ICategory) => {
		const data: { category: ICategory } = await handleMakeSecureRequest(
			"categories",
			"POST",
			newCategory
		);

		const { category } = data;

		setCategories([...categories, category]);
	};

	const handleRemoveCategory = async (_id: string) => {
		await handleMakeSecureRequest(`categories/${_id}`, "DELETE");

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
		} = await handleMakeSecureRequest("tasks", "POST", newTaskData);

		const { task } = data;

		setCategoryTasks([...categoryTasks, task]);
	};

	const handleRemoveTask = async (dataPayload: {
		taskId: string;
		categoryId: string;
	}) => {
		await handleMakeSecureRequest(`tasks`, "DELETE", dataPayload);

		const filteredTasks = categoryTasks.filter(
			task => task._id !== dataPayload.taskId
		);

		setCategoryTasks(filteredTasks);
	};

	const handleToggleTask = async (_id: string) => {
		await handleMakeSecureRequest(`toggleTask/${_id}`, "POST");

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
