interface Step {
  step: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="text-how-it-works-title">
        How It Works
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.step}
            className="relative text-center"
            data-testid={`step-${step.step}`}
          >
            <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-[#c4ff4d] flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900" data-testid={`step-number-${step.step}`}>
                {step.step}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3" data-testid={`step-title-${step.step}`}>
              {step.title}
            </h3>
            <p className="text-gray-400" data-testid={`step-description-${step.step}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
