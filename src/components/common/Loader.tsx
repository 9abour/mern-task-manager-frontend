import { LoaderStyled, LoadingWrapper } from "@/styles/loading/loading.styles";
import React from "react";

const Loader = () => {
	return (
		<LoadingWrapper className="loading__wrapper">
			<LoaderStyled />
		</LoadingWrapper>
	);
};

export default Loader;
