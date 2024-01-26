import handleApiRequest from "@/helpers/handleApiRequest";
import { ITask } from "@/types/task.types";

export const getUserTasks = async (_id: string): Promise<ITask[]> => {
	const data: { tasks: ITask[] } = await handleApiRequest({
		url: `${process.env.NEXT_PUBLIC_API_URL}/users/tasks/${_id}`,
		method: "GET",
	});

	const tasks = data.tasks;

	return tasks;
};
