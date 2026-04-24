import { Metadata } from "next"
import { SectionTitle } from "@/components/section-title"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"

export const metadata: Metadata = {
  title: "প্রকল্প - Care and Share",
  description: "বিশ্বব্যাপী পার্থক্য তৈরি করছে আমাদের সকল সক্রিয় প্রকল্প অন্বেষণ করুন।",
}

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="আমাদের প্রকল্প"
            subtitle="শিক্ষা, স্বাস্থ্যসেবা, পানি অ্যাক্সেস এবং অর্থনৈতিক ক্ষমতায়নের মাধ্যমে সম্প্রদায় রূপান্তরিত করছি"
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                impact={project.impact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-balance">আমাদের প্রভাব সম্প্রসারণে সাহায্য করুন</h2>
          <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
            আপনার সমর্থন আমাদের আরও সম্প্রদায়ে পৌঁছাতে এবং দীর্ঘস্থায়ী পরিবর্তন তৈরি করতে সক্ষম করে। প্রতিটি দান গুরুত্বপূর্ণ।
          </p>
        </div>
      </section>
    </>
  )
}
