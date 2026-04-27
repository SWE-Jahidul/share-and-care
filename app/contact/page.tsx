import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionTitle } from "@/components/section-title"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "আমাদের সাথে যোগাযোগ করুন - CARE & SHARE FOUNDATION",
  description: "CARE & SHARE FOUNDATION এর সাথে যোগাযোগ করুন। আমরা আপনার কথা শুনতে খুশি।",
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="আমাদের সাথে যোগাযোগ করুন"
            subtitle="প্রশ্ন আছে? আমরা আপনার কথা শুনতে চাই। যেকোনো সময় আমাদের দলের সাথে যোগাযোগ করুন।"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="flex flex-col items-center text-center p-8 bg-card rounded-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">ফোন</h3>
              <p className="text-muted-foreground">01880468888</p>
              <p className="text-xs text-muted-foreground mt-2">সোম-শুক্র উপলব্ধ, ৯টা-৫টা UTC</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-8 bg-card rounded-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">ইমেল</h3>
              <Link href="mailto:info@careandshare.org" className="text-muted-foreground hover:text-primary transition-colors">
               orgcareandshare@gmail.com
              </Link>
              <p className="text-xs text-muted-foreground mt-2">আমরা ২৪ ঘন্টায় প্রতিক্রিয়া জানাই</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center text-center p-8 bg-card rounded-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">অফিস</h3>
              <p className="text-muted-foreground">ভান্ডারিয়া, পিরোজপুর<br />বাংলাদেশ</p>
              <p className="text-xs text-muted-foreground mt-2">অ্যাপয়েন্টমেন্টের মাধ্যমে পরিদর্শন করুন</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-background p-8 md:p-12 rounded-lg border border-border">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">আমাদের একটি বার্তা পাঠান</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    সম্পূর্ণ নাম
                  </label>
                  <Input
                    type="text"
                    placeholder="আপনার নাম"
                    className="bg-card border-border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    ইমেল ঠিকানা
                  </label>
                  <Input
                    type="email"
                    placeholder="আপনার@ইমেল.কম"
                    className="bg-card border-border"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  বিষয়
                </label>
                <Input
                  type="text"
                  placeholder="এটি কী সম্পর্কে?"
                  className="bg-card border-border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  বার্তা
                </label>
                <Textarea
                  placeholder="আপনার অনুসন্ধান সম্পর্কে আরও বলুন..."
                  className="bg-card border-border min-h-32"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                বার্তা পাঠান
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
