"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Login from "@/components/Logins";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button/page";
import { toast } from "@/hooks/use-toast";
import { signIn } from "@/lib/auth";

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Inline form validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // ✅ Authentication simulated using localStorage
      const response = await signIn(email, password);

      if (response.success) {
        toast({
          title: "Login successful",
          description: "Redirecting to your dashboard...",
        });

        // ✅ Redirect to dashboard on success
        setTimeout(() => router.push("/dashboard"), 1000);
      } else {
        setError(response.message || "Invalid credentials");
        toast({
          variant: "destructive",
          title: "Login failed",
          description: response.message,
        });
      }
    } catch {
      setError("Something went wrong. Please try again.");
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Login
      title="Welcome Back"
      description="Glad to see you again. Log in to your account."
      image="/images/icons/profile.svg"
    >
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-4 max-md:gap-3">
          <Field
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Field
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* ✅ Inline error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-between items-center">
            <Checkbox
              label="Keep me logged in"
              checked={remember}
              onChange={(value) => setRemember(value)}
            />
            <Link
              className="text-body-md font-medium text-primary-400 transition-colors hover:text-primary-600"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full mt-8 max-md:mt-5"
          isPrimary
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>

        <div className="mt-8 text-center text-body-lg text-gray-500 max-md:mt-5">
          Don’t have an account?{" "}
          <Link
            className="font-medium text-primary-400 transition-colors hover:text-primary-600"
            href="/create-account"
          >
            Register
          </Link>
        </div>
      </form>
    </Login>
  );
};

export default SignInPage;
