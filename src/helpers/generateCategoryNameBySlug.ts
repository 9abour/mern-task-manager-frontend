const generateCategoryNameBySlug = (slug: string | string[]): string => {
	const categoryName = slug.toString().split("-").join(" ");

	return categoryName;
};

export default generateCategoryNameBySlug;
