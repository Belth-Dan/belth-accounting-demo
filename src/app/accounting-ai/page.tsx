import type { Metadata } from "next";
import AccountingAIContent from "./AccountingAIContent";
import { LanguageProvider } from "./LanguageProvider";
import "./accounting-ai.css";

export const metadata: Metadata = {
  title: "AI e-loket voor boekhoudkantoren | BELTH",
  description:
    "BELTH helpt boekhoudkantoren om klantdocumenten, vragen, reminders en dossieropvolging te automatiseren met AI.",
};

export default function AccountingAIPage() {
  return (
    <LanguageProvider>
      <AccountingAIContent />
    </LanguageProvider>
  );
}
