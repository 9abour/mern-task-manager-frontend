import React, { useContext } from "react";
import {
	SidebarProfileStyled,
	SidebarSingInWrapperStyled,
} from "./styles/sidebar.styles";
import Image from "next/image";
import { Button } from "@/styles/button/button.styles";
import Link from "next/link";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const UserButton = () => {
	const { user } = useContext(UserContext);

	const router = useRouter();

	const logout = () => {
		Cookies.remove("token");
	};

	return (
		<>
			{user ? (
				<SidebarProfileStyled>
					<Link href={"/profile"}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
							/>
						</svg>
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
