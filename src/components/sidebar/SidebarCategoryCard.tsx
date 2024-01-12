import React, { useContext, useEffect, useState } from "react";
import { SidebarCategoryCardStyled } from "./styles/sidebar.styles";
import { useParams, useRouter } from "next/navigation";
import { ICategory, ICategoryCount } from "@/types/category.types";
import handleApiRequest from "@/helpers/handleApiRequest";
import { UIDataContext } from "../../context/UIDataContext";

const SidebarCategoryCard = ({ category }: { category: ICategory }) => {
	const [categoryTasksCount, setCategoryTasksCount] = useState<ICategoryCount>({
		tasksCount: 0,
		completedCount: 0,
		tasksXP: 0,
	});
	const uiData = useContext(UIDataContext);

	const { push } = useRouter();
	const { slug } = useParams();

	const { _id, name } = category;

	const { tasksCount, tasksXP } = categoryTasksCount;

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				const data: ICategoryCount = await handleApiRequest({
					url: `${process.env.NEXT_PUBLIC_API_URL}/categories/tasksCount/${_id}`,
					method: "GET",
				});

				setCategoryTasksCount(data);
			})();
		}, 1000);
	}, [uiData?.categoryTasks]);

	const isCategoryActive = _id === slug;

	return (
		<SidebarCategoryCardStyled
			onClick={() => push(`/category/${_id}`)}
			className={isCategoryActive ? "active" : ""}
		>
			<span
				className="remove__category"
				onClick={() => uiData?.handleRemoveCategory(_id)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="25"
					height="25"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"
					/>
				</svg>
			</span>
			<h4>{name}</h4>
			<span>Has {tasksCount} tasks</span>
			<br />
			<span>{tasksXP} XP</span>
		</SidebarCategoryCardStyled>
	);
};

export default SidebarCategoryCard;
