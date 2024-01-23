import React, { useContext } from "react";
import { SidebarCategoryCardStyled } from "../styles/sidebar.styles";
import { useParams, useRouter } from "next/navigation";
import { ICategory } from "@/types/category.types";
import { UIDataContext } from "../../../context/UIDataContext";
import { useCategoryTasksCount } from "../hooks/useCategoryTasksCount";

const SidebarCategoryCard = ({ category }: { category: ICategory }) => {
	const uiData = useContext(UIDataContext);

	const { push } = useRouter();
	const { slug } = useParams();

	const { _id, name } = category;

	const categoryTasksCount = useCategoryTasksCount(_id);

	const isCategoryActive = _id === slug;

	return categoryTasksCount ? (
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
			<span>Has {categoryTasksCount.tasksCount} tasks</span>
			<br />
			<span>{categoryTasksCount.tasksXP} XP</span>
		</SidebarCategoryCardStyled>
	) : null;
};

export default SidebarCategoryCard;
