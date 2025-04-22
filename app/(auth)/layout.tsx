export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="grid min-h-dvh place-items-center">{children}</main>
    </>
  );
}
