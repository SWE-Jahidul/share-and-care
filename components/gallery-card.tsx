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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
          {category}
        </p>
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-white/90 text-sm">{description}</p>
      </div>
    </div>
  )
}
