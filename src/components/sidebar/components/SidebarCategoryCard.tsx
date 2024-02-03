import React, { useContext, useRef } from "react";
import { SidebarCategoryCardStyled } from "../styles/sidebar.styles";
import { ICategory } from "@/types/category.types";
import { UIDataContext } from "../../../context/components/UIDataContext";
import { useCategoryTasksCount } from "../hooks/useCategoryTasksCount";
import { ModalContext } from "@/context/components/ModalContext";
import { UserContext } from "@/context/components/UserContext";
import { useRouter } from "next/navigation";

const SidebarCategoryCard = ({ category }: { category: ICategory }) => {
	const removeCategoryIconRef = useRef(null);
	const uiData = useContext(UIDataContext);
	const modalContext = useContext(ModalContext);
	const { user } = useContext(UserContext);
	const { push } = useRouter();

	const { _id, name } = category;

	const categoryTasksCount = useCategoryTasksCount(_id);

	const isCategoryActive = _id === uiData.currentCategoryInfo?._id;

	const handleRemoveCategory = () => {
		if (!user) {
			return push("/auth/login");
		}
		modalContext.toggle(() => uiData.handleRemoveCategory(_id));
	};

	return categoryTasksCount ? (
		<SidebarCategoryCardStyled
			onClick={() => uiData.setCurrentCategoryInfo(category)}
			className={isCategoryActive ? "active" : ""}
		>
			<span
				className="remove__category"
				ref={removeCategoryIconRef}
				onClick={e => {
					e.stopPropagation();
					handleRemoveCategory();
				}}
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
