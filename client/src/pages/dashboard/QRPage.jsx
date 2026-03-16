import { T } from '../../theme';
import Icon from '../../components/Icon';

const QRPage = () => {
  const stats = [
    { label: 'Scans Today', value: '142', icon: 'eye' },
    { label: 'Total Scans', value: '4,291', icon: 'trending' },
    { label: 'Order Conversion', value: '67%', icon: 'check' },
  ];

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 22, color: T.brownDark }}>QR Code Manager</h2>
        <p style={{ fontSize: 13, color: T.textMuted }}>Your digital menu QR — share, download, or print</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* QR Display */}
        <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, animation: 'fadeUp 0.4s ease both' }}>
          <div style={{ width: 200, height: 200, background: T.cream, borderRadius: 16, border: `3px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* SVG mock QR pattern */}
            <svg width="160" height="160" viewBox="0 0 160 160">
              <rect x="10" y="10" width="50" height="50" rx="4" fill={T.brownDark} />
              <rect x="18" y="18" width="34" height="34" rx="2" fill="#fff" />
              <rect x="26" y="26" width="18" height="18" rx="1" fill={T.brownDark} />
              <rect x="100" y="10" width="50" height="50" rx="4" fill={T.brownDark} />
              <rect x="108" y="18" width="34" height="34" rx="2" fill="#fff" />
              <rect x="116" y="26" width="18" height="18" rx="1" fill={T.brownDark} />
              <rect x="10" y="100" width="50" height="50" rx="4" fill={T.brownDark} />
              <rect x="18" y="108" width="34" height="34" rx="2" fill="#fff" />
              <rect x="26" y="116" width="18" height="18" rx="1" fill={T.brownDark} />
              {[0,1,2,3,4,5].map(r => [0,1,2,3,4,5].map(c => Math.random() > 0.5 ? (
                <rect key={`${r}-${c}`} x={68 + c * 8} y={68 + r * 8} width="6" height="6" rx="1" fill={T.brownDark} />
              ) : null))}
              <rect x="65" y="65" width="30" height="30" rx="6" fill="#fff" />
              <text x="80" y="85" textAnchor="middle" fontSize="16">☕</text>
            </svg>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, color: T.brownDark, fontSize: 15 }}>Artisan Corner Café</div>
            <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>cafeos.app/order/artisan-corner</div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="img" size={14} color="#fff" /> Download PNG</button>
            <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="eye" size={14} color={T.brown} /> Preview</button>
            <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="settings" size={14} color={T.brown} /> Print</button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, animation: 'fadeUp 0.4s ease 0.1s both' }}>
          {stats.map((s, i) => (
            <div key={s.label} className="stat-card card-hover" style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: `${T.brown}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={s.icon} size={20} color={T.brown} />
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 800, color: T.brownDark }}>{s.value}</div>
                <div style={{ fontSize: 13, color: T.textMuted }}>{s.label}</div>
              </div>
            </div>
          ))}
          <div style={{ background: `${T.gold}18`, borderRadius: 16, padding: 20, border: `1px dashed ${T.gold}` }}>
            <div style={{ fontWeight: 700, color: T.brownDark, marginBottom: 6 }}>💡 Pro Tip</div>
            <div style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.6 }}>
              Place your QR code at each table to let customers order directly without waiting for staff.
              This reduces wait times by up to 40%.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRPage;
