import handleApiRequest from "@/helpers/handleApiRequest";
import { ITaskCategory } from "@/types/task.types";
import { useEffect, useState } from "react";

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
