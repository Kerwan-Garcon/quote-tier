"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const formSchema = z.object({
  author: z.string().min(2, {
    message: "Author must be at least 2 characters.",
  }),
  citation: z.string().min(2, {
    message: "Citation must be at least 2 characters.",
  }),
});

export function AddQuotesForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: "",
      citation: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>Author citation</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="citation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Citation</FormLabel>
              <FormControl>
                <Textarea placeholder="lorem..." {...field} />
              </FormControl>
              <FormDescription>Ajoute la citation de ton choix</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
