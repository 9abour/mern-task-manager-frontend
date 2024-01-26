import { ITask } from "@/types/task.types";
import { useEffect, useState } from "react";
import { getUserTasks } from "@/services/user/getUserTasks";
import { getUserXP } from "@/services/user/getUserXP";
import { IUser } from "@/context/UserContext";

/**
 * Custom hook to handle user profile information.
 *
 * @param {IUser | null} user - The user object or null if not logged in
 * @return {{ userCompletedTasks: ITask[], userXP: number, isLoading: boolean }} An object containing user profile information
 */

export const useHandleInfoUserProfile = (user: IUser | null) => {
	const [userCompletedTasks, setUserCompletedTasks] = useState<ITask[]>([]);
	const [userXP, setUserXP] = useState<number>(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (user) {
			Promise.all(
				[getUserTasks, getUserXP].map(async fn => {
					const result = await fn(user._id);
					if (Array.isArray(result)) {
						setUserCompletedTasks(result);
					} else {
						setUserXP(result);
					}
				})
			);

			setIsLoading(false);
		}
	}, [user]);

	return {
		userCompletedTasks,
		userXP,
		isLoading,
	};
};
