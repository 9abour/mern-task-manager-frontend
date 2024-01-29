import React, { useContext, useEffect, useState } from "react";
import {
	SidebarCategoriesListStyled,
	SidebarCategoriesWrapperStyled,
} from "../styles/sidebar.styles";
import SidebarCategoryCard from "./SidebarCategoryCard";
import AddCategory from "./AddCategory";
import { UIDataContext } from "../../../context/UIDataContext";
import { ICategory } from "@/types/category.types";

const CategoriesList = () => {
	const uiData = useContext(UIDataContext);

	const [categories, setCategories] = useState<ICategory[]>(
		uiData ? uiData.categories : []
	);

	useEffect(() => {
		if (uiData) {
			setCategories(uiData.categories);
		}
	}, [uiData?.categories]);

	return (
		<SidebarCategoriesWrapperStyled>
			<h2>Categories</h2>

			<>
				<SidebarCategoriesListStyled>
					{categories.map(category => (
						<SidebarCategoryCard key={category.name} category={category} />
					))}
				</SidebarCategoriesListStyled>
				<AddCategory />
			</>
		</SidebarCategoriesWrapperStyled>
	);
};

export default CategoriesList;
