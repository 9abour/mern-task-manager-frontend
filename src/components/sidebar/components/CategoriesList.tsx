import React, { useContext, useEffect, useRef, useState } from "react";
import {
	SidebarCategoriesListStyled,
	SidebarCategoriesWrapperStyled,
} from "../styles/sidebar.styles";
import SidebarCategoryCard from "./SidebarCategoryCard";
import AddCategory from "./AddCategory";
import { UIDataContext } from "../../../context/UIDataContext";

const CategoriesList = () => {
	const uiData = useContext(UIDataContext);

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
			) : (
				<AddCategory />
			)}
		</SidebarCategoriesWrapperStyled>
	);
};

export default CategoriesList;
