"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { signUp } from "@/lib/auth";
import logo from "@/assets/logo.png";
import authBg from "@/assets/auth-background.png";
import Image from "next/image";
import Navbar from "@/components/navbar";

const signUpSchema = z.object({
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  }),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const password = watch("password");

  const passwordRequirements = [
    { text: "At least 8 characters", met: password?.length >= 8 },
    { text: "One uppercase letter", met: /[A-Z]/.test(password || "") },
    { text: "One lowercase letter", met: /[a-z]/.test(password || "") },
    { text: "One number", met: /[0-9]/.test(password || "") },
    { text: "One special character", met: /[^A-Za-z0-9]/.test(password || "") },
  ];

  const onSubmit = async (data: SignUpFormData) => {
    if (!recaptchaVerified) {
      toast({
        variant: "destructive",
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await signUp(data.username, data.email, data.password);

      if (response.success) {
        toast({
          title: "Success!",
          description: response.message || "Your account has been created successfully",
        });
  router.push("/");
      } else {
        toast({
          variant: "destructive",
          title: "Sign Up Failed",
          description: response.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
 
      {/* Left side - Image */}
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
      <Image
        src="/Rectangle (1).png"
        alt="Authentication background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
        <div className="flex justify-center">
            <Image src="/images/logo.png" alt="Logo" className="h-12" width={48} height={48} />
        </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-semibold text-foreground">Create an Account</h1>
            <p className="text-muted-foreground">Join us today and get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Username */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-foreground">
                Username
              </label>
              <Input
                id="username"
                {...register("username")}
                placeholder="Enter your username"
                className={errors.username ? "border-destructive" : ""}
              />
              {errors.username && (
                <p className="text-sm text-destructive">{errors.username.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Create a password"
                  className={errors.password ? "border-destructive pr-10" : "pr-10"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}

              {/* Password Requirements */}
              {password && (
                <div className="mt-3 space-y-1">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          req.met ? "bg-green-500" : "bg-muted"
                        }`}
                      />
                      <span className={req.met ? "text-foreground" : "text-muted-foreground"}>
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* reCAPTCHA Mock */}
            <div className="flex items-center gap-3 p-4 border border-border rounded-md bg-muted/30">
              <Checkbox
                id="recaptcha"
                checked={recaptchaVerified}
                onCheckedChange={(checked) => setRecaptchaVerified(checked as boolean)}
              />
              <label htmlFor="recaptcha" className="text-sm text-foreground cursor-pointer">
                I'm not a robot
              </label>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={!!watch("agreeToTerms")}
                onCheckedChange={(checked) => setValue("agreeToTerms", Boolean(checked))}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-destructive -mt-4">{errors.agreeToTerms.message}</p>
            )}

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
