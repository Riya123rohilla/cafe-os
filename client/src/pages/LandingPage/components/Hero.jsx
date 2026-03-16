import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    { icon: '📋', label: 'Digital Menu', desc: 'Smart, dynamic menu management' },
    { icon: '🛒', label: 'Smart Orders', desc: 'Real-time order tracking' },
    { icon: '🎁', label: 'Loyalty Rewards', desc: 'Engage & retain customers' },
  ];

  return (
    <section className={styles.hero} id="hero">
      {/* Left Panel */}
      <div className={styles.leftPanel}>
        {/* Tagline */}
        <div className={styles.taglineContainer}>
          <h1 className={styles.title}>Café Management</h1>
          <p className={styles.description}>
            Everything your café needs<br />
            One platform to run your entire café — from menus to loyalty programs.
          </p>
        </div>

        {/* Join Us Button */}
        <div className={styles.actions}>
          <button className={styles.btnJoinUs} onClick={() => navigate('/auth')}>
            Join Us Now →
          </button>
        </div>

        {/* Features */}
        <div className={styles.featuresList}>
          {features.map(f => (
            <div key={f.label} className={`${styles.featureItem} ${styles.hoverFeature}`}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <div className={styles.featureContent}>
                <div className={styles.featureLabel}>{f.label}</div>
                <div className={styles.featureDesc}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - 3D Coffee Cup */}
      <div className={styles.rightPanel}>
        {/* Coffee Cup Container */}
        <div className={styles.cupContainer}>
          {/* Cup Shadow */}
          <div className={styles.cupShadow} />

          {/* 3D Cup SVG */}
          <svg className={styles.cup3d} viewBox="0 0 200 280" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8A87C" stopOpacity="1" />
                <stop offset="50%" stopColor="#A0714F" stopOpacity="1" />
                <stop offset="100%" stopColor="#6F4E37" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4A2E1C" stopOpacity="1" />
                <stop offset="50%" stopColor="#3E2723" stopOpacity="1" />
                <stop offset="100%" stopColor="#2C1810" stopOpacity="1" />
              </linearGradient>
              <filter id="shadow">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
              </filter>
            </defs>

            {/* Cup body left side */}
            <path d="M 40 80 L 35 220 Q 35 240 50 245 L 150 245 Q 165 240 165 220 L 160 80 Z" fill="#6F4E37" opacity="0.7" />

            {/* Cup body main */}
            <path d="M 45 80 L 40 220 Q 40 238 55 242 L 145 242 Q 160 238 160 220 L 155 80 Z" fill="url(#cupGradient)" filter="url(#shadow)" />

            {/* Cup body highlight */}
            <path d="M 155 80 L 160 220 Q 160 238 145 242 L 145 20 Q 155 35 155 80 Z" fill="rgba(255,255,255,0.25)" />

            {/* Cup rim shadow */}
            <ellipse cx="100" cy="82" rx="60" ry="18" fill="#5a3e2b" opacity="0.5" />
            
            {/* Cup rim */}
            <ellipse cx="100" cy="80" rx="60" ry="16" fill="#8B5A3C" />
            <ellipse cx="100" cy="78" rx="60" ry="12" fill="#A0714F" />

            {/* Coffee shine inside cup */}
            <ellipse cx="95" cy="78" rx="50" ry="10" fill="rgba(255,255,255,0.1)" />

            {/* Coffee inside */}
            <ellipse cx="100" cy="82" rx="55" ry="14" fill="url(#coffeeGradient)" />

            {/* Coffee liquid surface */}
            <path d="M 50 140 Q 100 135 150 140 Q 155 142 150 145 Q 100 140 50 145 Z" fill="#3E2723" opacity="0.8" />

            {/* Foam bubbles */}
            <circle cx="65" cy="98" r="14" fill="rgba(255,255,255,0.35)" opacity="0.8" />
            <circle cx="100" cy="92" r="16" fill="rgba(255,255,255,0.3)" opacity="0.8" />
            <circle cx="135" cy="100" r="13" fill="rgba(255,255,255,0.32)" opacity="0.8" />

            {/* Handle back */}
            <path d="M 160 125 Q 230 125 230 185 Q 230 205 160 215" fill="none" stroke="#5a3e2b" strokeWidth="18" strokeLinecap="round" opacity="0.6" />

            {/* Handle front */}
            <path d="M 162 120 Q 225 120 225 180 Q 225 202 162 210" fill="none" stroke="url(#cupGradient)" strokeWidth="16" strokeLinecap="round" />

            {/* Handle highlight */}
            <path d="M 165 115 Q 220 115 220 175 Q 220 200 165 208" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
          </svg>

          {/* Floating icon badges */}
          <div className={styles.floatingBadge + ' ' + styles.badge1}>
            📋
          </div>
          <div className={styles.floatingBadge + ' ' + styles.badge2}>
            🛒
          </div>
          <div className={styles.floatingBadge + ' ' + styles.badge3}>
            🎁
          </div>
        </div>

        {/* Subtext */}
        <p className={styles.rightPanelSubtext}>
          Manage your café like never before with our all-in-one platform
        </p>
      </div>
    </section>
  );
};

export default Hero;
