"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  acceptQuote,
  decreaseQuoteLikes,
  deleteQuote,
  denyQuote,
  increaseQuoteLikes,
  updateQuote,
} from "@/actions/quotes";

function QuotesCards(quote) {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>{quote.author}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{quote.date}</CardDescription>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          {quote.text}
        </blockquote>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          {!quote.verified ? (
            <>
              <button onClick={() => acceptQuote()} className="text-blue-500">
                Accept Quote
              </button>
              <button onClick={() => denyQuote()} className="text-red-500">
                Deny Quote
              </button>
            </>
          ) : (
            <>
              <button onClick={() => updateQuote()} className="text-blue-500">
                Edit
              </button>
              <button onClick={() => deleteQuote()} className="text-red-500">
                Delete
              </button>
            </>
          )}
        </div>
      </CardFooter>
      <div className="absolute bottom-2 right-2">
        <span onClick={() => increaseQuoteLikes()}>👍</span>
        <span onClick={() => decreaseQuoteLikes()}>👎</span>
      </div>
    </Card>
  );
}

export default QuotesCards;
