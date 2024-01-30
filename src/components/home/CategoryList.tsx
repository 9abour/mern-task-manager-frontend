"use client";

import React, { useEffect, useState } from "react";
import {
	CategoryListItems,
	CategoryListItemsWrapper,
	CategoryListWrapper,
} from "./styles/CategoryList.styles";
import { CategoryTitle } from "@/styles/typography/title.styles";
import CategoryCard from "./CategoryCard";
import handleApiRequest from "@/helpers/handleApiRequest";
import { ICategory } from "@/types/category.types";
import Loader from "../common/Loader";
import { Button } from "@/styles/button/button.styles";
import { useRouter } from "next/navigation";

const CategoryList = () => {
	const [categoriesListData, setCategoriesListData] = useState<ICategory[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const { push } = useRouter();

	useEffect(() => {
		(async () => {
			const data: ICategory[] = await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/categories`,
				method: "GET",
			});

			setCategoriesListData(data);
		})();
	}, []);

	useEffect(() => {
		if (!categoriesListData.length) {
			setTimeout(() => {
				if (!categoriesListData.length) {
					setIsLoading(false);
				}
			}, 2000);
		}
	}, [categoriesListData]);

	return (
		<CategoryListWrapper>
			{categoriesListData.length ? (
				<CategoryListItemsWrapper>
					<CategoryTitle>Categories</CategoryTitle>

					<CategoryListItems>
						{categoriesListData.map(category => (
							<CategoryCard key={category._id} category={category} />
						))}
					</CategoryListItems>
				</CategoryListItemsWrapper>
			) : isLoading ? (
				<Loader />
			) : (
				<Button onClick={() => push("/category")}>Add category</Button>
			)}
		</CategoryListWrapper>
	);
};

export default CategoryList;
