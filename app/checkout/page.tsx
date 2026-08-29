'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ChevronLeft,
  CreditCard,
  LockKeyhole,
  QrCode,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { useShop } from '@/components/shop-provider';
import { money, products } from '@/lib/products';
export default function Page() {
  const { cart } = useShop();
  const [pay, setPay] = useState<'fib' | 'card'>('fib');
  const [done, setDone] = useState(false);
  const items = products.filter((p) => cart[p.id]);
  const total = items.reduce((s, p) => s + p.price * cart[p.id], 0);
  if (done)
    return (
      <main className="grid min-h-screen place-items-center bg-obsidian px-5 text-ivory">
        <div className="max-w-lg text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold bg-gold text-obsidian">
            <Check size={34} />
          </div>
          <p className="mt-8 text-[9px] font-bold uppercase tracking-[.28em] text-gold">
            Acquisition confirmed
          </p>
          <h1 className="mt-3 font-serif text-6xl">Welcome to ownership.</h1>
          <p className="mt-5 leading-7 text-ivory/45">
            Your demonstration order{' '}
            <strong className="text-gold">#GBP-2026</strong> has been reserved.
            No real payment was processed.
          </p>
          <Link
            href="/home"
            className="mt-8 inline-flex bg-gold px-7 py-4 text-[9px] font-black uppercase tracking-[.2em] text-obsidian"
          >
            Return to salon
          </Link>
        </div>
      </main>
    );
  return (
    <main className="min-h-screen bg-obsidian text-ivory">
      <header className="border-b border-gold/20">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 md:px-10">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.16em] text-gold"
          >
            <ChevronLeft size={15} /> Your bag
          </Link>
          <Link
            href="/"
            className="font-serif text-xl tracking-[.14em] text-gold"
          >
            GBP
          </Link>
          <span className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.16em] text-ivory/35">
            <LockKeyhole size={13} /> Private checkout
          </span>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-12 md:px-10 lg:grid-cols-[1fr_420px] lg:py-16">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <p className="text-[9px] font-bold uppercase tracking-[.26em] text-gold">
            Acquisition details
          </p>
          <h1 className="mt-3 font-serif text-5xl tracking-[-.045em] md:text-6xl">
            Delivery & payment
          </h1>
          <section className="mt-10">
            <h2 className="font-serif text-2xl">Private contact</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ['Email address', 'email'],
                ['First name', 'text'],
                ['Last name', 'text'],
                ['Delivery address', 'text'],
                ['City', 'text'],
                ['Phone number', 'tel'],
              ].map(([label, type], i) => (
                <input
                  key={label}
                  required
                  type={type}
                  placeholder={label}
                  className={`glass-panel h-14 rounded-2xl px-4 text-sm text-ivory outline-none placeholder:text-ivory/25 focus:border-gold ${i === 0 || i === 3 ? 'sm:col-span-2' : ''}`}
                />
              ))}
            </div>
          </section>
          <section className="mt-10">
            <h2 className="font-serif text-2xl">Payment method</h2>
            <p className="mt-1 text-xs text-ivory/35">
              Select your preferred secure channel.
            </p>
            <div className="mt-4 grid gap-3">
              <button
                type="button"
                onClick={() => setPay('fib')}
                className={`glass-panel flex items-center gap-4 rounded-[1.5rem] p-5 text-left ${pay === 'fib' ? 'border-gold bg-gold/[.07] shadow-[0_14px_38px_rgb(201_168_91/.09)]' : ''}`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#18a77b] font-black text-white shadow-[inset_0_1px_0_rgb(255_255_255/.2)]">
                  FIB
                </span>
                <span className="flex-1">
                  <strong className="block font-serif text-lg">
                    First Iraqi Bank
                  </strong>
                  <span className="text-xs text-ivory/35">
                    Complete securely in the FIB mobile app
                  </span>
                </span>
                <span
                  className={`h-5 w-5 rounded-full border-[5px] ${pay === 'fib' ? 'border-gold' : 'border-ivory/20'}`}
                />
              </button>
              <button
                type="button"
                onClick={() => setPay('card')}
                className={`glass-panel flex items-center gap-4 rounded-[1.5rem] p-5 text-left ${pay === 'card' ? 'border-gold bg-gold/[.07] shadow-[0_14px_38px_rgb(201_168_91/.09)]' : ''}`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/30 text-gold">
                  <CreditCard size={20} />
                </span>
                <span className="flex-1">
                  <strong className="block font-serif text-lg">
                    Private card
                  </strong>
                  <span className="text-xs text-ivory/35">
                    Visa or Mastercard
                  </span>
                </span>
                <span
                  className={`h-5 w-5 rounded-full border-[5px] ${pay === 'card' ? 'border-gold' : 'border-ivory/20'}`}
                />
              </button>
            </div>
            {pay === 'fib' ? (
              <div className="mt-4 rounded-[1.5rem] border border-[#18a77b]/35 bg-[#18a77b]/10 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/.05)] backdrop-blur-xl">
                <div className="flex gap-4">
                  <QrCode className="shrink-0 text-[#3ec39d]" size={32} />
                  <div>
                    <h3 className="font-serif text-lg text-[#6bd8b8]">
                      FIB payment · demonstration
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-[#80cdb7]/70">
                      A merchant QR code or payment link will appear here after
                      official FIB credentials are connected. No transaction
                      occurs in this demonstration.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.16em] text-[#6bd8b8]">
                      <Smartphone size={13} /> Complete in the FIB app
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4 grid gap-3 border border-gold/15 p-5 sm:grid-cols-2">
                <input
                  required={pay === 'card'}
                  placeholder="Card number"
                  className="h-12 border border-gold/20 bg-transparent px-4 text-ivory outline-none sm:col-span-2"
                />
                <input
                  required={pay === 'card'}
                  placeholder="MM / YY"
                  className="h-12 border border-gold/20 bg-transparent px-4 text-ivory outline-none"
                />
                <input
                  required={pay === 'card'}
                  placeholder="CVC"
                  className="h-12 border border-gold/20 bg-transparent px-4 text-ivory outline-none"
                />
              </div>
            )}
          </section>
          <button className="mt-7 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-gold text-[9px] font-black uppercase tracking-[.2em] text-obsidian shadow-[0_14px_40px_rgb(201_168_91/.18),inset_0_1px_0_rgb(255_255_255/.35)]">
            <LockKeyhole size={15} /> Confirm demo acquisition · {money(total)}
          </button>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-[8px] uppercase tracking-[.13em] text-ivory/25">
            <ShieldCheck size={13} /> Encrypted checkout · Payment data is never
            stored
          </p>
        </form>
        <aside className="glass-panel order-first h-fit rounded-[2rem] bg-forest/65 p-6 lg:order-last lg:sticky lg:top-28">
          <p className="text-[8px] font-bold uppercase tracking-[.24em] text-gold">
            Your collection
          </p>
          <h2 className="mt-2 font-serif text-2xl">Acquisition summary</h2>
          <div className="mt-6 space-y-4">
            {items.map((p) => (
              <div key={p.id} className="flex items-center gap-4">
                <div className="relative h-24 w-17 overflow-hidden rounded-2xl border border-gold/15 shadow-[0_12px_28px_rgb(0_0_0/.25)]">
                  <img
                    src={p.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center bg-gold px-1 text-[9px] font-black text-obsidian">
                    {cart[p.id]}
                  </span>
                </div>
                <div className="flex-1">
                  <strong className="font-serif">{p.name}</strong>
                  <p className="mt-1 text-[8px] uppercase tracking-[.15em] text-ivory/30">
                    {p.category}
                  </p>
                </div>
                <span className="font-serif text-gold">
                  {money(p.price * cart[p.id])}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3 border-t border-gold/15 pt-5 text-xs">
            <div className="flex justify-between text-ivory/40">
              <span>Collection value</span>
              <span>{money(total)}</span>
            </div>
            <div className="flex justify-between text-ivory/40">
              <span>Delivery</span>
              <span>Included</span>
            </div>
            <div className="flex justify-between pt-2 font-serif text-2xl">
              <span>Total</span>
              <span className="text-gold">{money(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
