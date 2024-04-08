import { Montserrat } from "next/font/google";
import { Header } from "@/components";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
