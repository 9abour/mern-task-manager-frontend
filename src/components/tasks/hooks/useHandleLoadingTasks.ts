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
			setTimeout(() => {
				setIsLoading(false);
			}, 3000);
		}
	}, [categoryTasks]);

	return {
		isLoading,
	};
};
