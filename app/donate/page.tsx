import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import { Check, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "দান করুন - CARE & SHARE FOUNDATION",
  description: "আমাদের মিশন সমর্থন করুন এবং বিশ্বজুড়ে সম্প্রদায়গুলিতে দীর্ঘস্থায়ী পরিবর্তন তৈরিতে সাহায্য করুন।",
}

export default function Donate() {
  const donationTiers = [
    {
      amount: 25,
      title: "বন্ধু",
      description: "একজন ব্যক্তির জন্য অপরিহার্য ওষুধ প্রদান করুন",
      icon: "💊",
    },
    {
      amount: 50,
      title: "সমর্থক",
      description: "৫ জন শিক্ষার্থীর জন্য স্কুল সরবরাহ",
      icon: "📚",
    },
    {
      amount: 100,
      title: "চ্যাম্পিয়ন",
      description: "একটি পরিবারের জন্য ৬ মাসের নিরাপদ পানীয় জল",
      icon: "💧",
    },
    {
      amount: 250,
      title: "নায়ক",
      description: "একজন ব্যক্তির জন্য বৃত্তিমূলক প্রশিক্ষণ",
      icon: "🎓",
    },
  ]

  const benefits = [
    "কর-হ্রাসযোগ্য দান (প্রযোজ্য এখতিয়ারে)",
    "মাসিক প্রভাব প্রতিবেদন",
    "প্রকল্পে একচেটিয়া আপডেট",
    "আমাদের ওয়েবসাইটে স্বীকৃতি",
    "সম্প্রদায়ে সরাসরি প্রভাব",
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="একটি পার্থক্য তৈরি করুন"
            subtitle="আপনার দান বিশ্বজুড়ে সম্প্রদায়ের হাজার হাজার মানুষের জীবনে সরাসরি প্রভাব ফেলে"
          />
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">আপনার প্রভাব স্তর বেছে নিন</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier) => (
              <Card key={tier.amount} className="p-6 hover:shadow-lg transition-shadow border-border flex flex-col">
                <div className="text-4xl mb-4">{tier.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-2">${tier.amount}</h3>
                <p className="text-lg font-semibold text-foreground mb-2">{tier.title}</p>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{tier.description}</p>
                <Button className="w-full" asChild>
                  <a href="#">${tier.amount} দান করুন</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Amount */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">কাস্টম দান পরিমাণ</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            যেকোনো পরিমাণ বেছে নিন যা আপনার জন্য কাজ করে। আমরা অবিলম্বে আপনার উদারতা কাজে লাগাব।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <input
              type="number"
              placeholder="USD তে পরিমাণ প্রবেশ করুন"
              className="px-4 py-3 rounded-lg border border-border bg-background text-foreground flex-1 max-w-xs focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" asChild>
              <a href="#">দান করুন</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why Support Innovative Path?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Where Your Money Goes</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">Programs & Services</span>
                    <span className="text-primary font-bold">75%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">Operations & Admin</span>
                    <span className="text-primary font-bold">15%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "15%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">Fundraising</span>
                    <span className="text-primary font-bold">10%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "10%" }}></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                We believe in transparency. Our detailed annual reports are available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Giving */}
      <section className="py-16 md:py-24 px-4 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Become a Monthly Sustainer</h2>
          <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your monthly donation provides reliable, predictable funding that allows us to plan long-term programs and measure sustained impact in communities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="#">Set Up Monthly Donation</a>
          </Button>
        </div>
      </section>
    </>
  )
}
