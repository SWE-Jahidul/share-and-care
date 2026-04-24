import { Metadata } from "next"
import { SectionTitle } from "@/components/section-title"
import { GalleryCard } from "@/components/gallery-card"
import { galleryImages } from "@/lib/data"

export const metadata: Metadata = {
  title: "গ্যালারি - Care and Share",
  description: "বিশ্বজুড়ে সম্প্রদায় থেকে আমাদের প্রভাবের ভিজ্যুয়াল গল্প।",
}

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="গ্যালারি"
            subtitle="আমাদের প্রভাব এবং আমরা যে সম্প্রদায়গুলিকে সেবা করি তাদের ভিজ্যুয়াল গল্প"
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <GalleryCard
                key={image.id}
                title={image.title}
                description={image.description}
                image={image.image}
                category={image.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
