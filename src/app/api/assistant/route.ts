import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // barato e bom; ainda requer saldo
      messages: [{ role: "user", content: query ?? "diga olá em pt-BR" }],
      temperature: 0.7,
    });

    const text = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ answer: text || "Sem conteúdo." });
  } catch (err: unknown) {
    // Trata 429 e outros
    const msg = err instanceof Error ? err.message : String(err);
    const is429 = /429/.test(msg);
    const status = is429 ? 429 : 500;
    const hint = is429 ? "Sem créditos/limite na OPENAI_API_KEY." : "Falha na chamada ao modelo.";
    console.error("[/api/assistant] error:", msg);
    return NextResponse.json({ error: `${hint} (${msg})` }, { status });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
