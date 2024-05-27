"use server";

import { revalidatePath } from "next/cache";

const getQuotes = async () => {
  return [];
};

const getQuote = async () => {
  return {};
};

const createQuote = async () => {
  revalidatePath("/");
};

const updateQuote = async () => {
  revalidatePath("/");
};

const deleteQuote = async () => {
  revalidatePath("/");
};

const increaseQuoteLikes = async () => {
  revalidatePath("/");
};

const decreaseQuoteLikes = async () => {
  revalidatePath("/");
};

const acceptQuote = async () => {
  revalidatePath("/");
};

const denyQuote = async () => {
  revalidatePath("/");
};

export {
  getQuotes,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
  increaseQuoteLikes,
  decreaseQuoteLikes,
  acceptQuote,
  denyQuote,
};
