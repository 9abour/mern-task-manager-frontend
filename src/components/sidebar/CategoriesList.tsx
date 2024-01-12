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
				<Loader />
			)}
		</SidebarCategoriesWrapperStyled>
	);
};

export default CategoriesList;
