import React, { useContext, useEffect, useState } from "react";
import {
	SidebarCategoriesListStyled,
	SidebarCategoriesWrapperStyled,
} from "./styles/sidebar.styles";
import SidebarCategoryCard from "./SidebarCategoryCard";
import AddCategory from "./AddCategory";
import { UIDataContext } from "../../context/UIDataContext";
import Loader from "../common/Loader";

const CategoriesList = () => {
	const uiData = useContext(UIDataContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!uiData?.categoryTasks.length) {
			setTimeout(() => {
				if (!uiData?.categoryTasks.length) {
					setIsLoading(false);
				}
			}, 2000);
		}
	}, [uiData?.categoryTasks]);

	return (
		<SidebarCategoriesWrapperStyled>
			<h2>Categories</h2>

			{uiData?.categories.length ? (
				<>
					<SidebarCategoriesListStyled>
						{uiData.categories.map(category => (
							<SidebarCategoryCard key={category.name} category={category} />
						))}
					</SidebarCategoriesListStyled>
					<AddCategory />
				</>
			) : isLoading ? (
				<Loader />
			) : (
				<AddCategory />
			)}
		</SidebarCategoriesWrapperStyled>
	);
};

export default CategoriesList;
