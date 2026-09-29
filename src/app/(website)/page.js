import ContactSection from "@/components/ContactSection";

import CustomersSection from "@/components/CustomersSection";
import HeroVideo from "@/components/HeroVideo";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSectionHome from "@/components/ServicesSectionHome";
import WelcomeBilingual from "@/components/WelcomeBilingual";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <WelcomeBilingual />
      {/* <ServicesSectionHome></ServicesSectionHome> */}
      <ProjectsSection />
      <CustomersSection />
      <ContactSection></ContactSection>
    </>
  );
}
