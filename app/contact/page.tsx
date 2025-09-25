import type { Metadata } from "next"
import ContactClientPage from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Us - DarkWings",
  description: "Get in touch with our team for project inquiries, support, or consultations.",
}

export default function ContactPage() {
  return <ContactClientPage />
}
