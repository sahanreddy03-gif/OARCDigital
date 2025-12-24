import { useState } from 'react';
import DiagnosticModal from './DiagnosticModal';

export default function DiagnosticFloatingButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                data-testid="button-diagnostic-floating"
                className="bg-[#1a1a1f] hover:bg-[#252530] border border-gray-700 hover:border-green-500/50 text-white px-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-2 group"
            >
                <span className="text-sm font-medium">What's really costing you?</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {isOpen && (
                <DiagnosticModal onClose={() => setIsOpen(false)} />
            )}
        </>
    );
}
