import LivingAIInterface from "../ai/LivingAIInterface";

export default function FloatingDock() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <LivingAIInterface />
    </div>
  );
}
