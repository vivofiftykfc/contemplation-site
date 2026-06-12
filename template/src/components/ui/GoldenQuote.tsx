interface GoldenQuoteProps {
  quote: string;
  author: string;
  authorTitle?: string;
  commentary: string;
}

export default function GoldenQuote({ quote, author, authorTitle, commentary }: GoldenQuoteProps) {
  return (
    <figure className="my-12 flex flex-col items-center text-center px-4">
      <div className="relative">
        <span className="absolute -top-6 -left-4 text-6xl font-serif text-accent-dim/30 leading-none select-none">
          &ldquo;
        </span>
        <blockquote className="relative font-display text-xl lg:text-2xl leading-relaxed text-text-primary italic">
          {quote}
        </blockquote>
        <span className="absolute -bottom-10 -right-4 text-6xl font-serif text-accent-dim/30 leading-none select-none">
          &rdquo;
        </span>
      </div>
      <figcaption className="mt-6">
        <span className="text-sm font-medium text-accent">—— {author}</span>
        {authorTitle && (
          <span className="text-xs text-text-muted ml-1">{authorTitle}</span>
        )}
      </figcaption>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-muted">
        {commentary}
      </p>
    </figure>
  );
}
