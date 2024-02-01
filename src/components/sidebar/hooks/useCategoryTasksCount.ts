import { UIDataContext } from "@/context/UIDataContext";
import handleApiRequest from "@/helpers/handleApiRequest";
import { ICategoryCount } from "@/types/category.types";
import { useContext, useEffect, useState } from "react";

/**
 * Retrieves the count of tasks for a specific category from the API and updates the state with the result.
 *
 * @param {string} _id - The ID of the category for which to retrieve the tasks count.
 * @return {ICategoryCount | null} The count of tasks for the specified category, or null if the count is not available.
 */

export const useCategoryTasksCount = (_id: string): ICategoryCount | null => {
	const [categoryTasksCount, setCategoryTasksCount] =
		useState<ICategoryCount | null>(null);

	const uiData = useContext(UIDataContext);

	useEffect(() => {
		(async () => {
			const data: ICategoryCount = await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/categories/tasksCount/${_id}`,
				method: "GET",
			});

			setCategoryTasksCount(data);
		})();
	}, [uiData.categoryTasks]);

	return categoryTasksCount;
};
