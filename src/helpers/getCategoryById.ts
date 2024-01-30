import { ICategory } from "@/types/category.types";
import { toast } from "sonner";

export const getCategoryById = (
	_id: string,
	categories: ICategory[]
): ICategory => {
	const foundCategory = categories.find(cat => cat._id == _id);

	if (!foundCategory) {
		toast.error(`The category not found`);

		throw new Error(`Category with ID ${_id} not found`);
	}

	return foundCategory;
};
