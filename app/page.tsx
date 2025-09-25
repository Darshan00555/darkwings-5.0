import dynamic from 'next/dynamic'
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

// Client-side components ko dynamically import karein
const Preloader = dynamic(() => import('@/components/preloader'), { ssr: false });
const PageTransition = dynamic(() => import('@/components/page-transition'), { ssr: false });

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