import {
  AiFirstSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  SharingSection,
  WorkSection,
} from "@/components/home/sections";
import { createStructuredData } from "@/lib/seo";

const container = "mx-auto max-w-6xl px-4 sm:px-8";

export default function Home() {
  const structuredData = createStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="main-content">
        <div className="theme-night">
          <div className={container}>
            <HeroSection />
          </div>
        </div>
        <div className={container}>
          <div className="theme-night mt-12 rounded-[28px] px-5 sm:mt-16 sm:px-10 lg:px-14">
            <AiFirstSection />
          </div>
          <WorkSection />
          <SharingSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
