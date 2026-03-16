import { useState } from 'react';
import { T } from '../../theme';
import Icon from '../../components/Icon';
import { Avatar } from '../../components/UI';
import { BarChart, DonutChart } from '../../components/Charts';

/* ── Sub-page: Platform Overview ── */
const AdminOverview = () => {
  const stats = [
    { label: 'Total Cafés', value: '48', icon: 'coffee', change: '+6 this month' },
    { label: 'Active Users', value: '1,204', icon: 'users', change: '+134 this week' },
    { label: 'Monthly Revenue', value: '₹2.4L', icon: 'trending', change: '+22% MoM' },
    { label: 'Orders Today', value: '3,892', icon: 'bar', change: 'Across all tenants' },
  ];
  const revenueData = [
    { label: 'Jan', value: 60 }, { label: 'Feb', value: 72 }, { label: 'Mar', value: 85 },
    { label: 'Apr', value: 78 }, { label: 'May', value: 95 }, { label: 'Jun', value: 112 },
  ];
  const planData = [
    { label: 'Starter', value: 40, color: T.brownLight },
    { label: 'Growth', value: 38, color: T.brown },
    { label: 'Enterprise', value: 22, color: T.gold },
  ];
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div key={s.label} className="stat-card" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.12)', animation: `fadeUp 0.4s ease ${i * 0.07}s both` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>{s.label}</div><div style={{ fontSize: 24, fontWeight: 800, color: '#fff' }}>{s.value}</div></div>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s.icon} size={18} color={T.gold} /></div>
            </div>
            <div style={{ marginTop: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{s.change}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 20, padding: 24, border: '1px solid rgba(255,255,255,0.1)', animation: 'fadeUp 0.5s ease 0.2s both' }}>
          <div style={{ fontWeight: 700, color: '#fff', marginBottom: 20 }}>Platform Revenue (6 months)</div>
          <BarChart data={revenueData} />
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 20, padding: 24, border: '1px solid rgba(255,255,255,0.1)', animation: 'fadeUp 0.5s ease 0.25s both' }}>
          <div style={{ fontWeight: 700, color: '#fff', marginBottom: 20 }}>Plan Distribution</div>
          <DonutChart data={planData} />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {planData.map(d => (<div key={d.label} style={{ display: 'flex', justifyContent: 'space-between' }}><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: d.color }} /><span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>{d.label}</span></div><span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{d.value}%</span></div>))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Sub-page: Tenants ── */
const TenantsPage = () => {
  const tenants = [
    { name: 'Artisan Corner', plan: 'Growth', status: 'Active', orders: '1,204', revenue: '₹48,200' },
    { name: 'Brewed Bliss', plan: 'Starter', status: 'Active', orders: '834', revenue: '₹31,100' },
    { name: 'Café Mocha', plan: 'Enterprise', status: 'Active', orders: '2,891', revenue: '₹1,12,400' },
    { name: 'The Daily Grind', plan: 'Starter', status: 'Suspended', orders: '204', revenue: '₹8,700' },
    { name: 'Sunrise Roast', plan: 'Growth', status: 'Active', orders: '1,560', revenue: '₹62,800' },
  ];
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h3 style={{ color: '#fff', fontSize: 16 }}>All Tenants ({tenants.length})</h3>
        <button className="btn-primary">+ Invite Café</button>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
        {tenants.map((t, i) => (
          <div key={t.name} className="table-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: 12, padding: '14px 20px', borderBottom: i < tenants.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Avatar name={t.name} size={32} /><span style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{t.name}</span></div>
            <span className="badge badge-gold">{t.plan}</span>
            <span className="badge" style={{ background: t.status === 'Active' ? '#4CAF6B18' : '#E05C5C18', color: t.status === 'Active' ? T.success : T.danger }}>● {t.status}</span>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>{t.orders}</span>
            <span style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>{t.revenue}</span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button className="btn-outline" style={{ padding: '4px 10px', fontSize: 12 }}>View</button>
              {t.status === 'Active' ? <button style={{ padding: '4px 10px', fontSize: 12, borderRadius: 8, background: '#E05C5C18', color: T.danger, border: `1px solid ${T.danger}40`, cursor: 'pointer' }}>Suspend</button> : <button className="btn-primary" style={{ padding: '4px 10px', fontSize: 12 }}>Activate</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Sub-page: Features ── */
const FeaturesAdminPage = () => {
  const [features, setFeatures] = useState([
    { name: 'QR Ordering', desc: 'Allow customers to order via QR code', enabled: true },
    { name: 'Loyalty Rewards', desc: 'Points + tier system for customers', enabled: true },
    { name: 'AI Menu Suggestions', desc: 'ML-based upselling suggestions', enabled: false },
    { name: 'Real-time Analytics', desc: 'Live sales and order analytics', enabled: true },
    { name: 'Multi-location', desc: 'Manage multiple café branches', enabled: false },
    { name: 'WhatsApp Notifications', desc: 'Order updates via WhatsApp', enabled: true },
  ]);
  const toggle = i => setFeatures(f => f.map((x, j) => j === i ? { ...x, enabled: !x.enabled } : x));
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
      {features.map((f, i) => (
        <div key={f.name} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}>
          <div><div style={{ fontWeight: 600, color: '#fff', fontSize: 14, marginBottom: 4 }}>{f.name}</div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{f.desc}</div></div>
          <div onClick={() => toggle(i)} style={{ width: 44, height: 24, borderRadius: 12, background: f.enabled ? T.gold : 'rgba(255,255,255,0.15)', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
            <div style={{ position: 'absolute', top: 3, left: f.enabled ? 23 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left 0.2s' }} />
          </div>
        </div>
      ))}
    </div>
  );
};

/* ── Sub-page: Plans ── */
const PlansPage = () => {
  const plans = [
    { name: 'Starter', price: '₹999/mo', features: ['Up to 100 orders/day', 'Basic analytics', 'QR ordering', 'Email support'], tenants: 18, color: T.brownLight },
    { name: 'Growth', price: '₹2,499/mo', features: ['Unlimited orders', 'Advanced analytics', 'Loyalty program', 'CRM module', 'Priority support'], tenants: 22, color: T.brown, popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Multi-location', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee', 'White-label option'], tenants: 8, color: T.gold },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
      {plans.map((p, i) => (
        <div key={p.name} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 20, padding: 28, border: `2px solid ${p.popular ? T.gold : 'rgba(255,255,255,0.1)'}`, position: 'relative', animation: `fadeUp 0.4s ease ${i * 0.1}s both` }}>
          {p.popular && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: T.gold, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 12px', borderRadius: 20 }}>MOST POPULAR</div>}
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.color, marginBottom: 12 }} />
          <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{p.name}</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: T.gold, marginBottom: 16 }}>{p.price}</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{p.tenants} active tenants</div>
          {p.features.map(f => (<div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}><Icon name="check" size={12} color={T.gold} /><span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{f}</span></div>))}
          <button className="btn-outline" style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}>Edit Plan</button>
        </div>
      ))}
    </div>
  );
};

/* ── Admin Dashboard Shell ── */
const adminNav = [
  { id: 'overview', icon: 'home', label: 'Overview' },
  { id: 'tenants', icon: 'users', label: 'Tenants' },
  { id: 'features', icon: 'settings', label: 'Features' },
  { id: 'plans', icon: 'star', label: 'Plans' },
];

const adminPages = { overview: AdminOverview, tenants: TenantsPage, features: FeaturesAdminPage, plans: PlansPage };
const adminTitles = { overview: 'Platform Overview', tenants: 'Tenant Management', features: 'Feature Flags', plans: 'Subscription Plans' };

const AdminDashboard = ({ onLogout }) => {
  const [active, setActive] = useState('overview');
  const PageComponent = adminPages[active];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#1A0E08', fontFamily: 'DM Sans, sans-serif' }}>
      {/* Dark sidebar */}
      <aside style={{ width: 220, background: '#2A1810', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '24px 20px 20px' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: T.gold, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="crown" size={18} color="#fff" /></div>
          <div><div style={{ fontSize: 15, fontWeight: 700, color: '#fff', fontFamily: 'Playfair Display' }}>Café OS</div><div style={{ fontSize: 10, color: T.gold, fontWeight: 600 }}>SUPER ADMIN</div></div>
        </div>
        <nav style={{ padding: '0 10px', flex: 1 }}>
          {adminNav.map(item => (
            <div key={item.id} onClick={() => setActive(item.id)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, cursor: 'pointer', marginBottom: 4, background: active === item.id ? `${T.gold}22` : 'transparent', color: active === item.id ? T.gold : 'rgba(255,255,255,0.55)', fontWeight: active === item.id ? 600 : 400, fontSize: 14, transition: 'all 0.2s' }}>
              <Icon name={item.icon} size={16} color={active === item.id ? T.gold : 'rgba(255,255,255,0.4)'} />
              {item.label}
            </div>
          ))}
        </nav>
        <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar name="Admin" size={32} />
            <div style={{ flex: 1 }}><div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>Super Admin</div><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>admin@cafeos.in</div></div>
            <button onClick={onLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><Icon name="logout" size={15} color="rgba(255,255,255,0.4)" /></button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header style={{ height: 60, background: '#2A1810', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', flexShrink: 0 }}>
          <h1 style={{ fontSize: 17, fontWeight: 700, color: '#fff' }}>{adminTitles[active]}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ background: `${T.gold}22`, color: T.gold, fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 20, border: `1px solid ${T.gold}44` }}>48 active cafés</div>
            <button style={{ width: 36, height: 36, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="bell" size={15} color={T.gold} /></button>
          </div>
        </header>
        <main style={{ flex: 1, padding: 24, overflowY: 'auto' }} key={active}>
          <PageComponent />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
