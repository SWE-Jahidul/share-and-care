import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar: string
}

export function TestimonialCard({
  name,
  role,
  content,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-primary text-primary"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-foreground mb-6 leading-relaxed text-balance">
        &quot;{content}&quot;
      </p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
