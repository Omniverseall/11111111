import { z } from "zod"
export const leadSchema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(5).max(32),
  plan: z.string().optional(),
  locale: z.enum(["ru","uz","en"])
})
export type LeadInput = z.infer<typeof leadSchema>
