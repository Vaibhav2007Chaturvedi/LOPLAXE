const { useState, useEffect, useRef, useCallback } = React;

// ── DATA WITH REALISTIC IMAGES ────────────────────────────────────────────
const PRODUCTS = [
  { 
    id:1, 
    name:"Quantum Pro Earbuds X1", 
    cat:"Electronics", 
    price:249, 
    oldPrice:349, 
    image:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80", 
    badge:"hot", 
    rating:4.8, 
    reviews:2841, 
    specs:{Battery:"32hr",Driver:"11mm",ANC:"Yes",Range:"15m"}, 
    desc:"Next-gen active noise cancellation with spatial audio. Engineered for audiophiles." 
  },
  { 
    id:2, 
    name:"Aurora Sneakers Cloud", 
    cat:"Sneakers", 
    price:189, 
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80", 
    badge:"new", 
    rating:4.7, 
    reviews:1206, 
    specs:{Material:"Flyknit",Sole:"React",Weight:"240g",Sizes:"6–13"}, 
    desc:"Ultra-lightweight performance sneakers with cloud cushioning technology." 
  },
  { 
    id:3, 
    name:"HyperWatch Ultra 2", 
    cat:"Accessories", 
    price:429, 
    oldPrice:499, 
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", 
    badge:"sale", 
    rating:4.9, 
    reviews:4302, 
    specs:{Display:"AMOLED",Battery:"18day",WR:"100m",GPS:"Yes"}, 
    desc:"Military-grade smartwatch with advanced health metrics and lifetime GPS." 
  },
  { 
    id:4, 
    name:"Apex Gaming Chair Pro", 
    cat:"Gaming", 
    price:599, 
    image:"https://images.unsplash.com/photo-1598550476439-6847785fce6e?auto=format&fit=crop&w=600&q=80", 
    badge:"limited", 
    rating:4.6, 
    reviews:893, 
    specs:{Lumbar:"4D",Armrest:"4D",Frame:"Steel",Foam:"Cold-cure"}, 
    desc:"Competition-grade ergonomic chair designed for extended gaming sessions." 
  },
  { 
    id:5, 
    name:"NovaSkin Bomber Jacket", 
    cat:"Fashion", 
    price:319, 
    oldPrice:420, 
    image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80", 
    badge:"sale", 
    rating:4.5, 
    reviews:632, 
    specs:{Material:"Nylon",Fill:"Recycled",Fit:"Slim",Sizes:"XS–3XL"}, 
    desc:"Premium bomber jacket crafted from recycled materials with thermal insulation." 
  },
  { 
    id:6, 
    name:"Phantom Tablet Pro 12", 
    cat:"Electronics", 
    price:899, 
    image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80", 
    badge:"new", 
    rating:4.8, 
    reviews:3178, 
    specs:{Display:'12"OLED',Chip:"M4",RAM:"16GB",Storage:"512GB"}, 
    desc:"Professional-grade tablet with M4 chip, 120Hz ProMotion display and stylus support." 
  },
  { 
    id:7, 
    name:"CrystalX Mechanical Keyboard", 
    cat:"Gaming", 
    price:179, 
    image:"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80", 
    badge:"hot", 
    rating:4.7, 
    reviews:2240, 
    specs:{Switch:"Optical",Keys:"104",Layout:"TKL",RGB:"Per-key"}, 
    desc:"Hall-effect optical switches with zero-debounce latency for competitive gaming." 
  },
  { 
    id:8, 
    name:"Velour Crossbody Luxe", 
    cat:"Accessories", 
    price:219, 
    image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80", 
    badge:null, 
    rating:4.6, 
    reviews:418, 
    specs:{Material:"Italian leather",Width:"26cm",Strap:"Adjustable",RFID:"Blocked"}, 
    desc:"Handcrafted Italian leather crossbody with RFID-blocking tech and modular compartments." 
  },
  { 
    id:9, 
    name:"StellarLens 4K Drone", 
    cat:"Electronics", 
    price:1199, 
    oldPrice:1399, 
    image:"https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80", 
    badge:"sale", 
    rating:4.9, 
    reviews:1087, 
    specs:{Camera:"4K60fps",Range:"12km",Battery:"54min",Weight:"249g"}, 
    desc:"Cinema-grade aerial imaging with 3-axis gimbal stabilization and obstacle avoidance." 
  },
  { 
    id:10, 
    name:"Cipher Sneaker Mid", 
    cat:"Sneakers", 
    price:259, 
    image:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80", 
    badge:"new", 
    rating:4.5, 
    reviews:744, 
    specs:{Upper:"Carbon mesh",Sole:"Boost",Drop:"8mm",Weight:"280g"}, 
    desc:"High-performance running silhouette with premium carbon fiber midfoot shank." 
  },
  { 
    id:11, 
    name:"Void RGB Mouse Pro", 
    cat:"Gaming", 
    price:129, 
    image:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80", 
    badge:null, 
    rating:4.8, 
    reviews:3892, 
    specs:{DPI:"100–26000",Sensor:"Optical",Buttons:"9",Battery:"70hr"}, 
    desc:"Wireless ultra-lightweight mouse with 26K DPI precision sensor and 70-hour battery." 
  },
  { 
    id:12, 
    name:"SmartGo Mini Robot", 
    cat:"Smart Gadgets", 
    price:349, 
    image:"https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=600&q=80", 
    badge:"hot", 
    rating:4.7, 
    reviews:567, 
    specs:{AI:"On-device",Voice:"Natural",Modes:"12",Battery:"8hr"}, 
    desc:"Compact AI companion robot with natural language understanding and expressive emotions." 
  },
];

const CATEGORIES = [
  { name:"Electronics", emoji:"💻", count:248 },
  { name:"Sneakers", emoji:"👟", count:134 },
  { name:"Fashion", emoji:"👗", count:512 },
  { name:"Gaming", emoji:"🎮", count:89 },
  { name:"Accessories", emoji:"💍", count:326 },
  { name:"Smart Gadgets", emoji:"🤖", count:67 },
];

const BRANDS = ["Nike", "Sony", "Apple", "Samsung", "Adidas", "Rolex", "Tesla", "Bose", "Prada", "Gucci", "LG", "Dyson", "Bang & Olufsen", "Rimowa", "Arc'teryx"];

// ── SVG ICONS MAP ─────────────────────────────────────────────────────────
const Icon = ({ d, size=18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
);

const Icons = {
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0",
  cart: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z M3 6h18 M16 10a4 4 0 01-8 0",
  heart: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
  user: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 3a4 4 0 100 8 4 4 0 000-8z",
  x: "M18 6L6 18 M6 6l12 12",
  menu: "M3 12h18 M3 6h18 M3 18h18",
  sun: "M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42 M12 5a7 7 0 100 14A7 7 0 0012 5z",
  moon: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
  plus: "M12 5v14 M5 12h14",
  minus: "M5 12h14",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8 M12 9a3 3 0 100 6 3 3 0 000-6z",
  send: "M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z",
  flash: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  package: "M16.5 9.4l-9-5.19 M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12",
  settings: "M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z",
  logout: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4 M16 17l5-5-5-5 M21 12H9",
  orders: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2 M9 5a2 2 0 002 2h2a2 2 0 002-2 2 2 0 00-2-2h-2a2 2 0 00-2 2z M9 14l2 2 4-4",
  chevronDown: "M6 9l6 6 6-6",
};

// ── TOAST ──────────────────────────────────────────────────────────────────
let toastId = 0;
function ToastContainer({ toasts }) {
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type} ${t.removing ? 'removing' : ''}`}>
          <div className="toast-icon">{t.icon}</div>
          <span className="toast-msg">{t.msg}</span>
        </div>
      ))}
    </div>
  );
}

// ── STARS ──────────────────────────────────────────────────────────────────
function Stars({ rating }) {
  return (
    <div className="product-stars">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="star" viewBox="0 0 24 24"
          fill={i <= Math.floor(rating) ? "var(--gold)" : i - 0.5 <= rating ? "url(#half)" : "none"}
          stroke="var(--gold)" strokeWidth="1.5">
          <path d={Icons.star}/>
        </svg>
      ))}
    </div>
  );
}

// ── PRODUCT CARD ──────────────────────────────────────────────────────────
function ProductCard({ product, onAddCart, onWishlist, wishlist, onQuickView }) {
  const [adding, setAdding] = useState(false);
  const isWished = wishlist.includes(product.id);

  const handleCart = (e) => {
    e.stopPropagation();
    setAdding(true);
    onAddCart(product);
    setTimeout(() => setAdding(false), 400);
  };

  return (
    <div className="product-card" onClick={() => onQuickView(product)}>
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className={`product-badge badge-${product.badge}`}>{product.badge}</span>}
        <button className={`product-wishlist ${isWished ? 'active' : ''}`}
          onClick={e => { e.stopPropagation(); onWishlist(product); }}
          aria-label="Wishlist">
          <svg width="16" height="16" viewBox="0 0 24 24" fill={isWished ? "var(--red)" : "none"}
            stroke={isWished ? "var(--red)" : "currentColor"} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d={Icons.heart}/>
          </svg>
        </button>
      </div>
      <div className="product-info">
        <div className="product-cat">{product.cat}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-meta">
          <div style={{display:'flex',alignItems:'center',gap:'.375rem'}}>
            <Stars rating={product.rating}/>
            <span className="product-rating-count">({product.reviews.toLocaleString()})</span>
          </div>
        </div>
        <div className="product-price" style={{marginBottom:'.875rem'}}>
          <span className="price-current">${product.price}</span>
          {product.oldPrice && <>
            <span className="price-old">${product.oldPrice}</span>
            <span className="price-off">-{Math.round((1-product.price/product.oldPrice)*100)}%</span>
          </>}
        </div>
        <div className="product-actions">
          <button className={`btn-cart ${adding ? 'adding' : ''}`} onClick={handleCart}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={Icons.cart}/>
            </svg>
            Add to Cart
          </button>
          <button className="btn-quick" onClick={e => { e.stopPropagation(); onQuickView(product); }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={Icons.eye}/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── COUNTDOWN ─────────────────────────────────────────────────────────────
function Countdown() {
  const [time, setTime] = useState({ h: 5, m: 43, s: 21 });
  useEffect(() => {
    const iv = setInterval(() => {
      setTime(t => {
        let {h,m,s} = t;
        s--; if(s<0){s=59;m--;} if(m<0){m=59;h--;} if(h<0){h=23;m=59;s=59;}
        return {h,m,s};
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="countdown">
      {[['h','HRS'],['m','MIN'],['s','SEC']].map(([k,l]) => (
        <div key={k} className="countdown-unit">
          <span className="countdown-num">{String(time[k]).padStart(2,'0')}</span>
          <span className="countdown-label">{l}</span>
        </div>
      ))}
    </div>
  );
}

// ── NAVBAR ────────────────────────────────────────────────────────────────
function Navbar({ theme, setTheme, cartCount, onCartOpen, page, setPage, search, setSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const megaRef = useRef();
  const userRef = useRef();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if(megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false);
      if(userRef.current && !userRef.current.contains(e.target)) setUserOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => setPage('home')} style={{cursor:'pointer'}}>LOPLAXE</div>

      <div className="nav-links">
        {['home','shop','flash','checkout'].map(p => (
          <a key={p} className={`nav-link ${page===p?'active':''}`} onClick={() => setPage(p)}>
            {p.charAt(0).toUpperCase()+p.slice(1)}
          </a>
        ))}
        <div ref={megaRef} style={{position:'relative'}}>
          <a className="nav-link" onClick={() => setMegaOpen(!megaOpen)}
            style={{display:'flex',alignItems:'center',gap:'.25rem'}}>
            Categories
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transition:'transform .2s',transform:megaOpen?'rotate(180deg)':'rotate(0)'}}>
              <path d={Icons.chevronDown}/>
            </svg>
          </a>
          <div className={`mega-menu ${megaOpen ? 'open' : ''}`}>
            {CATEGORIES.map(c => (
              <div key={c.name} className="mega-cat" onClick={() => { setPage('shop'); setMegaOpen(false); }}>
                <span className="mega-cat-icon">{c.emoji}</span>
                <span className="mega-cat-name">{c.name}</span>
                <span className="mega-cat-count">{c.count} items</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="nav-search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--text3)',flexShrink:0}}>
          <path d={Icons.search}/>
        </svg>
        <input placeholder="Search products…" value={search} onChange={e => { setSearch(e.target.value); setPage('shop'); }}/>
      </div>

      <div className="nav-actions">
        <button className="nav-btn" onClick={onCartOpen} aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d={Icons.cart}/>
          </svg>
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>

        <div ref={userRef} style={{position:'relative'}}>
          <button className="nav-btn" onClick={() => setUserOpen(!userOpen)} aria-label="User">
            <div className="ud-avatar" style={{width:28,height:28,fontSize:11}}>JD</div>
          </button>
          <div className={`user-dropdown ${userOpen ? 'open' : ''}`}>
            <div style={{padding:'1rem',borderBottom:'1px solid var(--border)',display:'flex',gap:'.75rem',alignItems:'center'}}>
              <div className="ud-avatar">JD</div>
              <div>
                <div style={{fontWeight:600,fontSize:'.9rem'}}>Jane Doe</div>
                <div style={{fontSize:'.75rem',color:'var(--text3)'}}>jane@loplaxe.com</div>
              </div>
            </div>
            {[
              { icon: Icons.user, label: 'My Profile' },
              { icon: Icons.orders, label: 'My Orders' },
              { icon: Icons.heart, label: 'Wishlist' },
              { icon: Icons.settings, label: 'Settings' },
            ].map(item => (
              <div key={item.label} className="ud-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon}/>
                </svg>
                {item.label}
              </div>
            ))}
            <div className="ud-divider"/>
            <div className="ud-item" style={{color:'var(--red)'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d={Icons.logout}/>
              </svg>
              Sign Out
            </div>
          </div>
        </div>

        <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme"/>
      </div>
    </nav>
  );
}

// ── CART DRAWER ───────────────────────────────────────────────────────────
function CartDrawer({ open, onClose, cart, onQty, onRemove, onCheckout }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = total > 150 ? 0 : 12.99;

  return (
    <>
      <div className={`cart-overlay ${open ? 'open' : ''}`} onClick={onClose}/>
      <div className={`cart-drawer ${open ? 'open' : ''}`}>
        <div className="cart-header">
          <div>
            <div className="cart-title">Your Cart</div>
            <div style={{fontSize:'.8125rem',color:'var(--text3)',marginTop:'.125rem'}}>{cart.length} item{cart.length !== 1 ? 's' : ''}</div>
          </div>
          <button className="cart-close" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={Icons.x}/>
            </svg>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-items">
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p>Your cart is empty</p>
              <button className="btn-primary" onClick={onClose}>Start Shopping</button>
            </div>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img" style={{ padding: 0 }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-cat">{item.cat}</div>
                    <div className="cart-item-bottom">
                      <div className="qty-controls">
                        <button className="qty-btn" onClick={() => onQty(item.id, item.qty - 1)}>−</button>
                        <span className="qty-val">{item.qty}</span>
                        <button className="qty-btn" onClick={() => onQty(item.id, item.qty + 1)}>+</button>
                      </div>
                      <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'.9375rem'}}>${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                    <button className="item-remove" onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-summary">
                <div className="summary-row"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
                <div className="summary-row"><span>Shipping</span><span style={{color: shipping===0 ? 'var(--green)' : 'inherit'}}>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
                {shipping > 0 && <div style={{fontSize:'.75rem',color:'var(--text3)',marginTop:'.25rem'}}>
                  Add ${(150 - total).toFixed(2)} for free shipping
                </div>}
                <div className="summary-row total"><span>Total</span><span>${(total + shipping).toFixed(2)}</span></div>
              </div>
              <button className="btn-checkout" onClick={onCheckout}>
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// ── PRODUCT MODAL ─────────────────────────────────────────────────────────
function ProductModal({ product, open, onClose, onAddCart, onWishlist, wishlist }) {
  if (!product) return null;
  const isWished = wishlist.includes(product.id);

  return (
    <div className={`modal-overlay ${open ? 'open' : ''}`} onClick={onClose} style={{position:'fixed'}}>
      <div className="modal-box" onClick={e => e.stopPropagation()} style={{position:'relative'}}>
        <button className="modal-close" onClick={onClose} style={{position:'absolute',zIndex:10}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={Icons.x}/>
          </svg>
        </button>
        <div className="modal-img-col" style={{ padding: 0 }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="modal-info-col">
          <div className="modal-cat">{product.cat}</div>
          <div className="modal-name">{product.name}</div>
          <div style={{display:'flex',alignItems:'center',gap:'.75rem',marginBottom:'.875rem'}}>
            <Stars rating={product.rating}/>
            <span style={{fontSize:'.8125rem',color:'var(--text3)'}}>({product.reviews.toLocaleString()} reviews)</span>
          </div>
          <div className="modal-price-row">
            <span className="modal-price">${product.price}</span>
            {product.oldPrice && <>
              <span className="modal-price-old">${product.oldPrice}</span>
              <span style={{background:'var(--green)22',color:'var(--green)',padding:'.25rem .625rem',borderRadius:'99px',fontSize:'.75rem',fontWeight:700}}>
                -{Math.round((1-product.price/product.oldPrice)*100)}% OFF
              </span>
            </>}
          </div>
          <p className="modal-desc">{product.desc}</p>
          <div className="modal-specs">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="spec-chip">
                <div className="spec-key">{k}</div>
                <div className="spec-val">{v}</div>
              </div>
            ))}
          </div>
          <div className="modal-actions">
            <button className="btn-modal-cart" onClick={() => { onAddCart(product); onClose(); }}>
              Add to Cart — ${product.price}
            </button>
            <button className="btn-modal-wish" onClick={() => onWishlist(product)}>
              {isWished ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── AI ASSISTANT ──────────────────────────────────────────────────────────
function AIAssistant({ onAddCart }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Lux, your AI shopping assistant. I can help you find the perfect product! 🛍️" }
  ]);
  const [input, setInput] = useState('');

  const SUGGESTIONS = [
    "Best electronics under $300",
    "Trending gaming gear",
    "Recommend a gift",
  ];

  const respond = (userMsg) => {
    const msg = userMsg.toLowerCase();
    let reply = "Let me check that for you...";
    if (msg.includes('electro') || msg.includes('gadget')) reply = "For electronics, the Quantum Pro Earbuds X1 and Phantom Tablet Pro 12 are top sellers! 🎧📱";
    else if (msg.includes('gaming') || msg.includes('game')) reply = "The CrystalX Mechanical Keyboard and Void RGB Mouse Pro are loved by pro gamers! 🎮";
    else if (msg.includes('gift')) reply = "The HyperWatch Ultra 2 is a premium gift that suits almost everyone. It's stunning! ⌚";
    else if (msg.includes('cheap') || msg.includes('under') || msg.includes('budget')) reply = "For value, the Void RGB Mouse Pro at $129 and NovaSkin Bomber Jacket at $319 (sale!) are great picks!";
    else if (msg.includes('sneaker') || msg.includes('shoe')) reply = "Aurora Sneakers Cloud and Cipher Sneaker Mid are our hottest drops right now! 👟";
    else reply = "Great question! Browse our curated collections or try a category filter to discover exactly what you need. ✨";

    setMessages(m => [...m, { role:'bot', text: reply }]);
  };

  const send = (text) => {
    const msg = text || input;
    if (!msg.trim()) return;
    setMessages(m => [...m, { role:'user', text: msg }]);
    setInput('');
    setTimeout(() => respond(msg), 700);
  };

  return (
    <>
      <button className="ai-trigger" onClick={() => setOpen(!open)} aria-label="AI Assistant">🤖</button>
      <div className={`ai-chat ${open ? 'open' : ''}`}>
        <div className="ai-chat-head">
          <div className="ai-avatar">🤖</div>
          <div>
            <div className="ai-name">Lux AI</div>
            <div className="ai-status">● Online</div>
          </div>
          <button className="cart-close" style={{marginLeft:'auto'}} onClick={() => setOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={Icons.x}/>
            </svg>
          </button>
        </div>
        <div className="ai-messages">
          {messages.map((m, i) => (
            <div key={i} className={`ai-msg ${m.role}`}>{m.text}</div>
          ))}
        </div>
        <div className="ai-suggestions">
          {SUGGESTIONS.map(s => (
            <button key={s} className="ai-sug" onClick={() => send(s)}>{s}</button>
          ))}
        </div>
        <div className="ai-input-row">
          <input className="ai-input" placeholder="Ask anything…" value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}/>
          <button className="ai-send" onClick={() => send()}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={Icons.send}/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────
function HomePage({ onAddCart, onWishlist, wishlist, onQuickView, setPage }) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"/>
            New arrivals every week
          </div>
          <h1 className="hero-title">
            Shop the <em>Future</em><br/>of Commerce
          </h1>
          <p className="hero-sub">
            Discover curated premium products from the world's most innovative brands. Elevated shopping experience, delivered.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => setPage('shop')}>
              Explore Collection
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14 M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-ghost" onClick={() => setPage('flash')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={Icons.flash}/>
              </svg>
              Flash Sales
            </button>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">2M+</div>
              <div className="hero-stat-label">Happy customers</div>
            </div>
            <div>
              <div className="hero-stat-num">50K+</div>
              <div className="hero-stat-label">Premium products</div>
            </div>
            <div>
              <div className="hero-stat-num">180+</div>
              <div className="hero-stat-label">Countries served</div>
            </div>
          </div>
        </div>

        {/* Decorative rings */}
        <div className="hero-visual">
          <div className="hero-ring hr1"/>
          <div className="hero-ring hr2"/>
          <div className="hero-ring hr3"/>
          <div className="hero-card hc1" style={{minWidth:160}}>
            <div style={{display:'flex',alignItems:'center',gap:'.5rem',marginBottom:'.25rem'}}>
              <span style={{fontSize:'1.25rem'}}>🎧</span>
              <span style={{fontSize:'.8125rem',fontWeight:600}}>Just added</span>
            </div>
            <div style={{fontSize:'.75rem',color:'var(--text3)'}}>Quantum Pro Earbuds</div>
            <div style={{fontSize:'1rem',fontWeight:700,color:'var(--accent2)',marginTop:'.25rem'}}>$249</div>
          </div>
          <div className="hero-card hc2" style={{minWidth:140}}>
            <div style={{fontSize:'.75rem',color:'var(--text3)',marginBottom:'.25rem'}}>Today's deal</div>
            <div style={{fontWeight:700,color:'var(--green)',fontSize:'1.25rem'}}>-30% OFF</div>
            <div style={{fontSize:'.75rem',color:'var(--text3)',marginTop:'.125rem'}}>HyperWatch Ultra 2</div>
          </div>
          <div className="hero-card hc3" style={{minWidth:130}}>
            <div style={{display:'flex',alignItems:'center',gap:'.375rem'}}>
              <span style={{color:'var(--gold)'}}>★★★★★</span>
            </div>
            <div style={{fontSize:'.75rem',color:'var(--text3)',marginTop:'.25rem'}}>4.8 avg rating</div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Explore</div>
          <h2 className="section-title">Shop by <em>Category</em></h2>
          <p className="section-sub">Browse our handpicked selection across top categories</p>
        </div>
        <div className="cats-grid">
          {CATEGORIES.map(c => (
            <div key={c.name} className="cat-card" onClick={() => setPage('shop')}>
              <span className="cat-icon">{c.emoji}</span>
              <div className="cat-name">{c.name}</div>
              <div className="cat-count">{c.count} items</div>
            </div>
          ))}
        </div>
      </div>

      {/* AI BANNER */}
      <div style={{maxWidth:1400,margin:'0 auto',padding:'0 2rem',position:'relative',zIndex:1}}>
        <div className="ai-banner">
          <div className="ai-banner-visual">
            <div className="ai-orb ao1"/>
            <div className="ai-orb ao2" style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem',color:'#fff',width:50,height:50}}>🤖</div>
          </div>
          <div className="ai-banner-content">
            <div className="ai-banner-title">AI-Powered Recommendations</div>
            <p className="ai-banner-sub">Our intelligent engine learns your style and curates picks made just for you.</p>
          </div>
          <button className="btn-primary" onClick={() => setPage('shop')}>Discover Your Picks →</button>
        </div>
      </div>

      {/* TRENDING */}
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Trending</div>
          <h2 className="section-title">Most <em>Wanted</em></h2>
          <p className="section-sub">Products flying off the shelves this week</p>
        </div>
        <div className="products-grid">
          {PRODUCTS.slice(0,8).map(p => (
            <ProductCard key={p.id} product={p} onAddCart={onAddCart}
              onWishlist={onWishlist} wishlist={wishlist} onQuickView={onQuickView}/>
          ))}
        </div>
      </div>

      {/* FLASH SALE PREVIEW */}
      <div style={{maxWidth:1400,margin:'0 auto',padding:'0 2rem 5rem',position:'relative',zIndex:1}}>
        <div className="flash-sale">
          <div className="flash-header">
            <div>
              <span className="flash-badge">
                <span className="flash-badge-dot"/>
                Flash Sale
              </span>
              <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.25rem,2.5vw,1.75rem)',fontWeight:700,marginTop:'.5rem'}}>
                Deals ending soon
              </h2>
            </div>
            <Countdown/>
          </div>
          <div className="products-grid">
            {PRODUCTS.filter(p => p.oldPrice).slice(0,4).map(p => (
              <ProductCard key={p.id} product={p} onAddCart={onAddCart}
                onWishlist={onWishlist} wishlist={wishlist} onQuickView={onQuickView}/>
            ))}
          </div>
        </div>
      </div>

      {/* BRANDS */}
      <div style={{maxWidth:1400,margin:'0 auto',padding:'0 2rem 5rem',position:'relative',zIndex:1,overflow:'hidden'}}>
        <div className="section-header">
          <div className="section-tag">Brands</div>
          <h2 className="section-title">Top <em>Brands</em></h2>
        </div>
        <div className="brands-scroll">
          <div className="brands-track">
            {[...BRANDS,...BRANDS].map((b,i) => (
              <div key={i} className="brand-chip">{b}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ── SHOP PAGE ─────────────────────────────────────────────────────────────
function ShopPage({ onAddCart, onWishlist, wishlist, onQuickView, search }) {
  const [activeCat, setActiveCat] = useState('All');
  const [sort, setSort] = useState('featured');

  const cats = ['All', ...CATEGORIES.map(c => c.name)];

  const filtered = PRODUCTS
    .filter(p => {
      const matchCat = activeCat === 'All' || p.cat === activeCat;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.cat.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a,b) => {
      if(sort === 'price-asc') return a.price - b.price;
      if(sort === 'price-desc') return b.price - a.price;
      if(sort === 'rating') return b.rating - a.rating;
      if(sort === 'newest') return (b.badge === 'new') - (a.badge === 'new');
      return 0;
    });

  return (
    <div style={{paddingTop:80}}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Shop All</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span style={{color:'var(--text3)'}}>›</span>
            <span className="active">Shop</span>
          </div>
        </div>
        <div style={{fontSize:'.9rem',color:'var(--text2)'}}>
          <strong style={{color:'var(--text)'}}>{filtered.length}</strong> products found
        </div>
      </div>

      <div className="section" style={{paddingTop:'1.5rem'}}>
        <div className="filter-bar">
          {cats.map(c => (
            <button key={c} className={`filter-chip ${activeCat===c?'active':''}`} onClick={() => setActiveCat(c)}>{c}</button>
          ))}
          <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <div style={{textAlign:'center',padding:'5rem 2rem',color:'var(--text3)'}}>
            <div style={{fontSize:'3rem',marginBottom:'1rem'}}>🔍</div>
            <p>No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="products-grid">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onAddCart={onAddCart}
                onWishlist={onWishlist} wishlist={wishlist} onQuickView={onQuickView}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── FLASH PAGE ────────────────────────────────────────────────────────────
function FlashPage({ onAddCart, onWishlist, wishlist, onQuickView }) {
  return (
    <div style={{paddingTop:80}}>
      <div className="page-header">
        <div>
          <h1 className="page-title" style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
            ⚡ Flash Sales
          </h1>
          <div className="breadcrumb">
            <span>Home</span> <span>›</span>
            <span className="active">Flash Sales</span>
          </div>
        </div>
        <Countdown/>
      </div>
      <div className="section" style={{paddingTop:'1.5rem'}}>
        <div style={{background:'var(--red)11',border:'1px solid var(--red)22',borderRadius:'var(--r12)',padding:'1rem 1.5rem',marginBottom:'1.5rem',display:'flex',alignItems:'center',gap:'1rem'}}>
          <span style={{fontSize:'1.5rem'}}>🔥</span>
          <div>
            <div style={{fontWeight:600,color:'var(--red)'}}>Limited Time Deals — Up to 40% off!</div>
            <div style={{fontSize:'.8125rem',color:'var(--text3)'}}>These deals expire when the timer hits zero</div>
          </div>
        </div>
        <div className="products-grid">
          {PRODUCTS.filter(p => p.oldPrice).map(p => (
            <ProductCard key={p.id} product={p} onAddCart={onAddCart}
              onWishlist={onWishlist} wishlist={wishlist} onQuickView={onQuickView}/>
          ))}
        </div>
        <div style={{marginTop:'4rem'}}>
          <div className="section-header">
            <div className="section-tag">All Deals</div>
            <h2 className="section-title">More <em>Products</em></h2>
          </div>
          <div className="products-grid">
            {PRODUCTS.filter(p => !p.oldPrice).map(p => (
              <ProductCard key={p.id} product={p} onAddCart={onAddCart}
                onWishlist={onWishlist} wishlist={wishlist} onQuickView={onQuickView}/>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── CHECKOUT PAGE ─────────────────────────────────────────────────────────
function CheckoutPage({ cart, onQty, onRemove }) {
  const [payMethod, setPayMethod] = useState('card');
  const [placed, setPlaced] = useState(false);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = total > 150 ? 0 : 12.99;

  if (placed) return (
    <div style={{paddingTop:80,minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
      <div style={{maxWidth:480}}>
        <div style={{fontSize:'4rem',marginBottom:'1.5rem',animation:'fadeInUp .5s ease both'}}>✅</div>
        <h1 style={{fontFamily:'var(--font-display)',fontSize:'2rem',fontWeight:800,marginBottom:'1rem',letterSpacing:'-.04em'}}>
          Order Placed!
        </h1>
        <p style={{color:'var(--text2)',lineHeight:1.6,marginBottom:'2rem'}}>
          Thank you for shopping with Loplaxe. Your order will be confirmed shortly at <strong>jane@loplaxe.com</strong>
        </p>
        <div style={{background:'var(--surface)',border:'1px solid var(--border2)',borderRadius:'var(--r16)',padding:'1.5rem',marginBottom:'2rem'}}>
          <div style={{fontSize:'.8125rem',color:'var(--text3)',marginBottom:'.5rem'}}>Order Reference</div>
          <div style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:800,letterSpacing:'.05em',color:'var(--accent2)'}}>
            #LPX-{Math.random().toString(36).toUpperCase().slice(2,8)}
          </div>
        </div>
        <button className="btn-primary" onClick={() => window.location.reload()}>Continue Shopping</button>
      </div>
    </div>
  );

  return (
    <div style={{paddingTop:80}}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Checkout</h1>
          <div className="breadcrumb">
            <span>Home</span> <span>›</span>
            <span>Cart</span> <span>›</span>
            <span className="active">Checkout</span>
          </div>
        </div>
      </div>
      <div className="section" style={{paddingTop:'1.5rem'}}>
        {cart.length === 0 ? (
          <div style={{textAlign:'center',padding:'5rem',color:'var(--text3)'}}>
            <div style={{fontSize:'3rem',marginBottom:'1rem'}}>🛒</div>
            <p>Your cart is empty. Add some products first!</p>
          </div>
        ) : (
          <div className="checkout-layout">
            <div className="checkout-form-section">
              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r16)',padding:'1.75rem'}}>
                <div className="checkout-section-title">Contact Information</div>
                <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input className="form-input" defaultValue="Jane" placeholder="First name"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input className="form-input" defaultValue="Doe" placeholder="Last name"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" type="email" defaultValue="jane@loplaxe.com"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="tel" placeholder="+1 (555) 000-0000"/>
                  </div>
                </div>
              </div>

              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r16)',padding:'1.75rem'}}>
                <div className="checkout-section-title">Shipping Address</div>
                <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
                  <div className="form-group">
                    <label className="form-label">Street Address</label>
                    <input className="form-input" placeholder="123 Premium Street"/>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">City</label>
                      <input className="form-input" placeholder="New York"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">ZIP Code</label>
                      <input className="form-input" placeholder="10001"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <select className="form-input">
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>India</option>
                    </select>
                  </div>
                </div>
              </div>

              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r16)',padding:'1.75rem'}}>
                <div className="checkout-section-title">Payment Method</div>
                <div className="payment-methods">
                  {['card','paypal','crypto','apple'].map(m => (
                    <div key={m} className={`pay-method ${payMethod===m?'active':''}`} onClick={() => setPayMethod(m)}>
                      {m==='card'&&'💳 Credit Card'}
                      {m==='paypal'&&'🔵 PayPal'}
                      {m==='crypto'&&'₿ Crypto'}
                      {m==='apple'&&'🍎 Apple Pay'}
                    </div>
                  ))}
                </div>
                {payMethod === 'card' && (
                  <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
                    <div className="form-group">
                      <label className="form-label">Card Number</label>
                      <input className="form-input" placeholder="4242 4242 4242 4242"/>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Expiry</label>
                        <input className="form-input" placeholder="MM / YY"/>
                      </div>
                      <div className="form-group">
                        <label className="form-label">CVV</label>
                        <input className="form-input" placeholder="•••"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Cardholder Name</label>
                      <input className="form-input" placeholder="Jane Doe"/>
                    </div>
                  </div>
                )}
                {payMethod !== 'card' && (
                  <div style={{textAlign:'center',padding:'2rem',color:'var(--text3)',background:'var(--bg3)',borderRadius:'var(--r12)',border:'1px dashed var(--border2)'}}>
                    {payMethod==='paypal'&&'You will be redirected to PayPal to complete your purchase.'}
                    {payMethod==='crypto'&&'A wallet QR code will be generated for payment.'}
                    {payMethod==='apple'&&'Complete payment with Face ID or Touch ID.'}
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="checkout-summary">
                <div className="checkout-section-title">Order Summary</div>
                <div style={{display:'flex',flexDirection:'column',gap:'.75rem',marginBottom:'1rem'}}>
                  {cart.map(item => (
                    <div key={item.id} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.75rem',background:'var(--bg3)',borderRadius:'var(--r8)',border:'1px solid var(--border)'}}>
                      <span style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: 'var(--r4)', flexShrink: 0 }}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </span>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontSize:'.8125rem',fontWeight:600,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{item.name}</div>
                        <div style={{fontSize:'.75rem',color:'var(--text3)'}}>×{item.qty}</div>
                      </div>
                      <span style={{fontWeight:700,fontSize:'.875rem',flexShrink:0}}>${(item.price*item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div style={{borderTop:'1px solid var(--border)',paddingTop:'1rem',display:'flex',flexDirection:'column',gap:'.5rem'}}>
                  <div className="summary-row"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
                  <div className="summary-row"><span>Shipping</span><span style={{color:shipping===0?'var(--green)':'inherit'}}>{shipping===0?'FREE':`$${shipping.toFixed(2)}`}</span></div>
                  <div className="summary-row"><span>Tax (8%)</span><span>${(total*0.08).toFixed(2)}</span></div>
                  <div className="summary-row total"><span>Total</span><span>${(total+shipping+total*0.08).toFixed(2)}</span></div>
                </div>
                <button className="btn-checkout" style={{marginTop:'1rem'}} onClick={() => setPlaced(true)}>
                  Place Order →
                </button>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'.5rem',marginTop:'.875rem',fontSize:'.75rem',color:'var(--text3)'}}>
                  🔒 Secured by 256-bit SSL encryption
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="nav-logo">LOPLAXE</div>
          <p className="footer-desc">The future of premium shopping. Curated, elevated, delivered globally.</p>
          <div className="footer-social">
            {['𝕏', 'in', 'ig', 'yt'].map(s => (
              <div key={s} className="social-btn">{s}</div>
            ))}
          </div>
          <div style={{marginTop:'1.5rem'}}>
            <div style={{fontSize:'.75rem',color:'var(--text3)',marginBottom:'.5rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'.06em'}}>Newsletter</div>
            <div className="footer-newsletter">
              <input className="newsletter-input" placeholder="your@email.com"/>
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {[
          { title:'Shop', links:['New Arrivals','Flash Sales','Top Rated','Electronics','Fashion','Gaming','Sneakers'] },
          { title:'Company', links:['About Us','Careers','Press','Partners','Sustainability','Blog'] },
          { title:'Support', links:['Help Center','Shipping Info','Returns','Track Order','Size Guide','Gift Cards'] },
        ].map(col => (
          <div key={col.title}>
            <div className="footer-col-title">{col.title}</div>
            {col.links.map(l => (
              <a key={l} className="footer-link">{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 Loplaxe Inc. All rights reserved.</div>
        <div style={{display:'flex',gap:'1.5rem'}}>
          {['Privacy Policy','Terms of Service','Cookie Policy'].map(l => (
            <a key={l} className="footer-link" style={{padding:0}}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ── LOADING SCREEN ────────────────────────────────────────────────────────
function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(iv); setTimeout(onDone, 200); return 100; }
        return p + Math.random() * 15;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [onDone]);

  return (
    <div style={{
      position:'fixed',inset:0,background:'var(--bg)',
      display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
      zIndex:9999,gap:'2rem',
    }}>
      <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(2.5rem,8vw,5rem)',fontWeight:800,
        background:'linear-gradient(135deg,var(--accent3),var(--accent),var(--green))',
        WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',
        letterSpacing:'-.04em',animation:'fadeInUp .5s ease both'}}>
        LOPLAXE
      </div>
      <div style={{width:240,height:3,background:'var(--surface2)',borderRadius:99,overflow:'hidden'}}>
        <div style={{
          height:'100%',borderRadius:99,
          background:'linear-gradient(90deg,var(--accent),var(--green))',
          width:`${Math.min(progress,100)}%`,transition:'width .1s linear'
        }}/>
      </div>
      <div style={{fontSize:'.8125rem',color:'var(--text3)',animation:'pulse 1.5s infinite'}}>
        Loading premium experience…
      </div>
    </div>
  );
}

// ── APP MAIN COMPONENT ────────────────────────────────────────────────────
function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const particles = Array.from({length:20}).map((_,i) => ({
    id: i,
    style: {
      '--dur': `${6+Math.random()*8}s`,
      '--delay': `${-Math.random()*12}s`,
      '--drift': `${(Math.random()-0.5)*100}px`,
      left: `${Math.random()*100}%`,
      width: Math.random()>0.7 ? '3px' : '2px',
      height: Math.random()>0.7 ? '3px' : '2px',
      opacity: 0.3 + Math.random()*0.4,
    }
  }));

  useEffect(() => {
    document.documentElement.className = theme === 'light' ? 'light' : '';
  }, [theme]);

  const addToast = useCallback((msg, type='cart', icon='🛍️') => {
    const id = ++toastId;
    setToasts(t => [...t, {id, msg, type, icon}]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000);
  }, []);

  const addToCart = useCallback((product) => {
    setCart(c => {
      const ex = c.find(i => i.id === product.id);
      if (ex) return c.map(i => i.id === product.id ? {...i, qty: i.qty+1} : i);
      return [...c, {...product, qty:1}];
    });
    addToast(`${product.name} added to cart!`, 'cart', '🛒');
  }, [addToast]);

  const toggleWishlist = useCallback((product) => {
    setWishlist(w => {
      if (w.includes(product.id)) {
        addToast(`Removed from wishlist`, 'wish', '💔');
        return w.filter(i => i !== product.id);
      } else {
        addToast(`${product.name} added to wishlist!`, 'wish', '❤️');
        return [...w, product.id];
      }
    });
  }, [addToast]);

  const setQty = (id, qty) => {
    if (qty <= 0) return setCart(c => c.filter(i => i.id !== id));
    setCart(c => c.map(i => i.id === id ? {...i, qty} : i));
  };

  const removeFromCart = (id) => {
    setCart(c => c.filter(i => i.id !== id));
    addToast('Item removed', 'success', '🗑️');
  };

  const openQuickView = (product) => {
    setModalProduct(product);
    setModalOpen(true);
  };

  const goCheckout = () => {
    setCartOpen(false);
    setPage('checkout');
  };

  if (loading) return (
    <>
      <div className="noise-bg"/>
      <LoadingScreen onDone={() => setLoading(false)}/>
    </>
  );

  return (
    <>
      <div className="noise-bg"/>
      <div className="particles">
        {particles.map(p => <div key={p.id} className="particle" style={p.style}/>)}
      </div>
      <div className="orb orb1"/><div className="orb orb2"/><div className="orb orb3"/>

      <Navbar
        theme={theme} setTheme={setTheme}
        cartCount={cart.reduce((s,i)=>s+i.qty,0)}
        onCartOpen={() => setCartOpen(true)}
        page={page} setPage={setPage}
        search={search} setSearch={setSearch}
      />

      <main>
        {page === 'home' && <HomePage onAddCart={addToCart} onWishlist={toggleWishlist} wishlist={wishlist} onQuickView={openQuickView} setPage={setPage}/>}
        {page === 'shop' && <ShopPage onAddCart={addToCart} onWishlist={toggleWishlist} wishlist={wishlist} onQuickView={openQuickView} search={search}/>}
        {page === 'flash' && <FlashPage onAddCart={addToCart} onWishlist={toggleWishlist} wishlist={wishlist} onQuickView={openQuickView}/>}
        {page === 'checkout' && <CheckoutPage cart={cart} onQty={setQty} onRemove={removeFromCart}/>}
      </main>

      <Footer setPage={setPage}/>

      <CartDrawer
        open={cartOpen} onClose={() => setCartOpen(false)}
        cart={cart} onQty={setQty} onRemove={removeFromCart}
        onCheckout={goCheckout}
      />

      <ProductModal
        product={modalProduct} open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddCart={addToCart} onWishlist={toggleWishlist} wishlist={wishlist}
      />

      <AIAssistant onAddCart={addToCart}/>
      <ToastContainer toasts={toasts}/>
    </>
  );
}

// Render the Application Entrypoint
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);