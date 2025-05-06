import LoginForm from "./components/LogInForm";
import WelcomeMessage from "./components/WelcomeMessage";
import WhiteBar from "./components/WhiteBar";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black px-140">
      <WhiteBar />
      <WelcomeMessage />
      <LoginForm />
    </main>
  );
}
