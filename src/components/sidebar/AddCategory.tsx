import React, { useContext, useState } from "react";
import {
	AddCategoryFormStyled,
	SidebarAddCategoryStyled,
} from "./styles/sidebar.styles";
import { UserContext } from "../context/UserContext";
import { AddTaskInputStyled } from "../tasks/styles/index.styles";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UIDataContext } from "../context/UIDataContext";

const AddCategory = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const { user } = useContext(UserContext);
	const uiDataContext = useContext(UIDataContext);
	const router = useRouter();

	const token = Cookies.get("token");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!user || !token) {
			router.push("/auth/login");
			return;
		}

		if (!(e.target instanceof HTMLFormElement)) {
			return;
		}

		const formData = new FormData(e.target);
		const formElement = e.target;

		const newCategory: any = {
			name: "",
			description: "",
		};

		formData.forEach((value, key) => {
			newCategory[key] = value.toString();
		});

		uiDataContext?.handleAddCategory(newCategory);
		setIsFormOpen(false);

		formElement.reset();
	};

	return (
		<>
			{isFormOpen ? (
				<AddCategoryFormStyled onSubmit={handleSubmit}>
					<h4>Add Category</h4>
					<AddTaskInputStyled
						name="name"
						required
						placeholder="Add category name"
					/>
					<AddTaskInputStyled
						name="description"
						required
						placeholder="Add category description"
					/>

					<button>Add</button>
				</AddCategoryFormStyled>
			) : null}

			<SidebarAddCategoryStyled
				onClick={() => {
					if (!user) {
						router.push("/auth/login");
					} else {
						setIsFormOpen(prev => !prev);
					}
				}}
				className={!isFormOpen ? "cancel" : ""}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"
					/>
				</svg>
			</SidebarAddCategoryStyled>
		</>
	);
};

export default AddCategory;
