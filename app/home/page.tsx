import Link from 'next/link';
import { ArrowRight, Crown, Sparkles } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';
export default function Page() {
  return (
    <main className="min-h-screen bg-obsidian text-ivory">
      <SiteHeader />
      <section className="mx-auto max-w-[1500px] border-x border-gold/10 px-5 py-16 md:px-10 md:py-24">
        <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.28em] text-gold">
          <Crown size={15} /> Welcome to the private salon
        </div>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-8">
          <h1 className="max-w-5xl font-serif text-6xl leading-[.86] tracking-[-.05em] md:text-9xl">
            Where ambition
            <br />
            <span className="italic text-gold">takes form.</span>
          </h1>
          <Link
            href="/market"
            className="glass-panel flex items-center gap-3 rounded-full px-7 py-4 text-[10px] font-black uppercase tracking-[.2em] text-gold transition hover:-translate-y-0.5"
          >
            View collection <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-[1500px] border-x border-gold/10 px-5 pb-24 md:px-10">
        <div className="mb-9 flex items-end justify-between border-t border-gold/15 pt-8">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[.25em] text-gold/60">
              Current acquisition
            </p>
            <h2 className="mt-2 font-serif text-4xl">The Signature Four</h2>
          </div>
          <span className="hidden text-[9px] uppercase tracking-[.2em] text-ivory/35 sm:block">
            Numbered · Hand-finished · Limited
          </span>
        </div>
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
      <section id="journal" className="border-y border-gold/20 bg-forest py-24">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 md:grid-cols-[1.15fr_.85fr] md:px-10">
          <div className="soft-card relative min-h-[620px] overflow-hidden">
            <img
              src="/gbp/five-piece.jpg"
              alt="GBP currency display in a luxury interior"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            <div className="absolute inset-x-7 bottom-7">
              <p className="text-[9px] uppercase tracking-[.24em] text-gold">
                The GBP Journal · Vol. 01
              </p>
              <h3 className="mt-3 max-w-xl font-serif text-4xl md:text-6xl">
                The psychology of a powerful room
              </h3>
            </div>
          </div>
          <div className="glass-panel flex flex-col justify-center rounded-[2rem] p-8 md:px-10">
            <Sparkles className="text-gold" />
            <p className="mt-7 font-serif text-3xl italic leading-snug text-gold">
              “Luxury whispers. Presence does not need permission.”
            </p>
            <p className="mt-6 leading-7 text-ivory/45">
              GBP creates conversation pieces for founders, collectors, private
              lounges, and interiors built around conviction.
            </p>
            <Link
              href="/market"
              className="mt-10 flex w-fit items-center gap-2 text-[9px] font-bold uppercase tracking-[.24em] text-gold"
            >
              Explore all pieces <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
