import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const queryClient = new QueryClient();

export const metadata = {
  title: "My App",
  description: "A Next.js Starter",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log("user id", session?.user);

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
