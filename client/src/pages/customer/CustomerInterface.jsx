import { useState } from 'react';
import { T } from '../../theme';
import Icon from '../../components/Icon';

const CATEGORIES = ['All', 'Coffee', 'Snacks', 'Desserts', 'Beverages'];
const MENU = [
  { id: 1, name: 'Cappuccino', cat: 'Coffee', price: 180, points: 18, emoji: '☕' },
  { id: 2, name: 'Cold Brew', cat: 'Coffee', price: 210, points: 21, emoji: '🧊' },
  { id: 3, name: 'Avocado Toast', cat: 'Snacks', price: 250, points: 25, emoji: '🥑' },
  { id: 4, name: 'Croissant', cat: 'Snacks', price: 120, points: 12, emoji: '🥐' },
  { id: 5, name: 'Mango Cheesecake', cat: 'Desserts', price: 280, points: 28, emoji: '🍰' },
  { id: 6, name: 'Matcha Latte', cat: 'Beverages', price: 195, points: 20, emoji: '🍵' },
  { id: 7, name: 'Brownie', cat: 'Desserts', price: 140, points: 14, emoji: '🍫' },
  { id: 8, name: 'Lemonade', cat: 'Beverages', price: 99, points: 10, emoji: '🍋' },
];

const CustomerInterface = () => {
  const [activeCat, setActiveCat] = useState('All');
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [showWheel, setShowWheel] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState('');
  const loyaltyPoints = 340;

  const filtered = activeCat === 'All' ? MENU : MENU.filter(i => i.cat === activeCat);
  const cartItems = Object.entries(cart).map(([id, qty]) => ({ ...MENU.find(m => m.id === +id), qty }));
  const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartCount = Object.values(cart).reduce((s, v) => s + v, 0);

  const addToCart = id => setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeFromCart = id => setCart(c => { const n = { ...c }; if (n[id] > 1) n[id]--; else delete n[id]; return n; });

  const spinWheel = () => {
    setSpinning(true);
    const prizes = ['10% OFF', 'Free Cookie', '50 Points', 'Free Upgrade', 'Try Again'];
    setTimeout(() => { setSpinning(false); setPrize(prizes[Math.floor(Math.random() * prizes.length)]); }, 2000);
  };

  return (
    <div style={{ maxWidth: 420, margin: '0 auto', minHeight: '100vh', background: '#F8F4F0', fontFamily: 'DM Sans, sans-serif', position: 'relative' }}>
      {/* Header */}
      <div style={{ background: T.brownDark, padding: '16px 20px 0', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="coffee" size={20} color={T.gold} />
            <span style={{ fontFamily: 'Playfair Display', fontWeight: 700, color: '#fff', fontSize: 17 }}>Artisan Corner</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={() => setShowWheel(true)} style={{ background: `${T.gold}22`, border: `1px solid ${T.gold}44`, borderRadius: 20, padding: '4px 10px', fontSize: 12, color: T.gold, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="gift" size={12} color={T.gold} /> Spin
            </button>
          </div>
        </div>
        {/* Loyalty banner */}
        <div style={{ background: `${T.gold}22`, borderRadius: 12, padding: '8px 14px', marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>⭐ {loyaltyPoints} points · Silver Member</div>
          <div style={{ fontSize: 11, color: T.gold }}>160 pts to Gold →</div>
        </div>
        {/* Category pills */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 12, scrollbarWidth: 'none' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{ whiteSpace: 'nowrap', padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: activeCat === cat ? 600 : 400, background: activeCat === cat ? T.gold : 'rgba(255,255,255,0.12)', color: activeCat === cat ? '#fff' : 'rgba(255,255,255,0.65)', transition: 'all 0.2s' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu grid */}
      <div style={{ padding: '16px 16px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {filtered.map(item => (
            <div key={item.id} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ background: T.cream, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>{item.emoji}</div>
              <div style={{ padding: 12 }}>
                <div style={{ fontWeight: 600, color: T.brownDark, fontSize: 13, marginBottom: 2 }}>{item.name}</div>
                <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 8 }}>+{item.points} pts</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, color: T.brown, fontSize: 14 }}>₹{item.price}</span>
                  {cart[item.id] ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <button onClick={() => removeFromCart(item.id)} style={{ width: 24, height: 24, borderRadius: '50%', background: T.cream, border: `1px solid ${T.border}`, cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.brown }}>−</button>
                      <span style={{ fontSize: 13, fontWeight: 700, color: T.brownDark, minWidth: 14, textAlign: 'center' }}>{cart[item.id]}</span>
                      <button onClick={() => addToCart(item.id)} style={{ width: 24, height: 24, borderRadius: '50%', background: T.brown, border: 'none', cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>+</button>
                    </div>
                  ) : (
                    <button onClick={() => addToCart(item.id)} style={{ width: 28, height: 28, borderRadius: '50%', background: T.brown, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="plus" size={14} color="#fff" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart sticky CTA */}
      {cartCount > 0 && (
        <div style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 40px)', maxWidth: 380, zIndex: 20 }}>
          <button onClick={() => setShowCart(true)} style={{ width: '100%', background: T.brownDark, color: '#fff', border: 'none', borderRadius: 16, padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}>
            <div style={{ background: T.gold, borderRadius: 8, padding: '2px 8px', fontSize: 13, fontWeight: 700 }}>{cartCount}</div>
            <span style={{ fontWeight: 600, fontSize: 15 }}>View Cart</span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>₹{cartTotal}</span>
          </button>
        </div>
      )}

      {/* Cart sheet */}
      {showCart && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} onClick={() => setShowCart(false)} />
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px 20px 0 0', padding: 24, maxHeight: '80vh', overflowY: 'auto', animation: 'slideInRight 0.3s ease both' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: 20, color: T.brownDark }}>Your Order</h3>
              <button onClick={() => setShowCart(false)} style={{ background: T.cream, border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="x" size={14} color={T.brown} /></button>
            </div>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 24 }}>{item.emoji}</span>
                  <div><div style={{ fontWeight: 600, fontSize: 14, color: T.brownDark }}>{item.name}</div><div style={{ fontSize: 12, color: T.textMuted }}>₹{item.price} × {item.qty}</div></div>
                </div>
                <span style={{ fontWeight: 700, color: T.brown }}>₹{item.price * item.qty}</span>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 16, marginTop: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontWeight: 700, fontSize: 16, color: T.brownDark }}>Total</span>
                <span style={{ fontWeight: 800, fontSize: 18, color: T.brown }}>₹{cartTotal}</span>
              </div>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '13px' }} onClick={() => { setCart({}); setShowCart(false); }}>Place Order →</button>
            </div>
          </div>
        </div>
      )}

      {/* Spin the wheel */}
      {showWheel && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}>
          <div style={{ background: '#fff', borderRadius: 24, padding: 32, textAlign: 'center', width: 320, animation: 'scaleIn 0.3s ease both' }}>
            <div style={{ fontSize: 64, marginBottom: 8, animation: spinning ? 'spin 0.3s linear infinite' : 'none' }}>🎡</div>
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: 20, color: T.brownDark, marginBottom: 6 }}>Spin & Win!</h3>
            <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 20 }}>Earn 500 points to unlock a free spin</p>
            {prize ? (
              <div style={{ background: T.cream, borderRadius: 14, padding: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>🎉</div>
                <div style={{ fontWeight: 800, fontSize: 18, color: T.brown }}>{prize}</div>
              </div>
            ) : (
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }} onClick={spinWheel} disabled={spinning}>
                {spinning ? 'Spinning...' : 'Spin Now!'}
              </button>
            )}
            <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { setShowWheel(false); setPrize(''); }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerInterface;
