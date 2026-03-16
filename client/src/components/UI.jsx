import { T } from '../theme';
import Icon from './Icon';

export const Modal = ({ title, children, onClose }) => (
  <div style={{ position: 'fixed', inset: 0, background: 'rgba(62,39,35,0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', animation: 'fadeIn 0.2s ease' }}>
    <div style={{ background: '#fff', borderRadius: 20, padding: 28, width: 480, maxWidth: '90vw', animation: 'scaleIn 0.25s ease', boxShadow: '0 24px 64px rgba(62,39,35,0.2)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h3 style={{ fontFamily: 'Playfair Display', fontSize: 20, color: T.brownDark }}>{title}</h3>
        <button onClick={onClose} style={{ background: T.cream, border: 'none', borderRadius: 8, width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="x" size={16} color={T.textMuted} />
        </button>
      </div>
      {children}
    </div>
  </div>
);

export const Avatar = ({ name, size = 36 }) => {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('');
  const hue = name.charCodeAt(0) % 60 + 20;
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: `hsl(${hue},40%,70%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.35, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
      {initials}
    </div>
  );
};
