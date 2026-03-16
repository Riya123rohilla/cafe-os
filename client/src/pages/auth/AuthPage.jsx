import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { T } from '../../theme';

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

  const features = [
    { icon: '📋', label: 'Digital Menu', desc: 'Smart, dynamic menu management' },
    { icon: '🛒', label: 'Smart Orders', desc: 'Real-time order tracking' },
    { icon: '🎁', label: 'Loyalty Rewards', desc: 'Engage & retain customers' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>
      {/* Left panel */}
      <div style={{ flex: 1, background: `linear-gradient(145deg, ${T.brownDark} 0%, ${T.brown} 60%, #5A3A25 100%)`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '60px 56px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

        <div style={{ zIndex: 1 }}>
          {/* Tagline */}
          <div style={{ marginBottom: 40 }}>
            <h1 style={{ fontFamily: 'Playfair Display', fontSize: 42, fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>Café OS</h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: 360 }}>
              A smart SaaS platform helping cafés manage digital menus, orders, rewards and customer relationships.
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 48 }}>
            <button onClick={() => setMode('login')} style={{ flex: 1, padding: '13px 20px', borderRadius: 12, border: 'none', background: mode === 'login' ? T.gold : 'rgba(255,255,255,0.15)', color: mode === 'login' ? '#fff' : 'rgba(255,255,255,0.75)', fontWeight: 700, cursor: 'pointer', fontSize: 14, transition: 'all 0.2s' }}>
              🔑 Login
            </button>
            <button onClick={() => setMode('signup')} style={{ flex: 1, padding: '13px 20px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.3)', background: mode === 'signup' ? T.gold : 'transparent', color: mode === 'signup' ? '#fff' : 'rgba(255,255,255,0.75)', fontWeight: 700, cursor: 'pointer', fontSize: 14, transition: 'all 0.2s' }}>
              ✨ Signup
            </button>
          </div>

          {/* Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {features.map(f => (
              <div key={f.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 28, marginTop: 2 }}>{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 2 }}>{f.label}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - 3D Illustration */}
      <div style={{ flex: 1, background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px 48px', position: 'relative', overflow: 'hidden' }}>
        {/* Animated 3D-inspired Coffee Cup */}
        <div style={{ position: 'relative', width: 300, height: 340, marginBottom: 48, animation: 'float 6s ease-in-out infinite' }}>
          {/* Cup Shadow */}
          <div style={{ position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)', width: 200, height: 40, borderRadius: '50%', background: 'rgba(111,78,55,0.1)', filter: 'blur(20px)' }} />

          {/* 3D Cup - Main body */}
          <svg viewBox="0 0 200 280" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 20px 40px rgba(111,78,55,0.2))' }}>
            {/* Cup Body (3D perspective) */}
            <defs>
              <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#E8A87C', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#A0714F', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#6F4E37', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4A2E1C', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#3E2723', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#2C1810', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* Cup body left side (3D depth) */}
            <path d="M 40 80 L 35 220 Q 35 240 50 245 L 150 245 Q 165 240 165 220 L 160 80 Z" fill="url(#cupGradient)" />

            {/* Cup body highlight (right side) */}
            <path d="M 160 80 L 165 220 Q 165 240 150 245 L 150 20 Q 160 40 160 80 Z" fill="rgba(255,255,255,0.15)" />

            {/* Cup rim (top) */}
            <ellipse cx="100" cy="80" rx="60" ry="18" fill="#8B5A3C" />
            <ellipse cx="100" cy="75" rx="60" ry="15" fill="#A0714F" />

            {/* Coffee inside */}
            <ellipse cx="100" cy="80" rx="55" ry="14" fill="url(#coffeeGradient)" />

            {/* Coffee liquid level */}
            <path d="M 50 140 Q 100 135 150 140 L 145 220 Q 100 225 55 220 Z" fill="#3E2723" opacity="0.6" />

            {/* Coffee steam/foam */}
            <circle cx="70" cy="100" r="12" fill="rgba(255,255,255,0.3)" opacity="0.7" />
            <circle cx="100" cy="95" r="14" fill="rgba(255,255,255,0.25)" opacity="0.7" />
            <circle cx="130" cy="100" r="11" fill="rgba(255,255,255,0.3)" opacity="0.7" />

            {/* Handle (3D perspective) */}
            <path d="M 165 120 Q 220 120 220 180 Q 220 200 160 210" fill="none" stroke="url(#cupGradient)" strokeWidth="16" strokeLinecap="round" />
            <path d="M 168 125 Q 215 125 215 180 Q 215 198 162 208" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" strokeLinecap="round" />
          </svg>

          {/* Floating icon badges */}
          <div style={{ position: 'absolute', top: -20, left: 20, width: 60, height: 60, borderRadius: 16, background: T.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, boxShadow: '0 10px 30px rgba(0,0,0,0.15)', animation: 'scaleIn 0.6s ease 0.3s both' }}>
            📋
          </div>
          <div style={{ position: 'absolute', top: 40, right: 0, width: 60, height: 60, borderRadius: 16, background: '#FFF5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, boxShadow: '0 10px 30px rgba(0,0,0,0.15)', animation: 'scaleIn 0.6s ease 0.4s both' }}>
            🛒
          </div>
          <div style={{ position: 'absolute', bottom: 50, right: 20, width: 60, height: 60, borderRadius: 16, background: T.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, boxShadow: '0 10px 30px rgba(0,0,0,0.15)', animation: 'scaleIn 0.6s ease 0.5s both' }}>
            🎁
          </div>
        </div>

        {/* Subtext */}
        <p style={{ fontSize: 15, color: T.textMuted, textAlign: 'center', maxWidth: 320 }}>
          Manage your café like never before with our all-in-one platform
        </p>
      </div>

      {/* Form Modal Overlay */}
      {mode && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}>
          <div style={{ background: '#fff', borderRadius: 24, padding: 40, maxWidth: 420, width: '90%', maxHeight: '90vh', overflowY: 'auto', animation: 'scaleIn 0.3s ease both', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>
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
      )}
    </div>
  );
};

export default AuthPage;
