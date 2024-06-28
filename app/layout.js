import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TO-Do List",
  description: "CRUD Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-cover bg-cyan-100 bg-center min-h-screen  ">
          <div className="max-w-3xl mx-auto p-4">
            <Header />
            <div className="mt-8">
              {children}

            </div>
          </div>

        </div>

      </body>
    </html>
  );
}
