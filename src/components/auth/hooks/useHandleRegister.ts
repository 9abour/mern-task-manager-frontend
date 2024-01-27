import handleApiRequest from "@/helpers/handleApiRequest";
import { FormEvent } from "react";

export const useHandleRegister = () => {
	const submit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!(e.target instanceof HTMLFormElement)) {
			return;
		}

		const formElement = e.target;
		const formData = new FormData(formElement);

		const newUser: any = {
			name: "",
			email: "",
			password: "",
		};

		formData.forEach((value, key) => {
			newUser[key] = value.toString();
		});

		try {
			await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/register`,
				method: "POST",
				dataPayload: newUser,
			});

			location.href = "/auth/login";
		} catch (error) {
			throw error;
		}
	};

	return {
		submit,
	};
};
