export interface IUser {
	_id: string;
	name: string;
	email: string;
	completedTasks: string[];
}

export interface IUserContext {
	user: IUser | null;
}
