"use client";

import theme from "@/styles/theme";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyles";
import { IChildren } from "@/types/index.types";

const Theme = ({ children }: IChildren) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
