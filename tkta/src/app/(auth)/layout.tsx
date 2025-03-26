export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="h-screen w-full">{children}</main>;
}
