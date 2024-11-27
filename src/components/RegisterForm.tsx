import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserPlus, Loader2 } from "lucide-react";

const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
});

type RegisterFormProps = {
  onSubmit: (data: {
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) => void;
  loading: boolean;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, loading }) => {
  const form = useForm<{
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }>({
    resolver: zodResolver(registerSchema),
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
          Email
        </label>
        <input
          {...form.register("email")}
          type="email"
          className="auth-input"
          placeholder="you@example.com"
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          {...form.register("first_name")}
          type="text"
          className="auth-input"
          placeholder="John"
        />
        {form.formState.errors.first_name && (
          <p className="mt-1 text-sm text-red-500">
            {form.formState.errors.first_name.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          {...form.register("last_name")}
          type="text"
          className="auth-input"
          placeholder="Doe"
        />
        {form.formState.errors.last_name && (
          <p className="mt-1 text-sm text-red-500">
            {form.formState.errors.last_name.message}
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
            <UserPlus size={20} />
            <span>Create Account</span>
          </span>
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
