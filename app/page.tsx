import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AudienceSection from "@/components/AudienceSection";
import Testimoni from "@/components/testimoni";
import FasilitasSection from "@/components/FasilitasSection";
import ModulSection from "@/components/ModulSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

import { 
  getHeroData, 
  getAboutData, 
  getAudienceData, 
  getTestimoniData,
  getModulData,
  getFasilitasData,
  getPricingData,
  getFooterData
} from "@/lib/markdown";

export const metadata = {
  title: "Growskill - Platform Pembelajaran Online Terbaik | Kursus Skills & Content Creation",
  description: "Belajar skills, content creation, public speaking & editing untuk hasilkan income. Bergabung dengan ribuan member VIP Growskill sekarang juga.",
  openGraph: {
    title: "Growskill - Platform Pembelajaran Online Terbaik",
    description: "Belajar skills, content creation, public speaking & editing untuk hasilkan income.",
    url: "https://growskill.id",
    type: "website",
    images: [
      {
        url: "https://growskill.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growskill",
      },
    ],
  },
};

export default function Home() {
  const heroData = getHeroData();
  const aboutData = getAboutData();
  const audienceData = getAudienceData();
  const testimoniData = getTestimoniData();
  const modulData = getModulData();
  const fasilitasData = getFasilitasData();
  const pricingData = getPricingData();
  const footerData = getFooterData();

  return (
    <div className="pt-20 bg-black">
      {heroData && (
        <Hero 
          title={heroData.title}
          highlightedWords={heroData.highlightedWords}
          buttonText={heroData.buttonText}
          youtubeUrl={heroData.youtubeUrl}
          imagePlaceholder={heroData.imagePlaceholder}
        />
      )}
      {aboutData && (
        <AboutSection 
          title={aboutData.title}
          description={aboutData.description}
          imageUrl={aboutData.imageUrl}
          imagePlaceholder={aboutData.imagePlaceholder}
        />
      )}
      {audienceData && (
        <AudienceSection 
          title={audienceData.title}
          cocoklist={audienceData.cocoklist}
          notCocoklist={audienceData.notCocoklist}
        />
      )}
      {testimoniData && (
        <Testimoni 
          title={testimoniData.title}
          highlightedWords={testimoniData.highlightedWords}
          buttonText={testimoniData.buttonText}
          testimonials={testimoniData.testimonials}
        />
      )}
      {modulData && (
        <ModulSection 
          title={modulData.title}
          highlightedWords={modulData.highlightedWords}
          items={modulData.items}
        />
      )}
      {fasilitasData && (
        <FasilitasSection 
          title={fasilitasData.title}
          totalPrice={fasilitasData.totalPrice}
          totalPeriod={fasilitasData.totalPeriod}
          facilities={fasilitasData.facilities}
        />
      )}
      {pricingData && (
        <PricingSection 
          title={pricingData.title}
          description={pricingData.description}
          packages={pricingData.packages}
        />
      )}
      {footerData && (
        <Footer 
          description={footerData.description}
        />
      )}
    </div>
  );
}
