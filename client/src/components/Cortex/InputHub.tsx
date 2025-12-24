import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MessageSquare, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface InputHubProps {
  onSubmit: (data: { type: string; value: string }) => void;
}

export default function InputHub({ onSubmit }: InputHubProps) {
  const [activeTab, setActiveTab] = useState<"url" | "text">("text");
  const [urlValue, setUrlValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleSubmit = () => {
    if (activeTab === "url" && urlValue.trim()) {
      onSubmit({ type: "url", value: urlValue.trim() });
    } else if (activeTab === "text" && textValue.trim()) {
      onSubmit({ type: "text", value: textValue.trim() });
    }
  };

  const isValid = activeTab === "url" ? urlValue.trim().length > 0 : textValue.trim().length > 10;

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-medium mb-4">
          <Zap className="w-3 h-3" /> OARC CORTEX ENGINE
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Initiate Business Scan
        </h2>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          Provide context about your business and our AI will identify hidden revenue leaks and strategic opportunities.
        </p>
      </motion.div>

      {/* Tab Selector */}
      <div className="flex gap-2 mb-6 p-1 bg-zinc-900/50 rounded-lg border border-white/5">
        <button
          onClick={() => setActiveTab("text")}
          data-testid="tab-text"
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === "text"
              ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          Describe Pain Points
        </button>
        <button
          onClick={() => setActiveTab("url")}
          data-testid="tab-url"
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === "url"
              ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Globe className="w-4 h-4" />
          Website URL
        </button>
      </div>

      {/* Input Area */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mb-6"
      >
        {activeTab === "url" ? (
          <div className="space-y-2">
            <Input
              type="url"
              placeholder="https://yourwebsite.com"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              data-testid="input-url"
              className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 h-12 text-base"
            />
            <p className="text-xs text-zinc-500">We'll analyze your website's structure and content.</p>
          </div>
        ) : (
          <div className="space-y-2">
            <Textarea
              placeholder="Example: We're an e-commerce brand struggling with cart abandonment. Our ads are expensive and we don't know if our content strategy is working..."
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              data-testid="input-text"
              className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 min-h-[150px] text-base resize-none"
            />
            <p className="text-xs text-zinc-500">Be specific. The more detail you provide, the sharper the analysis.</p>
          </div>
        )}
      </motion.div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        disabled={!isValid}
        size="lg"
        data-testid="button-submit-scan"
        className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white border-0 h-12 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Initialize Deep Scan
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
}
