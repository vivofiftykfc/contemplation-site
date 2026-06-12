import { useState } from "react";
import { ChevronDown, ChevronUp, Microscope } from "lucide-react";

interface DeepDiveProps {
  title: string;
  text: string;
}

export default function DeepDive({ title, text }: DeepDiveProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-8 rounded-sm border border-divider bg-surface/40 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3 text-left hover:bg-surface/60 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Microscope size={14} className="text-accent-dim" />
          <span className="text-xs tracking-wider text-accent-dim uppercase">深入探索 · {title}</span>
        </div>
        {open ? <ChevronUp size={14} className="text-text-muted" /> : <ChevronDown size={14} className="text-text-muted" />}
      </button>
      {open && (
        <div className="border-t border-divider px-5 py-4">
          <p className="text-sm leading-relaxed text-text-secondary">{text}</p>
        </div>
      )}
    </div>
  );
}
