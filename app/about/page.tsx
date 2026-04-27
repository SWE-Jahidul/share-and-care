import Image from "next/image"
import { Metadata } from "next"
import { SectionTitle } from "@/components/section-title"
import { teamMembers } from "@/lib/data"

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে - CARE & SHARE FOUNDATION",
  description: "CARE & SHARE FOUNDATION এর মিশন, দৃষ্টিভঙ্গি এবং বৈশ্বিক প্রভাব তৈরিতে নিবেদিত দল সম্পর্কে জানুন।",
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="CARE & SHARE FOUNDATION সম্পর্কে"
            subtitle="টেকসই উন্নয়ন এবং সম্প্রদায় ক্ষমতায়নে নিবেদিত একটি বৈশ্বিক আন্দোলন"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full min-h-96">
              <Image
                src="/images/project-2.jpg"
                alt="Our story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">আমাদের গল্প</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ২০১০ সালে প্রতিষ্ঠিত, CARE & SHARE FOUNDATION একটি সরল বিশ্বাস দিয়ে শুরু হয়েছিল: প্রতিটি মানুষ মানসম্পন্ন শিক্ষা, স্বাস্থ্যসেবা এবং অর্থনৈতিক উন্নয়নের সুযোগ পাওয়ার যোগ্য।
                </p>
                <p>
                  যা একটি ছোট উদ্যোগ হিসাবে শুরু হয়েছিল তা এখন একটি বৈশ্বিক আন্দোলনে পরিণত হয়েছে, আফ্রিকা, এশিয়া, ল্যাটিন আমেরিকা এবং তার বাইরে ২৮+ দেশে কাজ করছে।
                </p>
                <p>
                  আমাদের পদ্ধতি সম্প্রদায় নেতৃত্বাধীন উন্নয়নে নিহিত, নিশ্চিত করে যে আমরা যাদের সেবা করি তারা তাদের জীবনকে প্রভাবিত করে এমন সমাধান গঠনে কণ্ঠস্বর রয়েছে।
                </p>
                <p>
                  আজ, আমরা আমাদের নাগাল এবং প্রভাব সম্প্রসারণ চালিয়ে যাচ্ছি, সর্বদা স্বচ্ছতা, টেকসইতা এবং পরিমাপযোগ্য ফলাফলের আমাদের মূল মূল্যবোধের প্রতি সত্য থাকছি।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="আমাদের পদ্ধতি"
            subtitle="কীভাবে আমরা টেকসই, সম্প্রদায় নেতৃত্বাধীন উন্নয়ন তৈরি করি"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">শুনুন এবং শিখুন</h3>
              <p className="text-muted-foreground">
                আমরা সম্প্রদায়ের সদস্যদের কথা শোনা দিয়ে শুরু করি তাদের চাহিদা, চ্যালেঞ্জ এবং আকাঙ্ক্ষা বুঝতে। এটি নিশ্চিত করে যে আমাদের কর্মসূচি প্রকৃত সমস্যা সমাধান করে।
              </p>
            </div>
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">নির্মাণ এবং বাস্তবায়ন</h3>
              <p className="text-muted-foreground">
                আমরা সহযোগিতার সাথে টেকসই সমাধান ডিজাইন এবং বাস্তবায়ন করি যা দীর্ঘস্থায়ী পরিবর্তন তৈরি করে এবং স্থানীয় ক্ষমতা গড়ে তোলে।
              </p>
            </div>
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">পরিমাপ এবং স্কেল করুন</h3>
              <p className="text-muted-foreground">
                আমরা কঠোরভাবে আমাদের প্রভাব পরিমাপ করি এবং কী কাজ করে তা থেকে শিখি, আমাদের কার্যকর কর্মসূচি স্কেল করতে এবং আমাদের ইতিবাচক প্রভাব সর্বাধিক করতে দেয়।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="আমাদের নেতৃত্ব দল"
            subtitle="বৈশ্বিক প্রভাব তৈরিতে প্রতিশ্রুতিবদ্ধ নিবেদিত পেশাদার"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partnerships */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="আমাদের অংশীদারেরা"
            subtitle="আমাদের প্রভাব প্রসারিত করতে বৈশ্বিক সংস্থাগুলির সাথে কাজ করছি"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-background p-6 rounded-lg flex items-center justify-center h-24 border border-border hover:border-primary transition-colors"
              >
                <p className="text-muted-foreground font-semibold text-sm">Partner {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
