import Header from "@widgets/header/Header"
import Hero from "@widgets/hero/Hero"
import Features from "@widgets/features/Features"
import PricingCarousel from "@widgets/pricing/PricingCarousel"
import Contact from "@widgets/contact/Contact"
import Footer from "@widgets/footer/Footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <PricingCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
