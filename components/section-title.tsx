interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  )
}
