import generateCategorySlug from "@/helpers/generateCategorySlug";
import handleApiRequest from "@/helpers/handleApiRequest";
import { Button } from "@/styles/button/button.styles";
import { CategoryCardStyled } from "@/styles/category/categoryCard.styles";
import { ICategory, ICategoryCount } from "@/types/category.types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryCard = ({ category }: { category: ICategory }) => {
	const [categoryTasksCount, setCategoryTasksCount] = useState<ICategoryCount>({
		tasksCount: 0,
		completedCount: 0,
		tasksXP: 0,
	});

	const { push } = useRouter();

	const { _id, name, description } = category;

	const slug = generateCategorySlug(name);

	const { tasksCount, completedCount, tasksXP } = categoryTasksCount;

	useEffect(() => {
		(async () => {
			const data: ICategoryCount = await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/categories/tasksCount/${_id}`,
				method: "GET",
			});

			setCategoryTasksCount(data);
		})();
	}, []);

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

				<Button onClick={() => push(`/category/${_id}`)}>
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
