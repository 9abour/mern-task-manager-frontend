"use client";

import Modal from "@/components/modal/Modal";
import { IChildren } from "@/types/index.types";
import { createContext, useState } from "react";
import { IModalContext } from "../types/modal.types";

const initialState = {
	isOpen: false,
	toggle: () => {},
};

export const ModalContext = createContext<IModalContext>(initialState);

export const ModalProvider = ({ children }: IChildren) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [conform, setConform] = useState<Function>(() => {});

	const toggle = (conform?: Function) => {
		setConform(() => conform);

		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};

	return (
		<ModalContext.Provider
			value={{
				isOpen,
				toggle,
			}}
		>
			{isOpen ? <Modal toggle={toggle} conform={conform} /> : null}
			{children}
		</ModalContext.Provider>
	);
};
