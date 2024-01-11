export interface ITask {
	_id: string;
	name: string;
	description: string;
	xp: number;
	isCompleted: boolean;
	categories: string[];
}

export interface ITaskCategory {
	_id: string;
	name: string;
}
