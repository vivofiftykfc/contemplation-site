import { Link } from "react-router-dom";
import { ArrowRight, Clock, GitGraph, BookMarked, Sparkles } from "lucide-react";
import PageTransition from "../components/motion/PageTransition";
import ScrollReveal from "../components/motion/ScrollReveal";
import TextStagger from "../components/motion/TextStagger";
import DustParticles from "../components/motion/DustParticles";
import { chapters } from "../data/chapters";

export default function Home() {
  return (
    <PageTransition>
      <DustParticles />

      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-20 text-center">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.3em] text-accent-dim uppercase">
            心理学 · 沉思录
          </p>
        </ScrollReveal>

        <div className="mt-8">
          <TextStagger
            text="认识你自己"
            el="h1"
            className="font-display text-6xl font-bold leading-tight tracking-tight lg:text-8xl"
          />
        </div>

        <ScrollReveal delay={0.3}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary">
            这不是一本教科书。这是一场穿越人类自我理解史的旅程——从古希腊的追问到当代的神经科学，从弗洛伊德的躺椅到你此刻正在阅读的大脑。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-muted">
            在这里，你会遇到改变心理学的故事、值得抄在笔记本上的话语、让你停下来思考的问题，以及——更重要的是——关于你自己的发现。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/chapter/prologue"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-base transition-all hover:bg-accent-glow hover:shadow-[0_0_24px_rgba(200,169,110,0.15)]"
            >
              开始阅读
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 rounded-sm border border-divider px-6 py-3 text-sm text-text-secondary transition-all hover:border-accent-dim hover:text-accent"
            >
              <Clock size={16} />
              时间轴
            </Link>
            <Link
              to="/theory-map"
              className="inline-flex items-center gap-2 rounded-sm border border-divider px-6 py-3 text-sm text-text-secondary transition-all hover:border-accent-dim hover:text-accent"
            >
              <GitGraph size={16} />
              理论图谱
            </Link>
            <Link
              to="/glossary"
              className="inline-flex items-center gap-2 rounded-sm border border-divider px-6 py-3 text-sm text-text-secondary transition-all hover:border-accent-dim hover:text-accent"
            >
              <BookMarked size={16} />
              术语表
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.7}>
          <div className="mt-20 max-w-lg mx-auto">
            <blockquote className="relative border-l-2 border-accent-dim/50 pl-6 text-left">
              <p className="font-display text-base italic leading-relaxed text-text-secondary">
                &ldquo;谁向外看，他就在梦中；谁向内看，他就会醒来。&rdquo;
              </p>
              <cite className="mt-2 block text-xs tracking-wide text-text-muted uppercase not-italic">
                — 卡尔·荣格
              </cite>
            </blockquote>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.9}>
          <div className="mt-24 mb-16 max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={14} className="text-accent-dim" />
              <p className="font-display text-sm text-accent-dim">探索全部章节</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.filter(c => c.number > 0).map((ch) => (
                <Link
                  key={ch.slug}
                  to={`/chapter/${ch.slug}`}
                  className="group rounded-sm border border-divider bg-surface/50 p-4 text-left transition-all hover:border-accent-dim hover:bg-surface"
                >
                  <p className="font-mono text-xs text-accent-dim">
                    第{ch.number}章
                  </p>
                  <p className="mt-1 font-display text-sm text-text-primary transition-colors group-hover:text-accent">
                    {ch.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-text-muted line-clamp-2">
                    {ch.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1.0}>
          <p className="mb-16 text-xs text-text-muted/50">
            每一章都是一个视角。每读完一章，你都会多了解人类一点点——也多了解自己一点点。
          </p>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
