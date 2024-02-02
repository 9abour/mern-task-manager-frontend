import { ICategory } from "@/types/category.types";
import { ITask } from "@/types/task.types";
import { useEffect, useState } from "react";
import handleApiRequest from "@/helpers/handleApiRequest";

/**
 * Custom hook to manage current category and its tasks.
 *
 * @param {ICategory[]} categories - array of category objects
 * @return {Object} object containing categoryTasks, currentCategoryInfo, setCategoryTasks, setCurrentCategoryInfo
 */

export const useCurrentCategory = (categories: ICategory[]) => {
	const [categoryTasks, setCategoryTasks] = useState<ITask[]>([]);
	const [currentCategoryInfo, setCurrentCategoryInfo] =
		useState<ICategory | null>(null);

	useEffect(() => {
		if (!currentCategoryInfo && categories && categories.length) {
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
				} = await handleApiRequest({
					url: `${process.env.NEXT_PUBLIC_API_URL}/categories/tasks/${currentCategoryInfo?._id}`,
					method: "GET",
				});

				if (tasksRes) {
					setCategoryTasks(tasksRes.tasks);
				}
			})();
		}
	}, [currentCategoryInfo]);

	return {
		categoryTasks,
		currentCategoryInfo,
		setCategoryTasks,
		setCurrentCategoryInfo,
	};
};
