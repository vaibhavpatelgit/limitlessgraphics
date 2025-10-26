import LoginForm from "./ui/LoginForm";

export const metadata = { title: "Login | Admin" };

export default function LoginPage() {
  return (
    <div className="min-h-dvh grid place-items-center bg-neutral-950">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur p-6 shadow-2xl">
        <h1 className="text-2xl font-bold mb-1">Admin Login</h1>
        <p className="text-sm text-neutral-400 mb-6">
          Enter your credentials to continue.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
