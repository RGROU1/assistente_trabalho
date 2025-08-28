"use client";
import { useState } from "react";

export default function Home() {
  const [q, setQ] = useState("");
  const [ans, setAns] = useState<string>("");

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    setAns("pensando...");
    const r = await fetch("/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: q }),
    });
    const data = await r.json();
    setAns(data?.answer ?? data?.error ?? "(sem resposta)");
  }

  return (
    <main className="min-h-screen flex flex-col items-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Assistente</h1>
      <form onSubmit={ask} className="flex gap-2 w-full max-w-xl">
        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder="Pergunte algo…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button className="px-4 py-2 rounded bg-black text-white">
          Enviar
        </button>
      </form>
      <pre className="w-full max-w-xl whitespace-pre-wrap border rounded p-4">
        {ans}
      </pre>
    </main>
  );
}
