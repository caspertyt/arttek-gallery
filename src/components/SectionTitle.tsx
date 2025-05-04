interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <div className="relative inline-block">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
} 