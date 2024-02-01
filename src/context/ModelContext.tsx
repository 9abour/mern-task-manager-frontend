"use client";

import Model from "@/components/model/Model";
import { IChildren } from "@/types/index.types";
import { createContext, useState } from "react";
import { IModelContext } from "./types/model.types";

const initialState = {
	isOpen: false,
	toggle: () => {},
};

export const ModelContext = createContext<IModelContext>(initialState);

export const ModelProvider = ({ children }: IChildren) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<ModelContext.Provider
			value={{
				isOpen,
				toggle: setIsOpen,
			}}
		>
			{isOpen ? <Model /> : null}
			{children}
		</ModelContext.Provider>
	);
};
