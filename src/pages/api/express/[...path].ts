import type { NextApiRequest, NextApiResponse } from "next"
import express, { type Request, type Response } from "express"
import serverless from "serverless-http"

const app = express()
app.use(express.json())

app.post("/telegram", async (req: Request, res: Response) => {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  const { name, phone, plan, locale } = req.body || {}
  if (!token || !chatId || !name || !phone) return res.status(400).json({ ok:false })
  const text = `Edoline Lead\nName: ${name}\nPhone: ${phone}\nPlan: ${plan || "-"}\nLocale: ${locale || "-"}\nSource: Website`
  const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text })
  })
  if (!r.ok) return res.status(500).json({ ok:false })
  res.status(200).json({ ok:true })
})

const handler = serverless(app)
export const config = { api: { bodyParser: false } }
export default async function (req: NextApiRequest, res: NextApiResponse) { return handler(req, res) }
