import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form action="submit">
      <label htmlFor="email">Email</label>
      <input type="text" value={email} placeholder="eg:test@gmail.com" />
    </form>
  );
}

export default LoginForm;
