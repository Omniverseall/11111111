"use client"
import Container from "@shared/ui/Container"
import Card from "@shared/ui/Card"
import Button from "@shared/ui/Button"
import { useI18n } from "@shared/lib/i18n/I18nProvider"
import { useState } from "react"
import LeadFormModal from "@features/lead-request/ui/LeadFormModal"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function PricingCarousel() {
  const { dict } = useI18n()
  const [open, setOpen] = useState(false)
  const [plan, setPlan] = useState<string>()
  const isNumber = (p:string)=>!(p.includes("По")||p.includes("So‘rov")||p.includes("On request"))
  return (
    <section id="pricing" className="py-16 md:py-24">
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{dict.pricing.title}</h2>
        <div className="pricing-swiper-wrapper">
          <Swiper modules={[Navigation, Pagination, A11y]} navigation pagination={{ clickable:true }} spaceBetween={24} breakpoints={{ 0:{slidesPerView:1}, 768:{slidesPerView:2}, 1024:{slidesPerView:3} }}>
            {dict.pricing.plans.map((p)=>(
              <SwiperSlide key={p.id}>
                <div className="h-[300px] md:h-[320px] lg:h-[340px]">
                  <Card className="p-5 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="text-primary font-semibold">{p.name}</div>
                      <div className="text-3xl font-bold">{p.price} {isNumber(p.price)?` ${dict.pricing.currency}`:""}</div>
                      <ul className="list-disc pl-5 space-y-1 opacity-80">{p.features.map((f,i)=>(<li key={i}>{f}</li>))}</ul>
                    </div>
                    <Button className="mt-4" onClick={()=>{ setPlan(p.name); setOpen(true) }}>{dict.pricing.order}</Button>
                  </Card>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      <LeadFormModal open={open!} onClose={()=>setOpen(false)} plan={plan} />
    </section>
  )
}
