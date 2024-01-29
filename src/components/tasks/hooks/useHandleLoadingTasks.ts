import { ITaskCategory } from "@/types/task.types";
import { useEffect, useState } from "react";

export const useHandleLoadingTasks = (
	categoryTasks: ITaskCategory[] | undefined
) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (categoryTasks?.length) {
			setIsLoading(false);
		} else {
			setIsLoading(true);
		}
	}, [categoryTasks]);

	return {
		isLoading,
	};
};
