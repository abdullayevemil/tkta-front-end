"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import HeaderImage from "@/assets/images/about/header-image.png";
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

const ContactSchema = z.object({
  fullName: z.string().min(1, {
    message: "Adınızı daxil edin",
  }),
  contactNumber: z.string().min(10, {
    message: "Əlaqə nömrəsini düzgün daxil edin",
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
    console.log(data);
  };

  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <Image src={HeaderImage} alt="header image" className="w-full" />

      <h1 className="uppercase text-6xl text-center">Əlaqə</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-16 mx-auto w-full">
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

          <Button
            type="submit"
            className="w-full bg-textPrimary hover:bg-textPrimary font-semibold"
          >
            Göndər
          </Button>
        </form>
      </Form>
    </section>
  );
}
