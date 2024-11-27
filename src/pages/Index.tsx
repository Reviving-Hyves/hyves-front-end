import { useState } from "react";
import { toast } from "sonner";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { auth } from "../lib/api";

const Index = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const res = await (mode === "login"
        ? auth.login(data)
        : auth.register(data));
      toast.success(
        mode === "login" ? "Welcome back!" : "Account created successfully!"
      );
      console.log("Auth success:", res.data);
    } catch (error) {
      console.error("Auth error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full max-w-md fade-scale">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">
            Welcome to Hyves
          </h1>
          <p className="text-gray-600">
            Connect with friends and the world around you
          </p>
        </div>

        <div className="glass-card p-8">
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 p-3 rounded-lg ${
                mode === "login"
                  ? "bg-primary text-white"
                  : "bg-white/50 text-gray-600"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={`flex-1 p-3 rounded-lg ${
                mode === "register"
                  ? "bg-primary text-white"
                  : "bg-white/50 text-gray-600"
              }`}
            >
              Register
            </button>
          </div>
          {mode === "login" ? (
            <LoginForm onSubmit={onSubmit} loading={loading} />
          ) : (
            <RegisterForm onSubmit={onSubmit} loading={loading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
