export type Product = { id:string; name:string; category:string; price:number; image:string; image2:string; description:string; material:string; stock:number; badge?:string };

export const products: Product[] = [
  { id:'five-reserve', name:'The Five Reserve', category:'Currency Displays', price:890, badge:'Signature', stock:7, material:'Matte-black hardwood, museum acrylic', description:'A commanding five-piece arrangement built around the unmistakable iconography of the hundred-dollar note. Hand-assembled in a deep shadow frame for offices, lounges, and statement interiors.', image:'/gbp/five-piece.jpg', image2:'/gbp/five-piece.jpg' },
  { id:'noir-sentinel', name:'The Noir Sentinel', category:'Collector Frames', price:1480, badge:'Private Edition', stock:3, material:'Powder-coated metal, velvet backing, security acrylic', description:'A precision-built collector frame for a powerful monochrome display. The framed showcase is the product; display props pictured are styling references and are not included.', image:'/gbp/noir-display.jpg', image2:'/gbp/noir-display.jpg' },
  { id:'three-tier-currency', name:'The Sovereign III', category:'Currency Displays', price:1250, badge:'Limited', stock:5, material:'Black oak, brass detail, UV acrylic', description:'Three disciplined tiers of currency imagery create a confident focal point. Finished with the GBP seal and a gallery-grade plaque for a true limited-collection presence.', image:'/gbp/three-piece.jpg', image2:'/gbp/three-piece.jpg' },
  { id:'high-stakes', name:'The High Stakes', category:'Lifestyle Displays', price:760, badge:'New', stock:9, material:'Ebonized wood, felt, museum acrylic', description:'Cards, chips, currency, and cigar culture meet in a restrained composition inspired by private rooms and late-night decisions. Each arrangement is finished by hand.', image:'/gbp/high-stakes.jpg', image2:'/gbp/high-stakes.jpg' },
];

export const money = (n:number) => `$${n.toLocaleString()}`;
