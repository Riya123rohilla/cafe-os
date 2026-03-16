import { T } from '../../theme';
import Icon from '../../components/Icon';

const InventoryPage = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
      <div>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 22, color: T.brownDark }}>Inventory Control</h2>
        <p style={{ fontSize: 13, color: T.textMuted }}>Track stock levels and manage supplies</p>
      </div>
      <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="plus" size={14} color="#fff" /> Add Item</button>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 24 }}>
      {[['32','In Stock',T.success],['5','Low Stock',T.gold],['3','Out of Stock',T.danger]].map(([n,l,c]) => (
        <div key={l} className="stat-card" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: `${c}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="package" size={22} color={c} />
          </div>
          <div>
            <div style={{ fontFamily: 'Playfair Display', fontSize: 28, fontWeight: 700, color: T.brownDark }}>{n}</div>
            <div style={{ fontSize: 12, color: T.textMuted }}>{l}</div>
          </div>
        </div>
      ))}
    </div>

    <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: T.cream, borderBottom: `1px solid ${T.border}` }}>
            {['Item', 'Category', 'Stock', 'Unit', 'Status', 'Actions'].map(h => (
              <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: 'uppercase' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Espresso Beans', cat: 'Coffee', stock: 12, unit: 'kg', status: 'In Stock' },
            { name: 'Oat Milk', cat: 'Dairy', stock: 4, unit: 'L', status: 'Low Stock' },
            { name: 'Croissant Dough', cat: 'Bakery', stock: 0, unit: 'pcs', status: 'Out of Stock' },
            { name: 'Matcha Powder', cat: 'Beverage', stock: 2, unit: 'kg', status: 'Low Stock' },
            { name: 'Disposable Cups', cat: 'Supplies', stock: 350, unit: 'pcs', status: 'In Stock' },
          ].map((item, i) => {
            const sc = item.status === 'In Stock' ? T.success : item.status === 'Low Stock' ? T.gold : T.danger;
            return (
              <tr key={item.name} className="table-row" style={{ borderBottom: `1px solid ${T.border}`, animation: `fadeUp 0.3s ease ${i * 0.05}s both` }}>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: T.brownDark, fontSize: 13 }}>{item.name}</td>
                <td style={{ padding: '14px 16px' }}><span className="tag">{item.cat}</span></td>
                <td style={{ padding: '14px 16px', fontFamily: 'Playfair Display', fontWeight: 700, color: T.brownDark }}>{item.stock}</td>
                <td style={{ padding: '14px 16px', fontSize: 12, color: T.textMuted }}>{item.unit}</td>
                <td style={{ padding: '14px 16px' }}><span className="badge" style={{ background: `${sc}18`, color: sc }}>● {item.status}</span></td>
                <td style={{ padding: '14px 16px' }}>
                  <button style={{ background: 'transparent', border: `1px solid ${T.border}`, borderRadius: 8, padding: '5px 12px', cursor: 'pointer', fontSize: 12, color: T.brown }}>Restock</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default InventoryPage;
