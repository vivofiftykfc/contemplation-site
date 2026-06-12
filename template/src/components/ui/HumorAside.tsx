import { Smile } from "lucide-react";

interface HumorAsideProps {
  text: string;
}

export default function HumorAside({ text }: HumorAsideProps) {
  return (
    <div className="my-6 flex gap-3 rounded-sm border border-dashed border-text-muted/20 bg-surface/40 p-4">
      <Smile size={16} className="mt-0.5 shrink-0 text-text-muted" />
      <p className="text-sm leading-relaxed text-text-muted italic">{text}</p>
    </div>
  );
}
