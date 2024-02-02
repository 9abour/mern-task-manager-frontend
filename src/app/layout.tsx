import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/context/components/ThemeContext";
import "./globals.css";
import { IChildren } from "@/types/index.types";
import { UserProvider } from "@/context/components/UserContext";
import { UIDataProvider } from "@/context/components/UIDataContext";
import { Toaster } from "sonner";
import { ModalProvider } from "@/context/components/ModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Task Manager",
	description:
		"a full-stack application that allows users to explore and choose from a set of features, each associated with specific tasks. Users can complete these tasks to earn XP (Experience Points).",
};

export default function RootLayout({ children }: IChildren) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/x-icon"
					href="https://api.iconify.design/lucide:list-todo.svg"
				/>
			</head>
			<body className={inter.className}>
				<Toaster position="top-right" richColors />
				<ThemeProvider>
					<ModalProvider>
						<UserProvider>
							<UIDataProvider>{children}</UIDataProvider>
						</UserProvider>
					</ModalProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
