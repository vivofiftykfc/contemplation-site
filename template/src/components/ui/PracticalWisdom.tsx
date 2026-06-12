import { Hand } from "lucide-react";

interface PracticalWisdomProps {
  title: string;
  text: string;
}

export default function PracticalWisdom({ title, text }: PracticalWisdomProps) {
  return (
    <div className="my-8 rounded-sm border border-accent-dim/25 bg-surface/50 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-divider px-5 py-2.5 bg-accent/5">
        <Hand size={14} className="text-accent" />
        <span className="text-xs tracking-wider text-accent-dim uppercase">{title}</span>
      </div>
      <div className="px-5 py-3.5">
        <p className="text-sm leading-relaxed text-text-secondary">{text}</p>
      </div>
    </div>
  );
}
