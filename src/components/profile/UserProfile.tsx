"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserProfileWrapperStyled } from "./styles/index.styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserContext } from "../context/UserContext";
import { ITask } from "@/types/task.types";
import handleApiRequest from "@/helpers/handleApiRequest";
import UserTaskItem from "./UserTaskItem";
import Cookies from "js-cookie";

const UserProfile = () => {
	const [userCompletedTasks, setUserCompletedTasks] = useState<ITask[]>([]);
	const [userXP, setUserXP] = useState<number>(0);

	const token = Cookies.get("token");

	const router = useRouter();
	const { user } = useContext(UserContext);

	const getUserTasks = async () => {
		if (!user) {
			return;
		}
		const data: { tasks: ITask[] } = await handleApiRequest({
			url: `http://localhost:5000/users/tasks/${user._id}`,
			method: "GET",
		});

		const { tasks } = data;

		setUserCompletedTasks(tasks);
	};

	const getUserXP = async () => {
		if (!user) {
			return;
		}
		const data: { totalUserXP: number } = await handleApiRequest({
			url: `http://localhost:5000/users/xp/${user._id}`,
			method: "GET",
		});

		const { totalUserXP } = data;

		setUserXP(totalUserXP);
	};

	useEffect(() => {
		getUserTasks();
		getUserXP();
	}, [user]);

	if (!token) {
		router.push("/auth/login");
	}

	return user || token ? (
		<div>
			<UserProfileWrapperStyled>
				<div>
					<Image
						src="https://media.licdn.com/dms/image/D4D03AQEYjYhsE6aTPQ/profile-displayphoto-shrink_800_800/0/1700991891641?e=1710374400&v=beta&t=AObqvoGtKWfcqZgfbN7RWCj4W9w0T6Zfk9cro8hnvUQ"
						width={100}
						height={100}
						alt="user-image"
					/>
					<h2>{user?.name}</h2>
					<p>{user?.email}</p>

					<span>Your XP: {userXP}</span>

					<hr />

					{userCompletedTasks.length ? (
						<>
							<p>Your completed tasks</p>
							{userCompletedTasks.map(task => (
								<UserTaskItem key={task.name} task={task} />
							))}
						</>
					) : (
						<p>There is not tasks</p>
					)}

					<button onClick={() => router.back()}>Go back</button>
				</div>
			</UserProfileWrapperStyled>
		</div>
	) : null;
};

export default UserProfile;
