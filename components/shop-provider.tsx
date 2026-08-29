'use client';
import { createContext, useContext, useEffect, useState } from 'react';
type Cart = Record<string, number>;
type Shop = { cart:Cart; add:(id:string,qty?:number)=>void; setQty:(id:string,qty:number)=>void; count:number; signedIn:boolean; signIn:()=>void; signOut:()=>void };
const Ctx=createContext<Shop|null>(null);
export function ShopProvider({children}:{children:React.ReactNode}){
  const [cart,setCart]=useState<Cart>({}); const [signedIn,setSignedIn]=useState(false); const [ready,setReady]=useState(false);
  useEffect(()=>{ try{setCart(JSON.parse(localStorage.getItem('nova-cart')||'{}'));setSignedIn(localStorage.getItem('nova-auth')==='yes')}catch{} setReady(true)},[]);
  useEffect(()=>{if(ready)localStorage.setItem('nova-cart',JSON.stringify(cart))},[cart,ready]);
  const add=(id:string,qty=1)=>setCart(c=>({...c,[id]:(c[id]||0)+qty}));
  const setQty=(id:string,qty:number)=>setCart(c=>{const n={...c};if(qty<=0)delete n[id];else n[id]=qty;return n});
  const signIn=()=>{setSignedIn(true);localStorage.setItem('nova-auth','yes')}; const signOut=()=>{setSignedIn(false);localStorage.removeItem('nova-auth')};
  return <Ctx.Provider value={{cart,add,setQty,count:Object.values(cart).reduce((a,b)=>a+b,0),signedIn,signIn,signOut}}>{children}</Ctx.Provider>
}
export const useShop=()=>{const c=useContext(Ctx);if(!c)throw Error('ShopProvider missing');return c};
