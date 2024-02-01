import React, { useContext, useEffect, useState } from "react";
import {
	SidebarCategoriesListStyled,
	SidebarCategoriesWrapperStyled,
} from "../styles/sidebar.styles";
import SidebarCategoryCard from "./SidebarCategoryCard";
import AddCategory from "./AddCategory";
import { UIDataContext } from "../../../context/components/UIDataContext";
import { ICategory } from "@/types/category.types";

const CategoriesList = () => {
	const uiData = useContext(UIDataContext);

	const [categories, setCategories] = useState<ICategory[] | undefined>(
		uiData ? uiData.categories : undefined
	);

	useEffect(() => {
		if (uiData) {
			setCategories(uiData.categories);
		}
	}, [uiData.categories]);

	return (
		<SidebarCategoriesWrapperStyled>
			<h2>Categories</h2>

			<>
				{categories ? (
					<SidebarCategoriesListStyled>
						{categories.map(category => (
							<SidebarCategoryCard key={category.name} category={category} />
						))}
					</SidebarCategoriesListStyled>
				) : null}
				<AddCategory />
			</>
		</SidebarCategoriesWrapperStyled>
	);
};

export default CategoriesList;
