interface CaseStudy {
  client: string;
  problem: string;
  solution: string;
  result: string;
}

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  return (
    <section className="relative py-20 px-4 bg-white text-gray-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c4ff4d]/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c4ff4d]/5 rounded-full blur-3xl"></div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative" data-testid="text-case-studies-title">
        Success Stories
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="glass-lime p-8 rounded-xl hover-lift"
            data-testid={`case-study-${index}`}
          >
            <div className="text-sm font-semibold text-[#ea580c] mb-3">{study.client}</div>
            <div className="mb-4">
              <span className="font-semibold">Challenge: </span>
              <span className="text-gray-700">{study.problem}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Approach: </span>
              <span className="text-gray-700">{study.solution}</span>
            </div>
            <div className="p-4 bg-[#c4ff4d]/15 border border-[#c4ff4d]/40 rounded-lg glow-lime-subtle">
              <span className="font-semibold text-gray-900">Impact: </span>
              <span className="text-gray-900">{study.result}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
