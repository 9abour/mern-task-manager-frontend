import handleApiRequest from "@/helpers/handleApiRequest";
import { FormEvent } from "react";
import Cookies from "js-cookie";

export const useHandleLogin = (email: string, password: string) => {
	const submit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const token = await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/singin`,
				method: "POST",
				dataPayload: {
					email,
					password,
				},
			});

			Cookies.set("token", JSON.stringify(token));
			location.href = "/";
		} catch (error) {
			console.error(error);
		}
	};

	return {
		submit,
	};
};
