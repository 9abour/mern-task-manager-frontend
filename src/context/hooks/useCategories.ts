import handleApiRequest from "@/helpers/handleApiRequest";
import { ICategory } from "@/types/category.types";
import { useEffect, useState } from "react";

export const useCategories = () => {
	const [categories, setCategories] = useState<ICategory[]>([]);

	useEffect(() => {
		(async () => {
			const data: ICategory[] = await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/categories`,
				method: "GET",
			});

			setCategories(data);
		})();
	}, []);

	return {
		categories,
		setCategories,
	};
};
