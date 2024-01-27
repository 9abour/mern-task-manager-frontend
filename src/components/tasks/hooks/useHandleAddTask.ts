import { UserContext } from "@/context/UserContext";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import Cookies from "js-cookie";
import { UIDataContext } from "@/context/UIDataContext";

export const useHandleAddTask = () => {
	const { slug } = useParams();
	const { user } = useContext(UserContext);
	const uiDataContext = useContext(UIDataContext);
	const token = Cookies.get("token");
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

		const newTask: any = {
			name: "",
			description: "",
			xp: 10,
			categories: [slug],
		};

		formData.forEach((value, key) => {
			newTask[key] = value.toString();
		});

		uiDataContext?.handleAddTask(newTask);

		formElement.reset();
	};

	return {
		handleSubmit,
	};
};
