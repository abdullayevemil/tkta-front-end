"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { use } from "react";

const MAX_ATTEMPTS = 3;
const LOCK_DURATION = 15 * 60 * 1000; // 15 minutes

const loginSchema = z.object({
  userId: z
    .string()
    .regex(
      /^AA\d{7}$/,
      'Card number must start with "AA" followed by 7 digits'
    ),
  identityNo: z
    .string()
    .length(7, "Personal number must be exactly 7 characters")
    .regex(
      /^[A-Z0-9]{7}$/,
      "Personal number must be uppercase letters and digits only"
    ),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [locked, setLocked] = React.useState(false);

  const router = useRouter();

  const { locale } = use(params);

  React.useEffect(() => {
    const data = localStorage.getItem("login-lock");
    if (data) {
      const { attempts, lockedUntil } = JSON.parse(data);
      if (attempts >= MAX_ATTEMPTS && Date.now() < lockedUntil) {
        setLocked(true);
      } else {
        localStorage.removeItem("login-lock");
      }
    }
  }, []);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userId: "",
      identityNo: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      toast.loading("Logging in...");

      if (data) {
      }

      const isSuccess =
        data.userId === "AA3969432" && data.identityNo === "7G4XHKP";

      toast.dismiss();

      if (!isSuccess) {
        const lockData = JSON.parse(localStorage.getItem("login-lock") || "{}");
        const attempts = (lockData.attempts || 0) + 1;

        if (attempts >= MAX_ATTEMPTS) {
          const lockedUntil = Date.now() + LOCK_DURATION;
          localStorage.setItem(
            "login-lock",
            JSON.stringify({ attempts, lockedUntil })
          );
          setLocked(true);
          toast.error("Too many failed attempts. Try again later.");
        } else {
          localStorage.setItem(
            "login-lock",
            JSON.stringify({ attempts, lockedUntil: 0 })
          );
          toast.error(
            `Login failed. ${MAX_ATTEMPTS - attempts} attempt(s) left.`
          );
        }
        return;
      }

      // On success:
      localStorage.removeItem("login-lock");
      toast.success("Logged in successfully");
      router.push(`/${locale}/video-call/book-call`);
    } catch {
      toast.dismiss();
      toast.error("Unexpected error. Try again.");
    }
  };

  return (
    <main className="flex items-center justify-center py-10 p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg"
          noValidate
        >
          <h1 className="text-2xl font-semibold text-center">Login</h1>

          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="AA1234567"
                    autoComplete="off"
                    maxLength={9}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="identityNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personal No</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="7 characters (A-Z, 0-9)"
                    autoComplete="off"
                    maxLength={7}
                    style={{ textTransform: "uppercase" }}
                    onInput={(e) => {
                      e.currentTarget.value =
                        e.currentTarget.value.toUpperCase();
                      field.onChange(e.currentTarget.value.toUpperCase());
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-textPrimary hover:bg-opacity-90 disabled:opacity-50"
            disabled={form.formState.isSubmitting || locked}
          >
            {locked
              ? "Login Disabled"
              : form.formState.isSubmitting
              ? "Logging in..."
              : "Login"}
          </Button>
        </form>
      </Form>
    </main>
  );
}
