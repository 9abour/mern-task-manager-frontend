import Cookies from "js-cookie";
import handleApiRequest from "@/helpers/handleApiRequest";

export const handleMakeSecureRequest = async <T>(
	url: string,
	method: string,
	dataPayload?: T
): Promise<any> => {
	const token = Cookies.get("token");

	if (!token) return;

	const data = await handleApiRequest({
		url: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
		method,
		dataPayload,
		headers: {
			Authorization: `Bearer ${JSON.parse(token)}`,
		},
	});

	return data;
};
