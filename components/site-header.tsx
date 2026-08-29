'use client';
import { LogOut, Search, ShoppingBag, UserRound } from 'lucide-react';
import { useShop } from './shop-provider';

export function SiteHeader() {
  const { count, signedIn, signOut } = useShop();
  const iconClass =
    'grid h-10 w-10 place-items-center rounded-full border border-gold/25 bg-ivory/[.035] text-gold shadow-[inset_0_1px_0_rgb(255_255_255/.09),0_8px_25px_rgb(0_0_0/.18)] backdrop-blur-xl transition hover:bg-gold/10 hover:scale-105';
  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-obsidian/75 text-ivory shadow-[0_14px_45px_rgb(0_0_0/.2)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-10">
        <a
          href={signedIn ? '/home' : '/'}
          className="flex items-center gap-3"
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/40 shadow-[0_8px_28px_rgb(201_168_91/.14)]">
            <img
              src="/gbp/logo.jpg"
              alt="GBP"
              className="h-full w-full scale-[2.6] object-cover"
            />
          </span>
          <span>
            <strong className="block font-serif text-lg tracking-[.14em] text-gold">
              GBP
            </strong>
            <small className="hidden text-[7px] uppercase tracking-[.23em] text-ivory/40 sm:block">
              Global Billionaires Products
            </small>
          </span>
        </a>
        <div className="hidden items-center gap-2 rounded-full border border-gold/10 bg-ivory/[.025] p-1.5 text-[10px] font-bold uppercase tracking-[.2em] text-ivory/55 shadow-[inset_0_1px_0_rgb(255_255_255/.06)] backdrop-blur-xl md:flex">
          <a
            className="rounded-full px-5 py-2.5 hover:bg-ivory/[.05] hover:text-gold"
            href="/home"
          >
            Salon
          </a>
          <a
            className="rounded-full px-5 py-2.5 hover:bg-ivory/[.05] hover:text-gold"
            href="/market"
          >
            Collection
          </a>
          <a
            className="rounded-full px-5 py-2.5 hover:bg-ivory/[.05] hover:text-gold"
            href="/home#journal"
          >
            Journal
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/market"
            aria-label="Search products"
            className={iconClass}
          >
            <Search size={16} />
          </a>
          <a
            href="/cart"
            aria-label={`Cart with ${count} items`}
            className={`relative ${iconClass}`}
          >
            <ShoppingBag size={16} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-black text-obsidian">
                {count}
              </span>
            )}
          </a>
          {signedIn ? (
            <button
              onClick={signOut}
              aria-label="Sign out"
              className={iconClass}
            >
              <LogOut size={16} />
            </button>
          ) : (
            <a href="/login" aria-label="Sign in" className={iconClass}>
              <UserRound size={16} />
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
