const generateCategorySlug = (name: string): string => {
	const slug = name.split(" ").join("-").toLowerCase();

	return slug;
};

export default generateCategorySlug;
