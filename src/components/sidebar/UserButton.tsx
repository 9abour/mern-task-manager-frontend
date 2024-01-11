import React, { useContext } from "react";
import {
	SidebarProfileStyled,
	SidebarSingInWrapperStyled,
} from "./styles/sidebar.styles";
import Image from "next/image";
import { Button } from "@/styles/button/button.styles";
import Link from "next/link";
import { UserContext } from "../context/UserContext";
import { redirect, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const UserButton = () => {
	const { user } = useContext(UserContext);

	const router = useRouter();

	const logout = () => {
		Cookies.remove("token");
		location.href = "/";
	};

	return (
		<>
			{user ? (
				<SidebarProfileStyled>
					<Link href={"/profile"}>
						<Image
							src="https://media.licdn.com/dms/image/D4D03AQEYjYhsE6aTPQ/profile-displayphoto-shrink_800_800/0/1700991891641?e=1710374400&v=beta&t=AObqvoGtKWfcqZgfbN7RWCj4W9w0T6Zfk9cro8hnvUQ"
							width={50}
							height={50}
							alt="user-image"
						/>
						<h4>{user.name}</h4>
					</Link>

					<Button onClick={logout}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
							/>
						</svg>
					</Button>
				</SidebarProfileStyled>
			) : (
				<SidebarSingInWrapperStyled>
					<Button onClick={() => router.push("/auth/login")}>Sign In</Button>
				</SidebarSingInWrapperStyled>
			)}
		</>
	);
};

export default UserButton;
