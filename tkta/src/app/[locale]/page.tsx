import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "az" }];
}

export default function HomePage() {
  redirect("/home");

  return <div></div>;
}
