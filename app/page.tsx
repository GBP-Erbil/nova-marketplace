import Link from 'next/link';
import { ArrowUpRight, Crown, Gem, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-obsidian text-ivory">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between border-b border-gold/20 px-5 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative grid h-11 w-11 overflow-hidden rounded-full border border-gold/40 bg-stone-500"><img src="/gbp/logo.jpg" alt="GBP logo" className="h-full w-full scale-[2.6] object-cover"/></span>
          <span><strong className="block font-serif text-xl tracking-[.13em] text-gold">GBP</strong><small className="hidden text-[8px] uppercase tracking-[.24em] text-ivory/45 sm:block">Global Billionaires Products</small></span>
        </Link>
        <div className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[.18em] text-ivory/60 md:flex"><Link href="/market">The collection</Link><a href="#legacy">Our legacy</a><a href="#concierge">Concierge</a></div>
        <div className="flex items-center gap-3"><Link href="/login" className="hidden text-xs font-bold uppercase tracking-[.14em] sm:block">Private access</Link><Link href="/market" className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold"><ShoppingBag size={17}/></Link></div>
      </nav>

      <section className="relative mx-auto grid min-h-[calc(100vh-86px)] max-w-[1500px] overflow-hidden lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-20 md:px-12 lg:py-24">
          <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-gold"><span className="h-px w-10 bg-gold"/> Private Collection · 2026</div>
          <h1 className="font-serif text-[clamp(4.2rem,8vw,9.2rem)] leading-[.82] tracking-[-.055em]">Own the<br/><span className="italic text-gold">symbol.</span></h1>
          <p className="mt-8 max-w-lg text-base leading-7 text-ivory/50">Statement displays for those who understand that wealth is more than currency—it is presence, discipline, and legacy.</p>
          <div className="mt-10 flex flex-wrap gap-3"><Link href="/market" className="flex items-center gap-3 bg-gold px-7 py-4 text-xs font-black uppercase tracking-[.16em] text-obsidian">Enter collection <ArrowUpRight size={17}/></Link><Link href="/signup" className="border border-ivory/20 px-7 py-4 text-xs font-bold uppercase tracking-[.16em]">Join the private list</Link></div>
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-3 border-t border-gold/15 pt-7 text-center"><div><Crown className="mx-auto mb-2 text-gold" size={18}/><span className="text-[9px] uppercase tracking-[.18em] text-ivory/40">Limited editions</span></div><div><Gem className="mx-auto mb-2 text-gold" size={18}/><span className="text-[9px] uppercase tracking-[.18em] text-ivory/40">Collector grade</span></div><div><ShieldCheck className="mx-auto mb-2 text-gold" size={18}/><span className="text-[9px] uppercase tracking-[.18em] text-ivory/40">Secure checkout</span></div></div>
        </div>
        <Link href="/product/three-tier-currency" className="group relative min-h-[620px] overflow-hidden border-l border-gold/15 bg-[#171611]">
          <img src="/gbp/three-piece.jpg" alt="GBP three tier currency display" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.025] group-hover:opacity-95"/>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30"/>
          <div className="absolute left-6 top-6 border border-gold/40 bg-obsidian/75 px-4 py-2 text-[9px] font-bold uppercase tracking-[.22em] text-gold backdrop-blur">GBP Signature</div>
          <div className="absolute inset-x-7 bottom-8 flex items-end justify-between border-t border-gold/40 pt-5"><div><p className="text-[9px] uppercase tracking-[.24em] text-gold">Edition 003</p><h2 className="mt-2 font-serif text-3xl">The Sovereign III</h2></div><span className="font-serif text-2xl text-gold">$1,250</span></div>
        </Link>
      </section>
      <div className="border-y border-gold/20 bg-forest py-4 text-center text-[9px] font-bold uppercase tracking-[.32em] text-gold">Global Billionaires Products · Designed for the rooms that decide the future</div>
    </main>
  );
}
