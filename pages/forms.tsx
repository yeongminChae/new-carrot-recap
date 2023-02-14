import React, { useState } from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formsErrors, setFormsErrors] = useState("");
  const [emailError, setEmailError] = useState("");
  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmail(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "" || email === "" || password === "") {
      setFormsErrors("All fields are required.");
    }
    if (!email.includes("@")) {
      setEmailError("Email is required.");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onUsernameChange}
        value={username}
        type="text"
        placeholder="Username"
        required
        minLength={5}
      />
      <input
        onChange={onEmailChange}
        value={email}
        type="email"
        placeholder="Email"
        required
      />
      {emailError}
      <input
        onChange={onPasswordChange}
        value={password}
        type="password"
        placeholder="password"
        required
      />
      <input type="submit" value="create Account " />
    </form>
  );
}
