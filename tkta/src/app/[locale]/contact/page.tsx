"use client";

import { z } from "zod";
import { useForm, type UseFormReturn } from "react-hook-form";
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
import { useRef, useState, type RefObject } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { toast } from "react-toastify";

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

type ContactFormData = z.infer<typeof ContactSchema>;

function useCaptchaVerification() {
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
    void handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  return {
    recaptchaRef,
    isVerified,
    handleChange,
    handleExpired,
  };
}

function ContactFormFields({
  form,
  isVerified,
  recaptchaRef,
  handleChange,
  handleExpired,
  onSubmit,
}: {
  form: UseFormReturn<ContactFormData>;
  isVerified: boolean;
  recaptchaRef: RefObject<ReCAPTCHA | null>;
  handleChange: (token: string | null) => void;
  handleExpired: () => void;
  onSubmit: (data: ContactFormData) => Promise<void>;
}) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 px-4 md:px-16 mx-auto w-full"
      >
        <div className="flex flex-row justify-between gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
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
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Əlaqə nömrəsi</FormLabel>
                <FormControl>
                  <Input placeholder="Əlaqə nömrənizi daxil edin" {...field} />
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
  );
}

interface ContactData extends ContactFormData {
  type: string;
}

export default function ContactForm() {
  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
      content: "",
    },
  });

  const complaintForm = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
      content: "",
    },
  });

  const appealForm = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
      content: "",
    },
  });

  const onSubmit = async (data: ContactData) => {
    try {
      const res = await fetch("/api/contact/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Mesajınız uğurla göndərildi!");
    } catch (error) {
      toast.error("Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
    }
  };

  const contactCaptcha = useCaptchaVerification();
  const complaintCaptcha = useCaptchaVerification();
  const appealCaptcha = useCaptchaVerification();

  return (
    <section className="w-full flex flex-col gap-16 items-center pt-16">
      <h1 className="uppercase text-4xl text-center">Əlaqə</h1>

      <Tabs
        defaultValue="contact"
        className="w-full px-4 md:px-16 flex flex-col gap-16"
      >
        <TabsList className="flex flex-col md:flex-row justify-evenly relative">
          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="contact"
          >
            Onlayn müraciət
          </TabsTrigger>

          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="complaint"
          >
            Şikayət
          </TabsTrigger>

          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="appeal"
          >
            Apelyasiya müraciəti
          </TabsTrigger>

          <TabsTrigger
            className="w-full md:w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value=""
          >
            <Link
              href="https://www.qebul.edu.az/?page=add_ticket"
              target="_blank"
              className="w-full text-textPrimary z-40"
            >
              Vətəndaş qəbulu
            </Link>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contact">
          <div className="flex flex-col gap-4">
            <ContactFormFields
              form={contactForm}
              isVerified={contactCaptcha.isVerified}
              recaptchaRef={contactCaptcha.recaptchaRef}
              handleChange={contactCaptcha.handleChange}
              handleExpired={contactCaptcha.handleExpired}
              onSubmit={() =>
                onSubmit({
                  type: "Onlayn müraciət",
                  ...contactForm.getValues(),
                })
              }
            />
          </div>
        </TabsContent>

        <TabsContent value="complaint">
          <div className="flex flex-col gap-4">
            <ContactFormFields
              form={complaintForm}
              isVerified={complaintCaptcha.isVerified}
              recaptchaRef={complaintCaptcha.recaptchaRef}
              handleChange={complaintCaptcha.handleChange}
              handleExpired={complaintCaptcha.handleExpired}
              onSubmit={() =>
                onSubmit({
                  type: "Şikayət",
                  ...contactForm.getValues(),
                })
              }
            />
          </div>
        </TabsContent>

        <TabsContent value="appeal">
          <div className="flex flex-col gap-4">
            <ContactFormFields
              form={appealForm}
              isVerified={appealCaptcha.isVerified}
              recaptchaRef={appealCaptcha.recaptchaRef}
              handleChange={appealCaptcha.handleChange}
              handleExpired={appealCaptcha.handleExpired}
              onSubmit={() =>
                onSubmit({
                  type: "Apelyasiya müraciəti",
                  ...contactForm.getValues(),
                })
              }
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
