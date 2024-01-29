import { ICategory } from "@/types/category.types";
import { ITask } from "@/types/task.types";

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
	setCurrentCategoryInfo: (category: ICategory) => void;
}

export interface IUser {
	_id: string;
	name: string;
	email: string;
	completedTasks: string[];
}

export interface IUserContext {
	user: IUser | null;
}
