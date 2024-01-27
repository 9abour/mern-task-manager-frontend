import handleApiRequest from "@/helpers/handleApiRequest";
import { ITaskCategory } from "@/types/task.types";
import { useEffect, useState } from "react";

export const useListCategories = (taskId: string) => {
	const [taskCategories, setTaskCategories] = useState<ITaskCategory[]>([]);

	const getListCategories = async (taskId: string) => {
		const categories: ITaskCategory[] = await handleApiRequest({
			url: `${process.env.NEXT_PUBLIC_API_URL}/taskCategories/${taskId}`,
			method: "GET",
		});

		setTaskCategories(categories);
	};

	useEffect(() => {
		getListCategories(taskId);
	}, []);

	return {
		taskCategories,
	};
};
