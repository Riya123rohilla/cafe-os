import { useState } from 'react';
import { T } from '../../theme';
import Icon from '../../components/Icon';
import { Avatar } from '../../components/UI';
import OwnerOverview from './OwnerOverview';
import MenuManagement from './MenuManagement';
import OrdersPage from './OrdersPage';
import CRMPage from './CRMPage';
import LoyaltyPage from './LoyaltyPage';
import InventoryPage from './InventoryPage';
import StaffPage from './StaffPage';
import QRPage from './QRPage';
import AnalyticsPage from './AnalyticsPage';

const navItems = [
  { id: 'overview', icon: 'home', label: 'Overview' },
  { id: 'menu', icon: 'menu', label: 'Menu' },
  { id: 'orders', icon: 'bar', label: 'Orders' },
  { id: 'crm', icon: 'users', label: 'Customers' },
  { id: 'loyalty', icon: 'gift', label: 'Loyalty' },
  { id: 'inventory', icon: 'package', label: 'Inventory' },
  { id: 'staff', icon: 'users', label: 'Staff' },
  { id: 'qr', icon: 'qr', label: 'QR Code' },
  { id: 'analytics', icon: 'trending', label: 'Analytics' },
];

const pageMap = {
  overview: OwnerOverview,
  menu: MenuManagement,
  orders: OrdersPage,
  crm: CRMPage,
  loyalty: LoyaltyPage,
  inventory: InventoryPage,
  staff: StaffPage,
  qr: QRPage,
  analytics: AnalyticsPage,
};

const pageTitles = {
  overview: 'Dashboard Overview',
  menu: 'Menu Management',
  orders: 'Live Orders',
  crm: 'Customer Relations',
  loyalty: 'Loyalty Program',
  inventory: 'Inventory',
  staff: 'Staff Management',
  qr: 'QR Code',
  analytics: 'Analytics',
};

const OwnerDashboard = ({ onLogout }) => {
  const [active, setActive] = useState('overview');
  const [collapsed, setCollapsed] = useState(false);
  const PageComponent = pageMap[active] || OwnerOverview;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.cream, fontFamily: 'DM Sans, sans-serif' }}>
      {/* Sidebar */}
      <aside className="sidebar" style={{
        width: collapsed ? 68 : 230,
        transition: 'width 0.25s ease',
        flexShrink: 0,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '24px 20px 20px', cursor: 'pointer' }} onClick={() => setCollapsed(c => !c)}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: T.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="coffee" size={18} color="#fff" />
          </div>
          {!collapsed && <span style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 17, color: '#fff', whiteSpace: 'nowrap' }}>Café OS</span>}
        </div>

        {/* Nav */}
        <nav style={{ padding: '0 10px', flex: 1 }}>
          {navItems.map(item => (
            <div
              key={item.id}
              className={`nav-item${active === item.id ? ' active' : ''}`}
              onClick={() => setActive(item.id)}
              style={{ justifyContent: collapsed ? 'center' : 'flex-start', padding: collapsed ? '10px' : '10px 14px' }}
              title={collapsed ? item.label : ''}
            >
              <Icon name={item.icon} size={17} color={active === item.id ? '#fff' : 'rgba(255,255,255,0.65)'} />
              {!collapsed && <span style={{ marginLeft: 10, whiteSpace: 'nowrap' }}>{item.label}</span>}
            </div>
          ))}
        </nav>

        {/* User area */}
        <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar name="Owner" size={32} />
            {!collapsed && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Artisan Corner</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Owner</div>
              </div>
            )}
            <button onClick={onLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }} title="Logout">
              <Icon name="logout" size={16} color="rgba(255,255,255,0.5)" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Topbar */}
        <header className="topbar">
          <h1 style={{ fontSize: 18, fontWeight: 700, color: T.brownDark, fontFamily: 'DM Sans, sans-serif' }}>{pageTitles[active]}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ position: 'relative' }}>
              <Icon name="search" size={14} color={T.textMuted} />
              <input className="input-field" placeholder="Search..." style={{ paddingLeft: 30, width: 180, fontSize: 13 }} />
            </div>
            <button style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${T.border}`, background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Icon name="bell" size={16} color={T.brown} />
              <span style={{ position: 'absolute', top: 6, right: 6, width: 8, height: 8, borderRadius: '50%', background: T.danger, border: '2px solid #fff' }} />
            </button>
            <Avatar name="Owner" size={36} />
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: 24, overflowY: 'auto' }} key={active}>
          <PageComponent />
        </main>
      </div>
    </div>
  );
};

export default OwnerDashboard;
