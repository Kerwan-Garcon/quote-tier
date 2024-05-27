"use server";

import { getQuotes } from "@/actions/quotes";
import React from "react";
import QuotesCards from "./QuotesCards";

async function QuotesList() {
  const quotes = await getQuotes();

  if (!quotes) return <div>Loading...</div>;

  if (quotes.length === 0) return <div>No quotes to display</div>;

  return (
    <div className="w-3/4 bg-slate-300/50 h-full p-4">
      {quotes.map((quote) => (
        <QuotesCards key={quote.id} {...quote} />
      ))}
    </div>
  );
}

export default QuotesList;
