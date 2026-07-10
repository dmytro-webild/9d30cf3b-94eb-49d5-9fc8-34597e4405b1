import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroTiltedCards
      tag="Couture Design"
      title="Timeless Elegance by Elara"
      description="Crafting bespoke dresses that capture the essence of sophistication and grace for every modern muse."
      primaryButton={{
        text: "Explore Collections",
        href: "#collections",
      }}
      secondaryButton={{
        text: "Book Consultation",
        href: "#contact",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-classic-elegant-suit-luxury-retro-vintage-woman-suit_482257-45290.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/adult-brunette-woman-violet-gown-background-old-wooden-doors_627829-8778.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fabric-texture_23-2148882807.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/focus-sewing-machine-studio_482257-79117.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blonde-girl-with-short-blonde-hair-poses-white-suit-room_8353-5469.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Our Design Philosophy"
      descriptions={[
        "Elara creates pieces that celebrate the unique silhouette of the wearer, blending traditional tailoring techniques with contemporary, fluid design.",
        "Every garment is a story of craftsmanship, from selecting the finest silks to the final delicate hand-stitched detailing in our atelier.",
        "Driven by a passion for sustainability and timeless aesthetics, we aim to build a wardrobe that feels like a cherished personal collection.",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="collections" data-section="collections">
    <SectionErrorBoundary name="collections">
          <FeaturesRevealCardsBento
      tag="Collection"
      title="Our Latest Designs"
      description="Discover a selection of our finest creations, each meticulously designed for discerning tastes."
      items={[
        {
          title: "Evening Elegance",
          description: "Satin finishes and intricate draping.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/vintage-dress-collection_23-2151949815.jpg",
        },
        {
          title: "Daylight Luxury",
          description: "Effortless, chic daytime silhouettes.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-smiling-female-trendy-summer-dress-sexy-carefree-woman-posing-near-blue-wall-studio-positive-model-having-fun-cheerful-happy-sunny-day-shadow-from-window_158538-25870.jpg",
        },
        {
          title: "Bridal Couture",
          description: "Custom gowns for your special day.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/hands-bride_627829-12237.jpg",
        },
        {
          title: "Cocktail Hour",
          description: "Playful yet refined mini dresses.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-bride-elegant-white-wedding-dress_1296-482.jpg",
        },
        {
          title: "Floral Muse",
          description: "Soft patterns, romantic designs.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/seductive-happy-woman-silk-robe-posing-tropical-terrace-wellness-weekend-spa_273443-5020.jpg",
        },
        {
          title: "Midnight Velvet",
          description: "Deep tones and luxurious textures.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/shirt-stylish-young-black-notebook_1157-3861.jpg",
        },
        {
          title: "Bespoke Service",
          description: "Personalized design experiences.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-modern-rococo-style_23-2151916436.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="Clients"
      title="What They Say"
      description="Stories from women who have experienced the quality of our boutique designs."
      testimonials={[
        {
          name: "Elena V.",
          role: "Architect",
          quote: "The fit and the fabric of my custom gown were truly impeccable.",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-young-woman-outdoor_624325-2459.jpg",
        },
        {
          name: "Sarah P.",
          role: "Journalist",
          quote: "I felt so confident at the gala; Elara really understands silhouettes.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-trying-out-new-clothes_23-2148660713.jpg",
        },
        {
          name: "Chloe M.",
          role: "Designer",
          quote: "Such a beautiful experience, from consultation to the final fitting.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-relaxed-young-businessman-showing-ok-gesture-talking-cell-phone-cafe_1391-609.jpg",
        },
        {
          name: "Priya K.",
          role: "Consultant",
          quote: "Elegant designs that always draw so many compliments.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-excited-female-shoppers-sitting-together-using-tablet-discussing-clothes-purchases-fashion-store-copy-space-consumerism-shopping-concept_74855-11776.jpg",
        },
        {
          name: "Sophia L.",
          role: "Art Curator",
          quote: "The perfect balance of modern and classic, love every piece.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-portrait-close-up_93675-131508.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="Featured In"
      title="Editorial Recognition"
      description="As seen in leading global fashion publications."
      names={[
        "Vogue Italia",
        "Harper's Bazaar",
        "ELLE Magazine",
        "Marie Claire",
        "L'Officiel",
        "Glamour",
        "InStyle",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Support"
      title="Frequently Asked Questions"
      description="Common inquiries about our design process and bespoke services."
      items={[
        {
          question: "How do I book a consultation?",
          answer: "You can reach us through the contact form below, and we will schedule an appointment at our studio or virtually.",
        },
        {
          question: "How long does custom design take?",
          answer: "Depending on the complexity of the piece, bespoke designs typically take 4-8 weeks to complete.",
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship our boutique items worldwide, though bespoke fittings must take place in person.",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to begin?"
      text="Start your journey toward a perfect, custom dress design today."
      primaryButton={{
        text: "Contact Studio",
        href: "mailto:hello@elara.design",
      }}
      secondaryButton={{
        text: "Follow Us",
        href: "https://instagram.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
