import Image from "next/image"

interface GalleryCardProps {
  title: string
  description: string
  image: string
  category: string
}

export function GalleryCard({
  title,
  description,
  image,
  category,
}: GalleryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-muted h-64">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
  )
}
