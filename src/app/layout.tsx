import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/context/ThemeContext";
import "./globals.css";
import { IChildren } from "@/types/index.types";
import { UserProvider } from "@/context/UserContext";
import { UIDataProvider } from "@/context/UIDataContext";
import { Toaster } from "sonner";
import { ModelProvider } from "@/context/ModelContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Todo App",
	description:
		"Todo app where user can login and create his account and have access to manage tasks.",
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
				<ModelProvider>
					<UserProvider>
						<ThemeProvider>
							<UIDataProvider>{children}</UIDataProvider>
						</ThemeProvider>
					</UserProvider>
				</ModelProvider>
			</body>
		</html>
	);
}
