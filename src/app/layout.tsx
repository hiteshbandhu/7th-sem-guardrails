import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hit.rails | AI Guardrails for LLM Applications",
  description: "Protect your LLM applications with customizable guardrails. Filter malicious prompts, ensure safe outputs, and monitor usage in real-time.",
  keywords: ["AI safety", "LLM guardrails", "prompt filtering", "AI security", "machine learning protection"],
  authors: [{ name: "hit.rails" }],
  openGraph: {
    title: "hit.rails | AI Guardrails for LLM Applications",
    description: "Protect your LLM applications with customizable guardrails. Filter malicious prompts, ensure safe outputs, and monitor usage in real-time.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "hit.rails | AI Guardrails for LLM Applications",
    description: "Protect your LLM applications with customizable guardrails. Filter malicious prompts, ensure safe outputs, and monitor usage in real-time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
