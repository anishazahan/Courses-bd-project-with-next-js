import { dbConnect } from "@/BackendService/Service/mongo";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title: "Courses BD",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  console.log("suucessfully....", conn);
  // console.log("process.env", process.env.MONGODB_CONNECTION_STRING);
  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.className)}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
