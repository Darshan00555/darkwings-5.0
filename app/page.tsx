import Preloader from "@/components/preloader"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Preloader />
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </main>
    </PageTransition>
  )
}
