import { T } from '../../theme';
import Icon from '../../components/Icon';
import { BarChart, DonutChart } from '../../components/Charts';

const AnalyticsPage = () => {
  const stats = [
    { label: 'Total Revenue', value: '₹1,24,800', change: '+18%', icon: 'trending', up: true },
    { label: 'Orders This Month', value: '1,392', change: '+12%', icon: 'bar', up: true },
    { label: 'Avg Order Value', value: '₹248', change: '+4%', icon: 'star', up: true },
    { label: 'New Customers', value: '186', change: '-3%', icon: 'users', up: false },
  ];

  const revenueData = [
    { label: 'Mon', value: 78 }, { label: 'Tue', value: 92 }, { label: 'Wed', value: 56 },
    { label: 'Thu', value: 110 }, { label: 'Fri', value: 134 }, { label: 'Sat', value: 145 }, { label: 'Sun', value: 98 },
  ];

  const categoryData = [
    { label: 'Coffee', value: 42, color: T.brown },
    { label: 'Snacks', value: 28, color: T.gold },
    { label: 'Desserts', value: 18, color: '#E8A87C' },
    { label: 'Beverages', value: 12, color: T.brownLight },
  ];

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 22, color: T.brownDark }}>Analytics</h2>
        <p style={{ fontSize: 13, color: T.textMuted }}>Insights for the last 30 days</p>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div key={s.label} className="stat-card" style={{ animation: `fadeUp 0.4s ease ${i * 0.07}s both` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: T.brownDark }}>{s.value}</div>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `${T.brown}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={s.icon} size={18} color={T.brown} />
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: 12, fontWeight: 600, color: s.up ? T.success : T.danger }}>
              {s.change} vs last month
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: 24, border: `1px solid ${T.border}`, animation: 'fadeUp 0.5s ease 0.2s both' }}>
          <div style={{ fontWeight: 700, color: T.brownDark, marginBottom: 20 }}>Revenue Trend (This Week)</div>
          <BarChart data={revenueData} />
        </div>
        <div style={{ background: '#fff', borderRadius: 20, padding: 24, border: `1px solid ${T.border}`, animation: 'fadeUp 0.5s ease 0.25s both' }}>
          <div style={{ fontWeight: 700, color: T.brownDark, marginBottom: 20 }}>Sales by Category</div>
          <DonutChart data={categoryData} />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {categoryData.map(d => (
              <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: d.color }} />
                  <span style={{ fontSize: 13, color: T.text }}>{d.label}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: T.brownDark }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
