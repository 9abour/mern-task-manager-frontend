import { ITaskCategory } from "@/types/task.types";
import { useEffect, useState } from "react";

export const useHandleLoadingTasks = (
	categoryTasks: ITaskCategory[] | undefined
) => {
	const [isLoading, setIsLoading] = useState(true);
	const [noTasksFound, setNoTasksFound] = useState(false);

	useEffect(() => {
		if (categoryTasks?.length) {
			setIsLoading(false);
			setNoTasksFound(false);
		} else {
			setIsLoading(true);
			setNoTasksFound(true);

			setTimeout(() => {
				setIsLoading(false);
			}, 3000);
		}
	}, [categoryTasks]);

	return {
		isLoading,
		noTasksFound,
	};
};
