import { ITaskCategory } from "@/types/task.types";
import { useEffect, useState } from "react";

export const useHandleLoadingTasks = (
	categoryTasks: ITaskCategory[] | undefined
) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!categoryTasks?.length) {
			setTimeout(() => {
				if (!categoryTasks?.length) {
					setIsLoading(false);
				}
			}, 1000);
		}
	}, [categoryTasks]);

	return {
		isLoading,
	};
};
