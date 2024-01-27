import { UIDataContext } from "@/context/UIDataContext";
import { useContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { IUser } from "@/context/types/uiData.types";

type IToggleSidebarForm = (value: boolean) => void;

export const useHandleAddCategory = (
	user: IUser | null,
	setIsFormOpen: IToggleSidebarForm
) => {
	const token = Cookies.get("token");
	const uiDataContext = useContext(UIDataContext);
	const router = useRouter();

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!user || !token) {
			router.push("/auth/login");
			return;
		}

		if (!(e.target instanceof HTMLFormElement)) {
			return;
		}

		const formData = new FormData(e.target);
		const formElement = e.target;

		const newCategory: any = {
			name: "",
			description: "",
		};

		formData.forEach((value, key) => {
			newCategory[key] = value.toString();
		});

		uiDataContext?.handleAddCategory(newCategory);

		setIsFormOpen(false);

		formElement.reset();
	};

	return {
		submit,
	};
};
