export interface ICategory {
	_id: string;
	name: string;
	description: string;
}

export interface ICategoryCount {
	tasksCount: number;
	completedCount: number;
	tasksXP: number;
}
