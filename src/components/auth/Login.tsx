"use client";

import handleApiRequest from "@/helpers/handleApiRequest";
import { Button } from "@/styles/button/button.styles";
import { FormStyled, FormWrapperStyled } from "@/styles/form/index.styles";
import { PrimaryInputStyled } from "@/styles/input/index.styles";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const token = await handleApiRequest({
				url: `${process.env.NEXT_PUBLIC_API_URL}/singin`,
				method: "POST",
				dataPayload: {
					email,
					password,
				},
			});

			Cookies.set("token", JSON.stringify(token));
			location.href = "/";
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<FormWrapperStyled>
			<FormStyled onSubmit={submit}>
				<div>
					<label htmlFor="email">Email</label>
					<PrimaryInputStyled
						type="email"
						required
						placeholder="Enter your email"
						name="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<PrimaryInputStyled
						type="password"
						required
						placeholder="Enter your password"
						name="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>

				<Button>Login</Button>

				<p>
					Create an account
					<Link href="/auth/register">Register</Link>
				</p>

				<p>
					<Link href="/">Go home</Link>
				</p>
			</FormStyled>
		</FormWrapperStyled>
	);
};

export default Login;
