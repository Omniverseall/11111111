"use client"
import { useState } from "react"
import { leadSchema, type LeadInput } from "@entities/lead/validation"
import { sendLeadToTelegram } from "@shared/api/telegramGateway"

export function useSubmitLead() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<null | boolean>(null)
  async function submit(input: LeadInput) {
    setLoading(true); setOk(null)
    const parsed = leadSchema.safeParse(input)
    if (!parsed.success) { setLoading(false); setOk(false); return }
    try { await sendLeadToTelegram(parsed.data); setOk(true) } catch { setOk(false) } finally { setLoading(false) }
  }
  return { submit, loading, ok }
}
