import { T } from '../../theme';
import Icon from '../../components/Icon';

const LoyaltyPage = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
      <div>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 22, color: T.brownDark }}>Loyalty & Rewards</h2>
        <p style={{ fontSize: 13, color: T.textMuted }}>Scale your café with premium membership tiers and automated rewards.</p>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="btn-outline">Analytics Report</button>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="plus" size={14} color="#fff" /> New Program</button>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
      {[['1,284','Active Members','+14%'],['42.5k','Points Issued','+8%'],['32.8%','Redemption Rate','Steady'],['₹1.2L','Revenue Saved','+22% ROI']].map(([v,l,p]) => (
        <div key={l} className="stat-card card-hover">
          <div style={{ fontSize: 11, color: T.textMuted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>{l}</div>
          <div style={{ fontFamily: 'Playfair Display', fontSize: 26, fontWeight: 700, color: T.brownDark }}>{v}</div>
          <span className="badge badge-success" style={{ fontSize: 10, marginTop: 4 }}>{p}</span>
        </div>
      ))}
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
      <div style={{ background: '#fff', borderRadius: 18, padding: 24, border: `1px solid ${T.border}` }}>
        <h3 style={{ fontFamily: 'Playfair Display', fontSize: 16, color: T.brownDark, marginBottom: 4 }}>Membership Configuration</h3>
        <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 20 }}>Define how users earn and grow through your café.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div><label style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, display: 'block', marginBottom: 6 }}>EARNING THRESHOLD</label><input className="input-field" defaultValue="₹ 100" /></div>
          <div><label style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, display: 'block', marginBottom: 6 }}>REWARD EXPIRY POLICY</label><input className="input-field" defaultValue="Fixed: 12 Months" /></div>
          <div><label style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, display: 'block', marginBottom: 6 }}>POINTS MULTIPLIER</label><input className="input-field" defaultValue="10" /></div>
          <div style={{ background: `${T.brown}18`, borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: T.brown, marginBottom: 4 }}>CONVERSION ENGINE</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 18, fontWeight: 700, fontFamily: 'Playfair Display', color: T.brownDark }}>500 pts</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: T.success }}>= ₹50</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 18, padding: 24, border: `1px solid ${T.border}` }}>
        <h3 style={{ fontFamily: 'Playfair Display', fontSize: 16, color: T.brownDark, marginBottom: 16 }}>Tier Management</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { name: 'Bronze Roast', req: '0–500 pts', color: '#C87941', bg: '#C8794118' },
            { name: 'Silver Brew', req: '500–1500 pts', color: '#6B7280', bg: '#6B728018' },
            { name: 'Golden Roast', req: '1500–2500 pts', color: T.gold, bg: `${T.gold}18` },
            { name: 'Zen Master', req: '2500+ pts', color: T.brown, bg: `${T.brown}18` },
          ].map(tier => (
            <div key={tier.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: tier.bg, borderRadius: 12, border: `1px solid ${tier.color}22` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name="crown" size={16} color={tier.color} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: T.brownDark }}>{tier.name}</div>
                  <div style={{ fontSize: 11, color: T.textMuted }}>{tier.req}</div>
                </div>
              </div>
              <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><Icon name="edit" size={14} color={T.textMuted} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default LoyaltyPage;
