/** Open ARC from H360 with value-first restaurant audit framing. */
export function openH360Arc(restaurantName?: string) {
  if (typeof window === 'undefined') return;

  const trimmed = restaurantName?.trim();
  const prompt = trimmed
    ? `My restaurant is "${trimmed}" in Malta. Give me a quick honest audit — what's likely broken on Google Maps, reviews, and margin (Wolt/Bolt vs direct orders)? Diagnosis first, no sales pitch.`
    : `I run a restaurant in Malta. Give me a quick honest audit — what's likely broken on Google Maps, reviews, and margin? Diagnosis first, not a sales pitch.`;

  window.dispatchEvent(
    new CustomEvent('arc:open', {
      detail: { prompt, contextMode: 'h360' as const },
    }),
  );
}
