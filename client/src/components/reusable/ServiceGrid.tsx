interface ServiceItem {
  text: string;
}

interface ServiceGridProps {
  items: ServiceItem[] | string[];
  title?: string;
}

export default function ServiceGrid({ items, title }: ServiceGridProps) {
  return (
    <section className="py-16 px-4">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-service-grid-title">
          {title}
        </h2>
      )}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => {
          const text = typeof item === 'string' ? item : item.text;
          return (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#c4ff4d]/30 transition-all duration-200"
              data-testid={`service-item-${index}`}
            >
              <p className="text-gray-200">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
