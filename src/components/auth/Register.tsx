"use client";

import { Button } from "@/styles/button/button.styles";
import { FormStyled, FormWrapperStyled } from "@/styles/form/index.styles";
import { PrimaryInputStyled } from "@/styles/input/index.styles";
import Link from "next/link";
import React, { useState } from "react";
import { useHandleRegister } from "./hooks/useHandleRegister";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { submit } = useHandleRegister();

	return (
		<FormWrapperStyled>
			<FormStyled onSubmit={submit}>
				<div>
					<label htmlFor="name">Name</label>
					<PrimaryInputStyled
						type="text"
						required
						placeholder="Enter your name"
						name="name"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
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

				<Button>Register</Button>

				<p>
					Do you have an account?
					<Link href="/auth/login">Login</Link>
				</p>

				<p>
					<Link href="/">Go home</Link>
				</p>
			</FormStyled>
		</FormWrapperStyled>
	);
};

export default Register;
