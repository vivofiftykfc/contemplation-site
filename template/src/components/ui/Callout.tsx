import { Lightbulb, HelpCircle, Link2, FlaskConical, BookOpen, Sparkles, Smile, Gem } from "lucide-react";
import { CalloutType } from "../../types/content";

interface CalloutProps {
  type: CalloutType;
  text: string;
}

const icons: Record<CalloutType, typeof Lightbulb> = {
  insight: Lightbulb,
  question: HelpCircle,
  connection: Link2,
  experiment: FlaskConical,
  story: BookOpen,
  reflection: Sparkles,
  humor: Smile,
  wisdom: Gem,
};

const labels: Record<CalloutType, string> = {
  insight: "洞见",
  question: "思考",
  connection: "关联",
  experiment: "实验",
  story: "故事",
  reflection: "沉思",
  humor: "趣谈",
  wisdom: "智慧",
};

export default function Callout({ type, text }: CalloutProps) {
  const Icon = icons[type];

  return (
    <div className="my-8 flex gap-4 rounded-sm border border-divider bg-surface/50 p-5">
      <div className="mt-0.5 shrink-0 text-accent-dim">
        <Icon size={20} />
      </div>
      <div>
        <p className="mb-1 text-xs tracking-wider text-accent-dim uppercase">{labels[type]}</p>
        <p className="text-sm leading-relaxed text-text-secondary">{text}</p>
      </div>
    </div>
  );
}
