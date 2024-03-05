
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="text-2xl text-center text-red-600">Inner layout HD Page</h1>
      {children}
    </div>
  );
}
