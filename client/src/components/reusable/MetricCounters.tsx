interface Metric {
  value: string;
  label: string;
  description?: string;
}

interface MetricCountersProps {
  metrics: Metric[];
}

export default function MetricCounters({ metrics }: MetricCountersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-12">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          data-testid={`metric-${index}`}
        >
          <div className="text-4xl md:text-5xl font-bold text-[#c4ff4d] mb-2" data-testid={`metric-value-${index}`}>
            {metric.value}
          </div>
          <div className="text-lg font-semibold text-white mb-1" data-testid={`metric-label-${index}`}>
            {metric.label}
          </div>
          {metric.description && (
            <div className="text-sm text-gray-400" data-testid={`metric-description-${index}`}>
              {metric.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
