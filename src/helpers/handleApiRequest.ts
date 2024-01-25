import axios from "axios";
import { toast } from "sonner";

const handleApiRequest = async <T>({
	url,
	method,
	dataPayload,
	headers,
}: {
	url: string;
	method: string;
	dataPayload?: any;
	headers?: any;
}): Promise<T> => {
	try {
		const { data } = await axios(url, {
			method,
			headers,
			data: dataPayload,
		});

		const { message } = data;

		if (message) {
			toast.success(message);
		}

		return data;
	} catch (error: any) {
		if (error.response.data.errors && error.response.data.errors.length) {
			error.response.data.errors.map((error: any) =>
				toast.error(error.message)
			);
		}

		throw error;
	}
};

export default handleApiRequest;
