import { Button } from "@/styles/button/button.styles";
import { CategoryCardStyled } from "@/styles/category/categoryCard.styles";
import { ICategory } from "@/types/category.types";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useCategoryCardTasksCount } from "./hooks/useCategoryCardTasksCount";
import { UIDataContext } from "@/context/UIDataContext";

const CategoryCard = ({ category }: { category: ICategory }) => {
	const { push } = useRouter();

	const uiData = useContext(UIDataContext);

	const { _id, name, description } = category;

	const { categoryTasksCount } = useCategoryCardTasksCount(_id);

	const { tasksCount, completedCount, tasksXP } = categoryTasksCount;

	return category ? (
		<CategoryCardStyled>
			<div>
				<h3>{name}</h3>
				<span>Has {tasksCount} tasks</span>
			</div>

			<p>{description}</p>

			<div>
				<div>
					<span>{tasksXP} XP</span>
					<span>
						Completed {completedCount} of {tasksCount}
					</span>
				</div>

				<Button
					onClick={() => {
						push(`/category`);
						uiData?.setCurrentCategoryInfo(category);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
						/>
					</svg>
				</Button>
			</div>
		</CategoryCardStyled>
	) : null;
};

export default CategoryCard;
