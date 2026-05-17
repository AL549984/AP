import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HighlightsSection } from "@/components/highlights-section"
import { ProductPipelineSection } from "@/components/product-pipeline-section"
import { WorkflowExampleSection } from "@/components/workflow-example-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { ComplianceSection } from "@/components/compliance-section"
import { ScenariosSection } from "@/components/scenarios-section"
import { BusinessModelSection } from "@/components/business-model-section"
import { CompetitionSection } from "@/components/competition-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HighlightsSection />
      <ProductPipelineSection />
      <WorkflowExampleSection />
      <ArchitectureSection />
      <ComplianceSection />
      <ScenariosSection />
      <BusinessModelSection />
      <CompetitionSection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
