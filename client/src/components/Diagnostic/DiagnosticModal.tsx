import { X } from 'lucide-react';
import CortexContainer from '../Cortex/CortexContainer';

interface DiagnosticModalProps {
    onClose: () => void;
}

export default function DiagnosticModal({ onClose }: DiagnosticModalProps) {
    return (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0c] rounded-2xl border border-white/10 shadow-2xl">
                <button
                    onClick={onClose}
                    data-testid="button-close-diagnostic"
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
                <CortexContainer />
            </div>
        </div>
    );
}
