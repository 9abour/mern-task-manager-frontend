"use client";

import CategoriesList from "@/components/sidebar/CategoriesList";
import UserButton from "@/components/sidebar/UserButton";
import { SidebarStyled } from "@/components/sidebar/styles/sidebar.styles";
import TaskList from "@/components/tasks/TaskList";
import React from "react";

const page = () => {
	return (
		<>
			<SidebarStyled>
				<UserButton />
				<CategoriesList />
			</SidebarStyled>

			<TaskList />
		</>
	);
};

export default page;
