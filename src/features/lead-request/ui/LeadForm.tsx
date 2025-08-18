"use client"
import { useRef } from "react"
import Input from "@shared/ui/Input"
import Button from "@shared/ui/Button"
import { useI18n } from "@shared/lib/i18n/I18nProvider"

export default function LeadForm({ onSubmit, loading, defaultPlan }: { onSubmit: (d:{name:string; phone:string})=>void; loading?:boolean; defaultPlan?:string }) {
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const { dict } = useI18n()
  return (
    <form onSubmit={(e)=>{ e.preventDefault(); onSubmit({ name: nameRef.current?.value || "", phone: phoneRef.current?.value || "" }) }} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm opacity-80">{dict.contact.name}</label>
        <Input ref={nameRef} name="name" placeholder={dict.contact.name} required />
      </div>
      <div className="space-y-2">
        <label className="text-sm opacity-80">{dict.contact.phone}</label>
        <Input ref={phoneRef} name="phone" placeholder="+998 XX XXX XX XX" required />
      </div>
      {defaultPlan && <div className="text-sm opacity-70">Plan: {defaultPlan}</div>}
      <Button type="submit" className="w-full" disabled={loading}>{dict.contact.submit}</Button>
    </form>
  )
}
