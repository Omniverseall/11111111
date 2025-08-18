"use client"
import Modal from "@shared/ui/Modal"
import LeadForm from "./LeadForm"
import { useSubmitLead } from "../model/useSubmitLead"
import { useI18n } from "@shared/lib/i18n/I18nProvider"

export default function LeadFormModal({ open, onClose, plan }: { open:boolean; onClose:()=>void; plan?:string }) {
  const { submit, loading, ok } = useSubmitLead()
  const { locale, dict } = useI18n()
  return (
    <Modal open={open} onClose={onClose}>
      <div className="space-y-4">
        <div className="text-xl font-semibold">Edoline</div>
        <LeadForm loading={loading} defaultPlan={plan} onSubmit={(d)=> submit({ ...d, plan, locale }) } />
        {ok === true && <div className="text-green-500">{dict.contact.success}</div>}
        {ok === false && <div className="text-red-500">{dict.contact.error}</div>}
      </div>
    </Modal>
  )
}
