"use client";

import { IChildren } from "@/types/index.types";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getUser } from "@/services/user/getUser";
import { IUser, IUserContext } from "./types/user.types";

const InitialState = {
	user: null,
};

export const UserContext = createContext<IUserContext>(InitialState);

export const UserProvider = ({ children }: IChildren) => {
	const [user, setUser] = useState<IUser | null>(null);

	const token = Cookies.get("token");

	useEffect(() => {
		(async () => {
			try {
				if (token) {
					const user: IUser | null = await getUser(JSON.parse(token));
					setUser(user);
				}
			} catch (error) {
				setUser(null);
				console.log(error);
			}
		})();
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
