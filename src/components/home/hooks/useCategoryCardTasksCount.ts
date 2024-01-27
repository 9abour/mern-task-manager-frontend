import handleApiRequest from "@/helpers/handleApiRequest";
import { ICategoryCount } from "@/types/category.types";
import { useEffect, useState } from "react";

export const useCategoryCardTasksCount = (categoryId: string) => {
	const [categoryTasksCount, setCategoryTasksCount] = useState<ICategoryCount>({
		tasksCount: 0,
		completedCount: 0,
		tasksXP: 0,
	});

	useEffect(() => {
		(async () => {
			const data: ICategoryCount = await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/categories/tasksCount/${categoryId}`,
				method: "GET",
			});

			setCategoryTasksCount(data);
		})();
	}, []);

	return {
		categoryTasksCount,
	};
};
