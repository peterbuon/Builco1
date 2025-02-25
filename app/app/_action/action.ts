"use server";

import db from "@/app/_lib/db";

export async function getAIModelComparisons() {
  return await db.aIModelComparison.findMany();
}

export async function getAIModelComparison(id: string) {
  return await db.aIModelComparison.findUnique({ where: { id } });
}

export async function createAIModelComparison(formData: FormData) {
  await db.aIModelComparison.create({
    data: {
      prompt: formData.get("prompt")?.toString(),
      gpt35: formData.get("gpt35")?.toString(),
      claude21: formData.get("claude21")?.toString(),
      geminiFree: formData.get("geminiFree")?.toString(),
      llama2: formData.get("llama2")?.toString(),
      mistral7B: formData.get("mistral7B")?.toString(),
      grok1: formData.get("grok1")?.toString(),
      consensus: formData.get("consensus")?.toString(),
      status: JSON.parse(formData.get("status")?.toString() || "{}"),
      rateLimit: JSON.parse(formData.get("rateLimit")?.toString() || "{}"),
    },
  });
}

export async function updateAIModelComparison(formData: FormData) {
  await db.aIModelComparison.update({
    data: {
      prompt: formData.get("prompt")?.toString(),
      gpt35: formData.get("gpt35")?.toString(),
      claude21: formData.get("claude21")?.toString(),
      geminiFree: formData.get("geminiFree")?.toString(),
      llama2: formData.get("llama2")?.toString(),
      mistral7B: formData.get("mistral7B")?.toString(),
      grok1: formData.get("grok1")?.toString(),
      consensus: formData.get("consensus")?.toString(),
      status: JSON.parse(formData.get("status")?.toString() || "{}"),
      rateLimit: JSON.parse(formData.get("rateLimit")?.toString() || "{}"),
    },
    where: { id: formData.get("id")?.toString() },
  });
}

export async function deleteAIModelComparison(formData: FormData) {
  await db.aIModelComparison.delete({
    where: { id: formData.get("id")?.toString() },
  });
}
