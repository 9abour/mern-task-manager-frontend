import handleApiRequest from "@/helpers/handleApiRequest";

export const getUserXP = async (_id: string): Promise<number> => {
	const data: { totalUserXP: number } = await handleApiRequest({
		url: `${process.env.NEXT_PUBLIC_API_URL}/users/xp/${_id}`,
		method: "GET",
	});

	const totalUserXP = data.totalUserXP;

	return totalUserXP;
};
