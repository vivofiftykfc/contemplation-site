import { BookOpen } from "lucide-react";

interface StoryCardProps {
  title: string;
  narrative: string;
  takeaway: string;
  source?: string;
}

export default function StoryCard({ title, narrative, takeaway, source }: StoryCardProps) {
  return (
    <div className="my-10 rounded-sm border border-accent-dim/30 bg-surface/60 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-divider px-5 py-3 bg-accent/5">
        <BookOpen size={16} className="text-accent" />
        <span className="font-display text-sm text-accent">案例 · {title}</span>
      </div>
      <div className="px-5 py-4">
        <p className="leading-[1.85] text-text-secondary">{narrative}</p>
        <div className="mt-4 border-t border-divider pt-3">
          <p className="text-sm leading-relaxed text-accent">
            <span className="font-semibold">启示：</span>{takeaway}
          </p>
        </div>
        {source && (
          <p className="mt-2 text-xs text-text-muted">—— {source}</p>
        )}
      </div>
    </div>
  );
}
