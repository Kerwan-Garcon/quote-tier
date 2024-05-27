import QuotesDialog from "@/components/quotes/QuotesDialog";
import QuotesList from "@/components/quotes/QuotesList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 justify-between w-full relative">
      <QuotesList />
      <QuotesDialog />
    </main>
  );
}
