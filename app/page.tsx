import Link from 'next/link';
import { ArrowUpRight, Menu, ShoppingBag } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-ink text-cream">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 md:px-10">
        <Link href="/" className="text-xl font-black tracking-[-.06em]">NOVA/</Link>
        <div className="hidden items-center gap-8 text-sm text-cream/70 md:flex">
          <Link href="/market">Market</Link><a href="#story">Our story</a><a href="#news">Journal</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-sm font-medium sm:block">Sign in</Link>
          <Link href="/signup" className="rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-ink">Join NOVA</Link>
          <button aria-label="Open menu" className="md:hidden"><Menu size={20}/></button>
        </div>
      </nav>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 pb-8 pt-10 md:grid-cols-[1.02fr_.98fr] md:px-10 md:pb-12 md:pt-20">
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[.2em] text-lime">Curated objects · Edition 01</p>
            <h1 className="max-w-[760px] text-[clamp(4.6rem,9.2vw,9.5rem)] font-black leading-[.78] tracking-[-.08em]">LESS,<br/>BUT <span className="font-serif font-normal italic text-lime">better.</span></h1>
            <p className="mt-9 max-w-md text-base leading-7 text-cream/60">A considered marketplace for beautifully useful things. Independent design, honest materials, and objects built to stay.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/market" className="flex items-center gap-3 rounded-full bg-cream px-6 py-3.5 font-bold text-ink">Explore the market <ArrowUpRight size={18}/></Link>
            <Link href="/signup" className="rounded-full border border-cream/20 px-6 py-3.5 font-semibold">Create account</Link>
          </div>
        </div>
        <Link href="/product/arc-lamp" className="group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#d7cfbf] md:min-h-[650px]">
          <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=90" alt="Sculptural Arc table lamp" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/>
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between rounded-[1.35rem] bg-ink/90 p-5 backdrop-blur md:inset-x-7 md:bottom-7">
            <div><p className="text-xs uppercase tracking-[.16em] text-cream/50">Object 001</p><h2 className="mt-1 text-xl font-bold">Arc Table Lamp</h2></div>
            <div className="flex items-center gap-4"><span className="text-lg font-bold">$189</span><span className="grid h-11 w-11 place-items-center rounded-full bg-lime text-ink"><ShoppingBag size={18}/></span></div>
          </div>
        </Link>
      </section>
      <div className="border-y border-cream/10 py-4 text-center text-xs font-bold uppercase tracking-[.26em] text-cream/50">Free delivery over $150 · 30 day returns · Secure FIB checkout</div>
    </main>
  );
}
