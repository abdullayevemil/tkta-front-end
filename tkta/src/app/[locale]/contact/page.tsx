"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSchema = z.object({
  fullName: z.string().min(1, {
    message: "Adınızı daxil edin",
  }),
  contactNumber: z.string().regex(/^0\d{2}-\d{3}-\d{2}-\d{2}$/, {
    message: "Əlaqə nömrəsini bu formatda daxil edin: 055-555-55-55",
  }),
  email: z.string().email({
    message: "Düzgün e-poçt ünvanı daxil edin",
  }),
  content: z.string().min(1, {
    message: "Mesajınızı daxil edin",
  }),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
      content: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
    if (data) {
      return;
    }
  };

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      if (e) {
        setIsVerified(false);
      }
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  return (
    <section className="w-full flex flex-col gap-16 items-center pt-16">
      <h1 className="uppercase text-4xl text-center">Əlaqə</h1>

      <Tabs
        defaultValue="contact"
        className="w-full px-16 flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="contact"
          >
            Onlayn müraciət
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="meet_citizens"
          >
            Vətəndaş qəbulu
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contact">
          <div className="flex flex-col gap-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 px-16 mx-auto w-full"
              >
                <div className="flex flex-row justify-between gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Ad və Soyad</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Adınızı və soyadınızı daxil edin"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Əlaqə nömrəsi</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Əlaqə nömrənizi daxil edin"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-poçt ünvanı</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="E-poçtunuzu daxil edin"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mesaj</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Mesajınızı daxil edin"
                          {...field}
                          className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-textPrimary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  ref={recaptchaRef}
                  onChange={handleChange}
                  onExpired={handleExpired}
                />

                <Button
                  type="submit"
                  className="w-full bg-textPrimary hover:bg-textPrimary font-semibold"
                  disabled={!isVerified}
                >
                  Göndər
                </Button>
              </form>
            </Form>
          </div>
        </TabsContent>

        <TabsContent value="meet_citizens">
          <div className="flex flex-col gap-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 px-16 mx-auto w-full"
              >
                <div className="flex flex-row justify-between gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Ad və Soyad</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Adınızı və soyadınızı daxil edin"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Əlaqə nömrəsi</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Əlaqə nömrənizi daxil edin"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-poçt ünvanı</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="E-poçtunuzu daxil edin"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mesaj</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Mesajınızı daxil edin"
                          {...field}
                          className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-textPrimary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  ref={recaptchaRef}
                  onChange={handleChange}
                  onExpired={handleExpired}
                />

                <Button
                  type="submit"
                  className="w-full bg-textPrimary hover:bg-textPrimary font-semibold"
                  disabled={!isVerified}
                >
                  Göndər
                </Button>
              </form>
            </Form>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
