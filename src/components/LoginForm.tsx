import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LogIn, Loader2 } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormProps = {
  onSubmit: (data: { username: string; password: string }) => void;
  loading: boolean;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading }) => {
  const form = useForm<{ username: string; password: string }>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Username
        </label>
        <input
          {...form.register("username")}
          type="text"
          id="username"
          className="auth-input"
          placeholder="johndoe"
        />
        {form.formState.errors.username && (
          <p className="mt-1 text-sm text-red-500">
            {form.formState.errors.username.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          {...form.register("password")}
          type="password"
          id="password"
          className="auth-input"
          placeholder="••••••••"
        />
        {form.formState.errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="auth-button disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="animate-spin mx-auto" />
        ) : (
          <span className="flex items-center justify-center gap-2">
            <LogIn size={20} />
            <span>Sign In</span>
          </span>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
