import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { T } from '../../theme';
import Icon from '../../components/Icon';

const AuthPage = ({ defaultMode = 'login' }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    setError('');
    if (email === 'admin@cafeos.in') {
      navigate('/admin');
    } else {
      navigate('/owner/dashboard');
    }
  };

  const stats = [
    { label: 'Active Cafés', value: '48+' },
    { label: 'Orders / Day', value: '3.8K' },
    { label: 'Happy Customers', value: '1.2L+' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>
      {/* Left panel */}
      <div style={{ flex: 1, background: `linear-gradient(145deg, ${T.brownDark} 0%, ${T.brown} 60%, #5A3A25 100%)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 56px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: T.gold, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="coffee" size={22} color="#fff" />
          </div>
          <span style={{ fontFamily: 'Playfair Display', fontSize: 22, fontWeight: 700, color: '#fff' }}>Café OS</span>
        </div>

        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 34, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
          Where every cup<br />tells a story
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 48, maxWidth: 340 }}>
          The complete operating system for modern cafés — orders, loyalty, analytics, and more in one place.
        </p>

        <div style={{ display: 'flex', gap: 24 }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 22, fontWeight: 800, color: T.gold }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div style={{ width: 480, background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 48px' }}>
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: 'Playfair Display', fontSize: 26, fontWeight: 700, color: T.brownDark, marginBottom: 6 }}>
            {mode === 'login' ? 'Welcome back' : 'Create account'}
          </h3>
          <p style={{ fontSize: 14, color: T.textMuted }}>
            {mode === 'login' ? 'Sign in to manage your café' : 'Join 48+ cafés on Café OS'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {mode === 'signup' && (
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>CAFÉ NAME</label>
              <input className="input-field" placeholder="Artisan Corner Café" value={name} onChange={e => setName(e.target.value)} />
            </div>
          )}
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>EMAIL</label>
            <input className="input-field" type="email" placeholder="owner@cafe.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>PASSWORD</label>
            <input className="input-field" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          {error && <div style={{ fontSize: 13, color: T.danger, background: `${T.danger}12`, borderRadius: 8, padding: '8px 12px' }}>{error}</div>}

          {mode === 'login' && (
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: 13, color: T.brown, cursor: 'pointer', fontWeight: 500 }}>Forgot password?</span>
            </div>
          )}

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: 15, marginTop: 4 }}>
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div style={{ marginTop: 24, textAlign: 'center', fontSize: 13, color: T.textMuted }}>
          {mode === 'login' ? (
            <>Don't have an account?{' '}<span style={{ color: T.brown, fontWeight: 600, cursor: 'pointer' }} onClick={() => setMode('signup')}>Sign up free</span></>
          ) : (
            <>Already have an account?{' '}<span style={{ color: T.brown, fontWeight: 600, cursor: 'pointer' }} onClick={() => setMode('login')}>Sign in</span></>
          )}
        </div>

        <div style={{ marginTop: 32, padding: 16, background: T.cream, borderRadius: 12, fontSize: 12, color: T.textMuted, lineHeight: 1.6 }}>
          <strong style={{ color: T.brown }}>Demo hint:</strong> Use <code style={{ background: T.border, padding: '1px 5px', borderRadius: 4 }}>admin@cafeos.in</code> for Super Admin, or any other email for Owner dashboard.
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
