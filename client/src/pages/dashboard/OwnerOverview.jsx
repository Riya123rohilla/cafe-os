import { useState } from 'react';
import { T } from '../../theme';
import Icon from '../../components/Icon';
import { SparkLine, BarChart } from '../../components/Charts';

const OwnerOverview = ({ onNavigate }) => {
  const stats = [
    { label: "Today's Revenue", value: '₹18,240', change: '+12%', up: true, spark: [120,145,132,167,155,189,182,220,210,245] },
    { label: 'Total Orders', value: '142', change: '+8%', up: true, spark: [40,55,48,62,58,74,71,85,78,92] },
    { label: 'Active Customers', value: '98', change: '+5%', up: true, spark: [30,35,38,42,40,48,45,54,52,60] },
    { label: 'Avg. Order Value', value: '₹128', change: '-2%', up: false, spark: [140,135,138,130,132,128,125,129,127,128] },
  ];

  const popularItems = [
    { name: 'Cappuccino', orders: 48, revenue: '₹2,880', pct: 85 },
    { name: 'Cold Brew', orders: 36, revenue: '₹2,520', pct: 70 },
    { name: 'Croissant', orders: 30, revenue: '₹1,500', pct: 60 },
    { name: 'Matcha Latte', orders: 22, revenue: '₹1,980', pct: 45 },
    { name: 'Avocado Toast', orders: 18, revenue: '₹2,160', pct: 38 },
  ];

  const recentOrders = [
    { id: '#1042', table: 'T-4', items: 'Cappuccino × 2, Toast', total: '₹380', status: 'served' },
    { id: '#1041', table: 'T-7', items: 'Cold Brew, Croissant', total: '₹270', status: 'preparing' },
    { id: '#1040', table: 'T-2', items: 'Matcha Latte × 3', total: '₹540', status: 'new' },
    { id: '#1039', table: 'T-5', items: 'Espresso, Sandwich', total: '₹220', status: 'served' },
  ];

  const statusColor = { new: T.brown, preparing: T.gold, served: T.success };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div key={s.label} className="stat-card card-hover" style={{ animationDelay: `${i * 0.07}s` }}>
            <div style={{ fontSize: 12, color: T.textMuted, fontWeight: 500, marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontFamily: 'Playfair Display', fontSize: 26, fontWeight: 700, color: T.brownDark, marginBottom: 4 }}>{s.value}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <span style={{ fontSize: 12, color: s.up ? T.success : T.danger, fontWeight: 600 }}>{s.change} vs yesterday</span>
              <SparkLine data={s.spark} color={s.up ? T.brown : T.danger} height={32} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20, marginBottom: 20 }}>
        <div style={{ background: '#fff', borderRadius: 18, padding: 24, border: `1px solid ${T.border}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: 16, color: T.brownDark }}>Popular Items Today</h3>
            <button className="btn-outline" style={{ padding: '6px 14px', fontSize: 12 }} onClick={() => onNavigate('menu')}>View Menu</button>
          </div>
          {popularItems.map((item, i) => (
            <div key={item.name} style={{ marginBottom: 14, animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: T.brownDark }}>{item.name}</span>
                <span style={{ fontSize: 12, color: T.textMuted }}>{item.orders} orders · {item.revenue}</span>
              </div>
              <div style={{ height: 6, background: T.cream, borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${item.pct}%`, background: `linear-gradient(to right,${T.brown},${T.brownLight})`, borderRadius: 3, transition: 'width 0.8s ease' }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: 18, padding: 24, border: `1px solid ${T.border}` }}>
          <h3 style={{ fontFamily: 'Playfair Display', fontSize: 16, color: T.brownDark, marginBottom: 4 }}>Weekly Revenue</h3>
          <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 20 }}>March 4–10, 2026</p>
          <BarChart data={[
            { label: 'Mon', value: 12400 }, { label: 'Tue', value: 14200 }, { label: 'Wed', value: 11800 },
            { label: 'Thu', value: 15600 }, { label: 'Fri', value: 17200 }, { label: 'Sat', value: 20400 }, { label: 'Sun', value: 18240 }
          ]} />
          <div style={{ marginTop: 16, display: 'flex', gap: 16 }}>
            <div style={{ flex: 1, background: T.cream, borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ fontSize: 11, color: T.textMuted }}>This Week</div>
              <div style={{ fontFamily: 'Playfair Display', fontSize: 18, fontWeight: 700, color: T.brownDark }}>₹1,09,840</div>
            </div>
            <div style={{ flex: 1, background: T.cream, borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ fontSize: 11, color: T.textMuted }}>Last Week</div>
              <div style={{ fontFamily: 'Playfair Display', fontSize: 18, fontWeight: 700, color: T.textMuted }}>₹98,220</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 18, padding: 24, border: `1px solid ${T.border}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h3 style={{ fontFamily: 'Playfair Display', fontSize: 16, color: T.brownDark }}>Recent Orders</h3>
          <button className="btn-outline" style={{ padding: '6px 14px', fontSize: 12 }} onClick={() => onNavigate('orders')}>View All</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${T.border}` }}>
              {['Order ID', 'Table', 'Items', 'Total', 'Status'].map(h => (
                <th key={h} style={{ padding: '8px 12px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((o, i) => (
              <tr key={o.id} className="table-row" style={{ borderBottom: `1px solid ${T.border}`, animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}>
                <td style={{ padding: '12px 12px', fontSize: 13, fontWeight: 600, color: T.brown }}>{o.id}</td>
                <td style={{ padding: '12px 12px', fontSize: 13, color: T.text }}>{o.table}</td>
                <td style={{ padding: '12px 12px', fontSize: 13, color: T.textMuted }}>{o.items}</td>
                <td style={{ padding: '12px 12px', fontSize: 13, fontWeight: 600, color: T.brownDark }}>{o.total}</td>
                <td style={{ padding: '12px 12px' }}>
                  <span className="badge" style={{ background: `${statusColor[o.status]}18`, color: statusColor[o.status] }}>
                    ● {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerOverview;
