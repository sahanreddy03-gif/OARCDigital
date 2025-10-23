const services = [
  "Marketing Strategy",
  "Social Media Management",
  "AI Video Production",
  "Branding Services",
  "Rapid Idea Testing",
  "Lead Generation",
  "Creative Ad Campaigns",
  "Customer Acquisition Strategy",
  "Funnel Automation",
  "AI Copywriting",
  "Website Design",
  "Admin AI Employees",
  "Sales AI Employees",
  "Support AI Employees",
];

export default function FloatingChipCarousel() {
  const duplicatedServices = [...services, ...services];

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicatedServices.map((service, index) => (
          <div key={index} className="inline-flex items-center">
            <span className="px-6 py-2 text-sm md:text-base font-medium text-foreground/70">
              {service}
            </span>
            <span className="text-foreground/30 mx-2">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
