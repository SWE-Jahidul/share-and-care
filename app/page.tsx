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
                We care, We share, We are everywhere
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-balance">
                সামাজিক উন্নয়ন, মাদকদ্রব্য নিয়ন্ত্রণ, জলবায়ু পরিবর্তন প্রশমন, শিশু শিক্ষা,পরিবেশ রক্ষা।
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

            {/* Mission */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">আমাদের মিশন</h3>

              <ul className="text-muted-foreground list-disc list-inside space-y-2 text-left">
                <li>একটি শিক্ষিত সমাজ গড়ে তোলা</li>
                <li>মাদকমুক্ত পরিবেশ নিশ্চিত করা</li>
                <li>মানবিক মূল্যবোধ উন্নয়ন</li>
                <li>পরিবেশ ও মানবতা সুরক্ষা</li>
              </ul>
            </div>

            {/* Vision */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">আমাদের দৃষ্টিভঙ্গি</h3>

              <ul className="text-muted-foreground list-disc list-inside space-y-2 text-left">
                <li>শিশু ও নারী শিক্ষার প্রসার</li>
                <li>ফ্রি মেডিকেল ক্যাম্প আয়োজন</li>
                <li>অসহায়দের জরুরি সহায়তা</li>
                <li>মাদকমুক্ত সমাজ গঠন</li>
                <li>নৈতিক মূল্যবোধ তৈরি</li>
                <li>পরিবেশ রক্ষায় কাজ করা</li>
              </ul>
            </div>

            {/* Values */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg bg-background">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">আমাদের মূল্যবোধ</h3>

              <ul className="text-muted-foreground list-disc list-inside space-y-2 text-left">
                <li>মানবসেবা ও পরোপকার</li>
                <li>সততা ও স্বচ্ছতা</li>
                <li>নিঃস্বার্থ মানসিকতা</li>
                <li>সামাজিক দায়বদ্ধতা</li>
                <li>একতা ও দলীয় সমন্বয়</li>
                <li>সমঅধিকার ও নিরপেক্ষতা</li>
                <li>জবাবদিহিতা</li>
                <li>উদ্ভাবন ও ইতিবাচক পরিবর্তন</li>
              </ul>
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
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">

          <SectionTitle
            title="২০২৬ সালের কর্মপরিকল্পনা"
            subtitle="আমাদের স্বল্পমেয়াদী ও দীর্ঘমেয়াদী উদ্যোগসমূহ"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

            {/* Short Term Plan */}
            <div className="bg-background p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                স্বল্পমেয়াদী পরিকল্পনা ২০২৬
              </h3>

              <ul className="list-decimal list-inside space-y-2 text-muted-foreground text-left">
                <li>শীতবস্ত্র বিতরণ - ১০০ পরিবার</li>
                <li>ইফতার সামগ্রী বিতরণ - ১০০ পরিবার</li>
                <li>ঈদুল ফিতরের বস্ত্র বিতরণ - ১০০ পরিবার</li>
                <li>ঈদুল আযহার মাংস বিতরণ - ৫০ পরিবার</li>
                <li>মেধাবৃত্তি বিতরণ (১ম - ১০ম শ্রেণী) - ৪০,০০০ টাকা</li>
                <li>শিক্ষা সহায়তা (বই, খাতা, কলম, জ্যামিতি বক্স)</li>
                <li>এতিমখানায় দ্রব্য সামগ্রী বিতরণ - ২ মাস</li>
                <li>ফ্রি মেডিকেল ক্যাম্প ও ওষুধ বিতরণ - বছরে ৫ বার</li>
                <li>পিছিয়ে পড়া মানুষের জরুরি সহযোগিতা</li>
                <li>অসুস্থদের আর্থিক অনুদান প্রদান</li>
              </ul>
            </div>

            {/* Long Term Plan */}
            <div className="bg-background p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                দীর্ঘমেয়াদী কর্মপরিকল্পনা ২০২৬
              </h3>

              <ul className="list-decimal list-inside space-y-2 text-muted-foreground text-left">
                <li>পাঞ্জেখানা মসজিদ নির্মাণ</li>
                <li>মসজিদের ওযুখানা ও টয়লেট নির্মাণ</li>
                <li>মসজিদের ব্যয় ঘাটতি পূরণ ও প্রয়োজনীয় জিনিসপত্র প্রদান</li>
                <li>অগভীর নলকূপ স্থাপন</li>
                <li>মাহফিলের আয়োজন</li>
              </ul>
            </div>

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


      {/* Founder Message */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="relative w-full h-80 md:h-[420px]">
              <Image
                src="/images/download.jpg" // 👉 এখানে তোমার founder image path দাও
                alt="Founder"
                fill
                className="object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                প্রতিষ্ঠাতার বার্তা
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                আমাদের এই উদ্যোগের মূল লক্ষ্য হচ্ছে একটি মানবিক, শিক্ষিত এবং সচেতন সমাজ গড়ে তোলা।
                আমরা বিশ্বাস করি, ছোট ছোট উদ্যোগ একদিন বড় পরিবর্তন নিয়ে আসতে পারে।
                সমাজের অবহেলিত মানুষের পাশে দাঁড়ানো এবং তাদের জীবনমান উন্নয়নের জন্য আমরা নিরলসভাবে কাজ করে যাচ্ছি।
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                আপনাদের সহযোগিতা এবং ভালোবাসাই আমাদের শক্তি।
                আসুন, আমরা সবাই মিলে একটি সুন্দর ও নিরাপদ ভবিষ্যৎ গড়ে তুলি।
              </p>

              {/* Signature */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-foreground">
               মোহাম্মাদ অলিউর রাহমান 
                </h4>
                <p className="text-sm text-muted-foreground">
                  প্রতিষ্ঠাতা, CARE & SHARE FOUNDATION
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
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
