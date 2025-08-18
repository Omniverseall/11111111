"use client"
import Container from "@shared/ui/Container"
import Card from "@shared/ui/Card"
import LeadForm from "@features/lead-request/ui/LeadForm"
import { useSubmitLead } from "@features/lead-request/model/useSubmitLead"
import { useI18n } from "@shared/lib/i18n/I18nProvider"

export default function Contact() {
  const { dict, locale } = useI18n()
  const { submit, loading, ok } = useSubmitLead()
  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold">{dict.contact.title}</h3>
              <p className="opacity-80">{dict.contact.subtitle}</p>
            </div>
            <div className="mt-6">
              <LeadForm loading={loading} onSubmit={(data)=> submit({ ...data, locale })} />
              {ok === true && <div className="text-green-500 mt-3">{dict.contact.success}</div>}
              {ok === false && <div className="text-red-500 mt-3">{dict.contact.error}</div>}
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-3">
              <div className="text-lg font-semibold">Edoline</div>
              <div className="opacity-80">
                <div>{dict.contact.email}</div>
                <div>{dict.contact.phoneTxt}</div>
                <div>{dict.contact.ceo}</div>
              </div>
              <div className="text-sm opacity-70">
                On‑prem размещение на серверах заказчика. Конфиденциальность, аудит и соответствие законодательству РУз.
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
