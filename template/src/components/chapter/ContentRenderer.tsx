import { ChapterSection, ContentBlock } from "../../types/content";
import Callout from "../ui/Callout";
import StoryCard from "../ui/StoryCard";
import GoldenQuote from "../ui/GoldenQuote";
import WisdomNote from "../ui/WisdomNote";
import HumorAside from "../ui/HumorAside";
import PracticalWisdom from "../ui/PracticalWisdom";
import InteractivePrompt from "../ui/InteractivePrompt";
import DeepDive from "../ui/DeepDive";

interface Props {
  section: ChapterSection;
}

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={idx} className="leading-[1.85] text-text-secondary">
          {block.text}
        </p>
      );
    case "story":
      return (
        <StoryCard
          key={idx}
          title={block.title}
          narrative={block.narrative}
          takeaway={block.takeaway}
          source={block.source}
        />
      );
    case "golden":
      return (
        <GoldenQuote
          key={idx}
          quote={block.quote}
          author={block.author}
          authorTitle={block.authorTitle}
          commentary={block.commentary}
        />
      );
    case "wisdom":
      return (
        <WisdomNote key={idx} text={block.text} source={block.source} />
      );
    case "humor":
      return <HumorAside key={idx} text={block.text} />;
    case "practical":
      return (
        <PracticalWisdom key={idx} title={block.title} text={block.text} />
      );
    case "interactive":
      return (
        <InteractivePrompt key={idx} prompt={block.prompt} hint={block.hint} />
      );
    case "deepdive":
      return <DeepDive key={idx} title={block.title} text={block.text} />;
    default:
      return null;
  }
}

export default function ContentRenderer({ section }: Props) {
  return (
    <section id={section.id} className="mb-16 scroll-mt-24">
      <h2 className="font-display text-2xl font-semibold tracking-tight lg:text-3xl">
        {section.title}
      </h2>

      <div className="mt-6 space-y-5">
        {section.content.map((block, i) => renderBlock(block, i))}
      </div>

      {section.callout && (
        <Callout type={section.callout.type} text={section.callout.text} />
      )}
    </section>
  );
}
