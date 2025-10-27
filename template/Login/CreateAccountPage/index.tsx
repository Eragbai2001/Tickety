"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Login from "@/components/Logins";
import Field from "@/components/Field";
import Button from "@/components/Button/page";
import { toast } from "@/hooks/use-toast";
import { signUp } from "@/lib/auth";

const CreateAccountPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Inline validation
    if (!name || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // ✅ Simulated authentication using localStorage
      const response = await signUp(name, email, password);

      if (response.success) {
        toast({
          title: "Account created",
          description: "Redirecting to dashboard...",
        });

        // ✅ Redirect to dashboard on success
        setTimeout(() => router.push("/dashboard"), 1000);
      } else {
        setError(response.message || "Signup failed");
        toast({
          variant: "destructive",
          title: "Signup failed",
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
      title="Create New Account"
      description="Enter your details to sign up"
      image="/images/icons/profile.svg"
    >
      <form onSubmit={handleSignup}>
        <div className="flex flex-col gap-4 max-md:gap-3">
          <Field
            label="Full Name"
            placeholder="Enter your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
        </div>

        <Button
          type="submit"
          className="w-full mt-8 max-md:mt-5"
          isPrimary
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </Button>

        <div className="mt-8 text-center text-body-lg text-gray-500 max-md:mt-5">
          Already have an account?{" "}
          <Link
            className="font-medium text-primary-400 transition-colors hover:text-primary-600"
            href="/sign-in"
          >
            Login
          </Link>
        </div>
      </form>
    </Login>
  );
};

export default CreateAccountPage;
