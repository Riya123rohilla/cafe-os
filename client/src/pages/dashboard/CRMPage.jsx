import { T } from '../../theme';
import Icon from '../../components/Icon';
import { Avatar } from '../../components/UI';

const CRMPage = () => {
  const customers = [
    { name: 'Aditya Rao', phone: '+91 98765 43210', visits: 24, revenue: '₹10,800', tier: 'GOLD ELITE', lastVisit: '2 days ago' },
    { name: 'Priya Sharma', phone: '+91 99988 76655', visits: 8, revenue: '₹2,240', tier: 'SILVER', lastVisit: '1 week ago' },
    { name: 'Vikram Mehta', phone: '+91 91234 56789', visits: 15, revenue: '₹6,750', tier: 'GOLD', lastVisit: '3 days ago' },
    { name: 'Neha Kapoor', phone: '+91 87654 32109', visits: 3, revenue: '₹840', tier: 'BRONZE', lastVisit: '2 weeks ago' },
    { name: 'Ravi Patel', phone: '+91 76543 21098', visits: 31, revenue: '₹15,500', tier: 'PLATINUM', lastVisit: 'Yesterday' },
  ];
  const tierColor = { PLATINUM: '#8B5CF6', 'GOLD ELITE': T.gold, GOLD: T.gold, SILVER: '#6B7280', BRONZE: '#C87941' };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 22, color: T.brownDark }}>Customer Relationships</h2>
          <p style={{ fontSize: 13, color: T.textMuted }}>You have 1,240 happy patrons today.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="plus" size={14} color="#fff" /> New Campaign
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        {[['1,240','Total Patrons','+12%'],['85 /wk','New Arrivals','+8.4%'],['12.5%','Sticky Rate','+2%'],['450','WiFi Captures','TOP']].map(([v,l,p]) => (
          <div key={l} className="stat-card card-hover">
            <div style={{ fontSize: 11, color: T.textMuted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>{l}</div>
            <div style={{ fontFamily: 'Playfair Display', fontSize: 26, fontWeight: 700, color: T.brownDark, marginBottom: 2 }}>{v}</div>
            <span className="badge badge-success" style={{ fontSize: 11 }}>{p}</span>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}`, display: 'flex', gap: 20, alignItems: 'center' }}>
          {['All Patrons (1,240)', 'VIP Gold (124)', 'New Faces (85)', 'Quiet Lately (42)'].map((t, i) => (
            <span key={t} style={{ fontSize: 13, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? T.brown : T.textMuted, cursor: 'pointer', borderBottom: i === 0 ? `2px solid ${T.brown}` : 'none', paddingBottom: 4 }}>{t}</span>
          ))}
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${T.border}`, background: T.cream }}>
              {['Customer', 'Loyalty Tier', 'Activity', 'Revenue', 'Actions'].map(h => (
                <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr key={c.name} className="table-row" style={{ borderBottom: `1px solid ${T.border}`, animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}>
                <td style={{ padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Avatar name={c.name} size={34} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: T.brownDark }}>{c.name}</div>
                      <div style={{ fontSize: 11, color: T.textMuted }}>{c.phone}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '14px 16px' }}>
                  <span className="badge" style={{ background: `${tierColor[c.tier]}18`, color: tierColor[c.tier], fontWeight: 700 }}>{c.tier}</span>
                </td>
                <td style={{ padding: '14px 16px' }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: T.brownDark }}>{c.visits} Visits Total</div>
                  <div style={{ fontSize: 11, color: T.textMuted }}>Last: {c.lastVisit}</div>
                </td>
                <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 700, color: T.brownDark }}>{c.revenue}</td>
                <td style={{ padding: '14px 16px' }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['eye', 'edit', 'globe'].map(ic => (
                      <button key={ic} style={{ width: 28, height: 28, borderRadius: 8, border: `1px solid ${T.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name={ic} size={12} color={T.textMuted} />
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CRMPage;
