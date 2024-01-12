import { IUser } from "@/context/UserContext";
import handleApiRequest from "@/helpers/handleApiRequest";

export const getUser = async (token: string): Promise<IUser | null> => {
	if (token) {
		const user: IUser = await handleApiRequest({
			url: "http://localhost:5000/whoami",
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return user;
	}

	return null;
};
