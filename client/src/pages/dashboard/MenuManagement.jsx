import { useState } from 'react';
import { T } from '../../theme';
import Icon from '../../components/Icon';
import { Modal } from '../../components/UI';

const MenuManagement = () => {
  const [activeTab, setActiveTab] = useState('Coffee');
  const [showAdd, setShowAdd] = useState(false);
  const tabs = ['Coffee', 'Snacks', 'Desserts', 'Beverages'];
  const items = {
    Coffee: [
      { name: 'Cappuccino', price: '₹160', desc: 'Rich espresso with velvety milk foam', available: true, emoji: '☕' },
      { name: 'Cold Brew', price: '₹180', desc: '24-hour slow-steeped coffee over ice', available: true, emoji: '🧊' },
      { name: 'Flat White', price: '₹170', desc: 'Double shot with smooth microfoam', available: false, emoji: '☕' },
      { name: 'Matcha Latte', price: '₹190', desc: 'Japanese ceremonial matcha with oat milk', available: true, emoji: '🍵' },
    ],
    Snacks: [
      { name: 'Avocado Toast', price: '₹220', desc: 'Sourdough with avocado and poached egg', available: true, emoji: '🥑' },
      { name: 'Croissant', price: '₹120', desc: 'Flaky butter croissant, freshly baked', available: true, emoji: '🥐' },
    ],
    Desserts: [
      { name: 'Tiramisu', price: '₹280', desc: 'Classic Italian dessert with espresso', available: true, emoji: '🍰' },
      { name: 'Brownie', price: '₹180', desc: 'Warm fudgy chocolate brownie', available: false, emoji: '🍫' },
    ],
    Beverages: [
      { name: 'Lemonade', price: '₹120', desc: 'Fresh squeezed with mint', available: true, emoji: '🍋' },
    ],
  };

  return (
    <div>
      {showAdd && (
        <Modal title="Add Menu Item" onClose={() => setShowAdd(false)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div><label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>ITEM NAME</label><input className="input-field" placeholder="e.g. Caramel Latte" /></div>
              <div><label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>PRICE</label><input className="input-field" placeholder="₹ 0" /></div>
            </div>
            <div><label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>DESCRIPTION</label><textarea className="input-field" rows={2} placeholder="Describe this item..." style={{ resize: 'none' }} /></div>
            <div><label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>CATEGORY</label>
              <select className="input-field">{tabs.map(t => <option key={t}>{t}</option>)}</select>
            </div>
            <div style={{ border: `2px dashed ${T.border}`, borderRadius: 12, padding: 24, textAlign: 'center', cursor: 'pointer' }}>
              <Icon name="img" size={24} color={T.textMuted} />
              <div style={{ fontSize: 13, color: T.textMuted, marginTop: 8 }}>Upload food image</div>
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button className="btn-outline" onClick={() => setShowAdd(false)}>Cancel</button>
              <button className="btn-primary" onClick={() => setShowAdd(false)}>Add Item</button>
            </div>
          </div>
        </Modal>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 22, color: T.brownDark }}>Digital Menu</h2>
          <p style={{ fontSize: 13, color: T.textMuted }}>Manage your café's full menu catalog</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAdd(true)} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="plus" size={14} color="#fff" /> Add Item
        </button>
      </div>

      <div style={{ display: 'flex', gap: 4, marginBottom: 24, background: '#fff', padding: 6, borderRadius: 14, border: `1px solid ${T.border}`, width: 'fit-content' }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setActiveTab(t)} style={{ padding: '8px 18px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'DM Sans', fontSize: 13, fontWeight: 500, background: activeTab === t ? T.brown : 'transparent', color: activeTab === t ? '#fff' : T.textMuted, transition: 'all 0.18s' }}>
            {t}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
        {(items[activeTab] || []).map((item, i) => (
          <div key={item.name} className="card-hover" style={{ background: '#fff', borderRadius: 16, padding: 20, border: `1px solid ${T.border}`, display: 'flex', gap: 14, animation: `fadeUp 0.35s ease ${i * 0.07}s both` }}>
            <div style={{ width: 64, height: 64, borderRadius: 14, background: T.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, flexShrink: 0 }}>{item.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                <span style={{ fontWeight: 600, color: T.brownDark, fontSize: 14 }}>{item.name}</span>
                <span style={{ fontFamily: 'Playfair Display', fontWeight: 700, color: T.brown, fontSize: 15 }}>{item.price}</span>
              </div>
              <p style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.5, marginBottom: 10 }}>{item.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="badge" style={{ background: item.available ? '#4CAF6B18' : '#E05C5C18', color: item.available ? T.success : T.danger }}>
                  {item.available ? '● Available' : '● Out of Stock'}
                </span>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button style={{ width: 28, height: 28, borderRadius: 8, border: `1px solid ${T.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="edit" size={13} color={T.brown} /></button>
                  <button style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid #E05C5C22', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="trash" size={13} color={T.danger} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuManagement;
