import { IUser } from "@/context/types/user.types";
import handleApiRequest from "@/helpers/handleApiRequest";

export const getUser = async (token: string): Promise<IUser | null> => {
	if (token) {
		const user: IUser = await handleApiRequest({
			url: `${process.env.NEXT_PUBLIC_API_URL}/whoami`,
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return user;
	}

	return null;
};
