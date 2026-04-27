export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  impact: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
}

export interface GalleryImage {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "পরিষ্কার পানি উদ্যোগ",
    description:
      "টেকসই কূপ অবকাঠামোর মাধ্যমে গ্রামীণ সম্প্রদায়কে পরিষ্কার পানীয় জলের অ্যাক্সেস প্রদান করা।",
    image: "/images/project-1.jpg",
    category: "পানি ও স্বাস্থ্যবিধি",
    impact: "১০,০০০+ মানুষ পৌঁছানো হয়েছে",
  },
  {
    id: "2",
    title: "সবার জন্য শিক্ষা",
    description:
      "বিকাশশীল অঞ্চলে সুবিধাবঞ্চিত শিশুদের জন্য স্কুল নির্মাণ এবং বৃত্তি প্রদান করা।",
    image: "/images/project-2.jpg",
    category: "শিক্ষা",
    impact: "২,৫০০ শিক্ষার্থী সমর্থিত",
  },
  {
    id: "3",
    title: "স্বাস্থ্যসেবা অ্যাক্সেস",
    description:
      "মোবাইল চিকিৎসা ক্লিনিক দূরবর্তী এবং অপর্যাপ্ত সেবাপ্রাপ্ত এলাকায় অপরিহার্য স্বাস্থ্যসেবা প্রদান করছে।",
    image: "/images/project-3.jpg",
    category: "স্বাস্থ্যসেবা",
    impact: "৫০,০০০+ পরামর্শ",
  },
  {
    id: "4",
    title: "নারী ক্ষমতায়ন",
    description:
      "বৃত্তিমূলক প্রশিক্ষণ এবং মাইক্রোফিন্যান্স কর্মসূচি নারীদের অর্থনৈতিক স্বাধীনতা সক্ষম করছে।",
    image: "/images/project-4.jpg",
    category: "অর্থনৈতিক উন্নয়ন",
    impact: "১,২০০ নারী প্রশিক্ষিত",
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "সারা জনসন",
    role: "নির্বাহী পরিচালক",
    bio: "আন্তর্জাতিক উন্নয়ন এবং সম্প্রদায় স্বাস্থ্য কর্মসূচিতে ২০+ বছরের অভিজ্ঞতা।",
    image: "/images/team-1.jpg",
  },
  {
    id: "2",
    name: "মাইকেল চেন",
    role: "কর্মসূচি পরিচালক",
    bio: "টেকসই উন্নয়ন এবং দীর্ঘমেয়াদী সম্প্রদায় অংশীদারিত্ব গড়তে নিবেদিত।",
    image: "/images/team-2.jpg",
  },
  {
    id: "3",
    name: "আমারা ওকোনকওয়ো",
    role: "ক্ষেত্র অপারেশন নেতা",
    bio: "আফ্রিকার বিভিন্ন অঞ্চলে আমাদের উদ্যোগ পরিচালনাকারী স্থল নেতা।",
    image: "/images/team-3.jpg",
  },
  {
    id: "4",
    name: "জেমস রোড্রিগেজ",
    role: "অর্থ ও সম্মতি কর্মচারী",
    bio: "সকল দাতা অবদানের স্বচ্ছতা এবং দায়িত্বশীল তত্ত্বাবধান নিশ্চিত করা।",
    image: "/images/team-4.jpg",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "অলিউর রাহমান",
    role: "চেয়ারম্যান", 
    content:
      "এখনই সময়, নয়তো আর কখনো নয়! প্রিয় বন্ধু, আমাদের জীবনের সৌভাগ্যের জন্য সর্বশক্তিমানকে ধন্যবাদ জানানো উচিত। আমরা ভাগ্যবান যে আমাদের কঠোর পরিশ্রম ফলপ্রসূ হয়েছে। আমরা সকলেই সমাজ এবং আমাদের সহনাগরিকদের প্রতি কর্তব্যে আবদ্ধ। আমাদের উচিত অভাবগ্রস্ত ও অসহায়দের সাহায্য করার জন্য নিজেদের উৎসর্গ করা এবং প্রয়োজনে তাদের সাথে আমাদের সম্পদ ভাগ করে নেওয়া। আমরা আর হাত গুটিয়ে বসে অপেক্ষা করতে পারি না। যত্ন ও ভাগাভাগির এই মহৎ উদ্যোগে এগিয়ে এসে সমর্থন জানানোর এটাই সঠিক সময়। আমি আপনাকে নিশ্চয়তা দিচ্ছি যে আপনার প্রতিটি অবদান সম্পূর্ণরূপে এবং একচেটিয়াভাবে এই মহৎ কাজের জন্য ব্যবহৃত হবে। একসাথে আমরা আমাদের চারপাশের লক্ষ লক্ষ মানুষের জীবনে পরিবর্তন আনতে পারি। আপনার উদার অবদানের প্রত্যাশায় রইলাম। ধন্যবাদান্তে",
    avatar: "/images/testimonial-1.jpg",
  },
  // {
  //   id: "2",
  //   name: "আহমেদ হাসান",
  //   role: "শিক্ষক, সোমালিয়া",
  //   content:
  //     "তাদের শিক্ষা উদ্যোগের জন্য ধন্যবাদ, আমাদের স্কুল উন্নতি করছে। শিশুদের এখন তাদের ভবিষ্যতের জন্য প্রকৃত সুযোগ আছে।",
  //   avatar: "/images/testimonial-2.jpg",
  // },
  // {
  //   id: "3",
  //   name: "রোসা সান্তোস",
  //   role: "ব্যবসায়ী মালিক, পেরু",
  //   content:
  //     "নারী ক্ষমতায়ন কর্মসূচি আমাকে নিজের ব্যবসা শুরু করার দক্ষতা দিয়েছে। এখন আমি আমার পরিবারকে সমর্থন করতে পারি।",
  //   avatar: "/images/testimonial-3.jpg",
  // },
]

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "পানির কূপ স্থাপনা",
    description: "নতুন সম্পন্ন কূপে সম্প্রদায়ের সমাবেশ",
    image: "/images/gallery-1.jpg",
    category: "পানি প্রকল্প",
  },
  {
    id: "2",
    title: "স্কুল উদ্বোধন",
    description: "শিক্ষার্থীরা তাদের নতুন শ্রেণিকক্ষে",
    image: "/images/gallery-2.jpg",
    category: "শিক্ষা",
  },
  {
    id: "3",
    title: "চিকিৎসা শিবির",
    description: "সম্প্রদায় ক্লিনিকে বিনামূল্যে স্বাস্থ্য পরীক্ষা",
    image: "/images/gallery-3.jpg",
    category: "স্বাস্থ্যসেবা",
  },
  {
    id: "4",
    title: "প্রশিক্ষণ কর্মশালা",
    description: "বৃত্তিমূলক প্রশিক্ষণ কর্মসূচিতে নারীরা",
    image: "/images/gallery-4.jpg",
    category: "ক্ষমতায়ন",
  },
  {
    id: "5",
    title: "সম্প্রদায়ের স্বেচ্ছাসেবক",
    description: "প্রকল্প স্থানে স্থানীয় স্বেচ্ছাসেবকরা",
    image: "/images/gallery-5.jpg",
    category: "সম্প্রদায়",
  },
  {
    id: "6",
    title: "প্রভাব উদযাপন",
    description: "প্রকল্প মাইলফলক উদযাপন করছে সম্প্রদায়",
    image: "/images/gallery-6.jpg",
    category: "সম্প্রদায়",
  },
]

export const impactStats = [
  {
    number: 150000,
    label: "জীবন প্রভাবিত",
    suffix: "+",
  },
  {
    number: 45,
    label: "সক্রিয় প্রকল্প",
    suffix: "",
  },
  {
    number: 28,
    label: "দেশে সেবা প্রদান",
    suffix: "",
  },
  {
    number: 98,
    label: "% তহবিল থেকে কর্মসূচি",
    suffix: "",
  },
]
