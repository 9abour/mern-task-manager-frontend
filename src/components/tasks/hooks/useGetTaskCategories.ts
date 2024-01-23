import handleApiRequest from "@/helpers/handleApiRequest";
import { ITaskCategory } from "@/types/task.types";
import { useEffect, useState } from "react";

/**
 * Retrieves task categories from the API based on the task ID.
 *
 * @param {string} taskId - The ID of the task
 * @return {ITaskCategory[] | null} The list of task categories, or null if not available
 */

export const useGetTaskCategories = (
	taskId: string
): ITaskCategory[] | null => {
	const [taskCategories, setTaskCategories] = useState<ITaskCategory[] | null>(
		null
	);

	useEffect(() => {
		(async () => {
			const categories: ITaskCategory[] = await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/taskCategories/${taskId}`,
				method: "GET",
			});

			setTaskCategories(categories);
		})();
	}, []);

	return taskCategories;
};
