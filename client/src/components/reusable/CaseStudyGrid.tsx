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
    <section className="py-20 px-4 bg-white text-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-case-studies-title">
        Success Stories
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="p-8 rounded-xl bg-gray-50 border border-gray-200"
            data-testid={`case-study-${index}`}
          >
            <div className="text-sm font-semibold text-[#ea580c] mb-3">{study.client}</div>
            <div className="mb-4">
              <span className="font-semibold">Problem: </span>
              <span className="text-gray-700">{study.problem}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Solution: </span>
              <span className="text-gray-700">{study.solution}</span>
            </div>
            <div className="p-4 bg-[#c4ff4d]/10 border border-[#c4ff4d]/30 rounded-lg">
              <span className="font-semibold text-gray-900">Result: </span>
              <span className="text-gray-900">{study.result}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
