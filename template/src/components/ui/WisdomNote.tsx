import { Sparkles } from "lucide-react";

interface WisdomNoteProps {
  text: string;
  source?: string;
}

export default function WisdomNote({ text, source }: WisdomNoteProps) {
  return (
    <div className="my-8 flex gap-4 rounded-sm border border-accent-dim/20 bg-accent/[0.03] p-5">
      <Sparkles size={18} className="mt-0.5 shrink-0 text-accent" />
      <div>
        <p className="text-sm leading-relaxed text-text-secondary">{text}</p>
        {source && (
          <p className="mt-2 text-xs text-text-muted">—— {source}</p>
        )}
      </div>
    </div>
  );
}
