import { useState } from "react";

type LoginData = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onLogin: (data: LoginData) => void;
};

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}