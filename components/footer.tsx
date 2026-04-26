import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.jpg"
                alt="Care & Share Foundation Logo"
                width={200}
                height={200}
                className="h-16 w-auto object-contain bg-white rounded-lg p-1"
              />CARE & SHARE FOUNDATION
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              টেকসই উন্নয়ন উদ্যোগের মাধ্যমে বিশ্বজুড়ে সম্প্রদায়গুলিতে দীর্ঘস্থায়ী ইতিবাচক পরিবর্তন তৈরিতে নিবেদিত।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-background/80 hover:text-background transition-colors">
                  প্রকল্প
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-background/80 hover:text-background transition-colors">
                  গ্যালারি
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">যোগাযোগ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">01880468888</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">orgcareandshare@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">ঢাকা, বাংলাদেশ</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">আমাদের অনুসরণ করুন</h3>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/profile.php?id=61574314664845" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/80">
            <p>&copy; ২০২৪ CARE & SHARE FOUNDATION। সমস্ত অধিকার সংরক্ষিত।</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-background transition-colors">
                গোপনীয়তা নীতি
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                সেবার শর্তাবলী
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
