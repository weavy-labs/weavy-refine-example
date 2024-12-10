import type { Metadata } from "next";
import React, { Suspense } from "react";
import { RefineContext } from "./_refine_context";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { cookies } from "next/headers";
import { WeavyContextProvider } from "@contexts/weavy/context";
import { WeavyThemeProvider } from "@contexts/weavy/theme";

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang="en">
      <body>
        <Suspense>
          <AntdRegistry>
            <RefineContext defaultMode={theme?.value}>
              <WeavyContextProvider>
                <WeavyThemeProvider>{children}</WeavyThemeProvider>
              </WeavyContextProvider>
            </RefineContext>
          </AntdRegistry>
        </Suspense>
      </body>
    </html>
  );
}
