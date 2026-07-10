import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Collections",
    "href": "#collections"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Social",
    "href": "#social"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="default" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="ELARA"
      ctaButton={{
        text: "Book Consultation",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="ELARA DESIGN"
      copyright="© 2024 Elara Couture. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "https://instagram.com",
        },
        {
          icon: Facebook,
          href: "https://facebook.com",
        },
        {
          icon: Twitter,
          href: "https://twitter.com",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
