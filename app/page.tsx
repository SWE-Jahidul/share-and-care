import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/section-title"
import { ProjectCard } from "@/components/project-card"
import { ImpactCounter } from "@/components/impact-counter"
import { TestimonialCard } from "@/components/testimonial-card"
import { GalleryCard } from "@/components/gallery-card"
import { projects, testimonials, galleryImages, impactStats } from "@/lib/data"
import { ArrowRight, Heart, Users, Globe } from "lucide-react"

export default function Home() {
  const featuredProjects = projects.slice(0, 3)
  const featuredGallery = galleryImages.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-transparent to-primary/5"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
                টেকসই উন্নয়নের মাধ্যমে বৈশ্বিক প্রভাব তৈরি করছি
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-balance">
                Care and Share শিক্ষা, স্বাস্থ্যসেবা, পরিষ্কার পানি অ্যাক্সেস এবং অর্থনৈতিক উন্নয়ন কর্মসূচির মাধ্যমে বিশ্বব্যাপী সম্প্রদায় ক্ষমতায়নে নিবেদিত।
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/donate">
                    এখনই দান করুন
                    <Heart className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/projects">
                    প্রকল্প অন্বেষণ করুন
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-96">
              <Image
                src="/images/project-1.jpg"
                alt="Community impact"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 rounded-lg bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">আমাদের মিশন</h3>
              <p className="text-muted-foreground">
                শিক্ষা, স্বাস্থ্যসেবা এবং টেকসই উন্নয়নের মাধ্যমে সম্প্রদায়কে ক্ষমতায়ন করে দীর্ঘস্থায়ী ইতিবাচক পরিবর্তন তৈরি করা।
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-lg bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">আমাদের দৃষ্টিভঙ্গি</h3>
              <p className="text-muted-foreground">
                একটি বিশ্ব যেখানে প্রতিটি মানুষের মানসম্পন্ন শিক্ষা, স্বাস্থ্যসেবা এবং সমৃদ্ধির সুযোগ রয়েছে।
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-lg bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">আমাদের মূল্যবোধ</h3>
              <p className="text-muted-foreground">
                স্বচ্ছতা, টেকসইতা, সম্প্রদায় নেতৃত্বাধীন উন্নয়ন এবং পরিমাপযোগ্য প্রভাবের প্রতি প্রতিশ্রুতি।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="আমাদের বৈশ্বিক প্রভাব"
            subtitle="নিবেদিত কর্মসূচি এবং সম্প্রদায় অংশীদারিত্বের মাধ্যমে মহাদেশ জুড়ে পার্থক্য তৈরি করছি"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {impactStats.map((stat, index) => (
              <ImpactCounter
                key={index}
                number={stat.number}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <SectionTitle
              title="বৈশিষ্ট্যযুক্ত প্রকল্প"
              subtitle="লক্ষ্যবদ্ধ, টেকসই উদ্যোগের মাধ্যমে জীবন রূপান্তরিত করছি"
              centered={false}
            />
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link href="/projects">সকল প্রকল্প দেখুন</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
          <div className="mt-8 md:hidden">
            <Button className="w-full" asChild>
              <Link href="/projects">সকল প্রকল্প দেখুন</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="পরিবর্তনের কণ্ঠস্বর"
            subtitle="বাস্তব মানুষের গল্প যাদের জীবন আমাদের কর্মসূচি দ্বারা রূপান্তরিত হয়েছে"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="গ্যালারি"
            subtitle="সম্প্রদায় এবং প্রকল্প জুড়ে আমাদের প্রভাবের ভিজ্যুয়াল যাত্রা"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {featuredGallery.map((image) => (
              <GalleryCard
                key={image.id}
                title={image.title}
                description={image.description}
                image={image.image}
                category={image.category}
              />
            ))}
          </div>
          <div className="mt-8">
            <Button className="w-full md:w-auto" variant="outline" asChild>
              <Link href="/gallery">সম্পূর্ণ গ্যালারি দেখুন</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            একটি পার্থক্য তৈরিতে আমাদের সাথে যোগ দিন
          </h2>
          <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            প্রতিটি অবদান, আকার যাই হোক না কেন, সম্প্রদায় উন্নয়নের জন্য টেকসই সমাধান তৈরিতে আমাদের সাহায্য করে। একসাথে, আমরা দীর্ঘস্থায়ী পরিবর্তন সৃষ্টি করতে পারি।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">
                আজই দান করুন
                <Heart className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-background/40 text-background hover:bg-background/10" asChild>
              <Link href="/contact">
                যোগাযোগ করুন
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
