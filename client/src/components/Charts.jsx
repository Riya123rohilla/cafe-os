import { T } from '../theme';

export const SparkLine = ({ data, color = T.brown, height = 40 }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 120, h = height;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  });
  const last = pts[pts.length - 1].split(',');
  return (
    <svg width={w} height={h} style={{ overflow: 'visible' }}>
      <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last[0]} cy={last[1]} r="3" fill={color} />
    </svg>
  );
};

export const DonutChart = ({ data }) => {
  const total = data.reduce((s, d) => s + d.value, 0);
  let cumulative = 0;
  const cx = 60, cy = 60, r = 48, inner = 30;
  const segments = data.map(d => {
    const startAngle = (cumulative / total) * 360 - 90;
    cumulative += d.value;
    const endAngle = (cumulative / total) * 360 - 90;
    const toRad = a => a * Math.PI / 180;
    const start = { x: cx + r * Math.cos(toRad(startAngle)), y: cy + r * Math.sin(toRad(startAngle)) };
    const end = { x: cx + r * Math.cos(toRad(endAngle)), y: cy + r * Math.sin(toRad(endAngle)) };
    const iStart = { x: cx + inner * Math.cos(toRad(endAngle)), y: cy + inner * Math.sin(toRad(endAngle)) };
    const iEnd = { x: cx + inner * Math.cos(toRad(startAngle)), y: cy + inner * Math.sin(toRad(startAngle)) };
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return {
      ...d,
      path: `M${start.x},${start.y} A${r},${r},0,${largeArc},1,${end.x},${end.y} L${iStart.x},${iStart.y} A${inner},${inner},0,${largeArc},0,${iEnd.x},${iEnd.y} Z`
    };
  });
  return (
    <svg width={120} height={120}>
      {segments.map((s, i) => <path key={i} d={s.path} fill={s.color} opacity={0.9} />)}
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill={T.brownDark} fontFamily="DM Sans">{total}</text>
    </svg>
  );
};

export const BarChart = ({ data }) => {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 80, padding: '0 4px' }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{
            width: '100%',
            background: i === data.length - 1 ? T.brown : T.creamDark,
            borderRadius: '5px 5px 0 0',
            height: `${(d.value / max) * 64}px`,
            transition: 'height 0.6s ease',
          }} />
          <span style={{ fontSize: 10, color: T.textMuted }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
};
