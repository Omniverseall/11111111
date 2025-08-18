import type { Lead } from "@entities/lead/model"
export async function sendLeadToTelegram(lead: Lead) {
  const res = await fetch("/api/express/telegram", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) })
  if (!res.ok) throw new Error("RequestFailed")
}
