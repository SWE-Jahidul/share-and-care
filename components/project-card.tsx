import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  impact: string
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  category,
  impact,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <Badge variant="secondary" className="mb-3">
            {category}
          </Badge>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">{impact}</span>
            <span className="text-xs text-muted-foreground">Learn more →</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
