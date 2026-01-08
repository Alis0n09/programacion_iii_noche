import LoginForm from "./LoginForm";

type LoginData = {
  email: string;
  password: string;
};

const ParentLoginForm: React.FC = () => {
  const handleLogin = (data: LoginData): void => {
    console.log("Login exitoso:", data);
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default ParentLoginForm;
