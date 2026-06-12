import { useState } from "react";
import { Pencil, ChevronDown, ChevronUp } from "lucide-react";

interface InteractivePromptProps {
  prompt: string;
  hint?: string;
}

export default function InteractivePrompt({ prompt, hint }: InteractivePromptProps) {
  const [showHint, setShowHint] = useState(false);
  const [note, setNote] = useState("");

  return (
    <div className="my-8 rounded-sm border border-accent-dim/30 bg-surface/50 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-divider px-5 py-2.5 bg-accent/5">
        <Pencil size={14} className="text-accent" />
        <span className="text-xs tracking-wider text-accent-dim uppercase">停下来，想一想</span>
      </div>
      <div className="px-5 py-4">
        <p className="text-sm leading-relaxed text-text-secondary">{prompt}</p>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="在这里写下你的思考..."
          rows={3}
          className="mt-3 w-full rounded-sm border border-divider bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent-dim focus:outline-none resize-none"
        />
        {hint && (
          <div className="mt-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors"
            >
              {showHint ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              一点提示
            </button>
            {showHint && (
              <p className="mt-1.5 text-xs leading-relaxed text-text-muted italic">
                {hint}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
