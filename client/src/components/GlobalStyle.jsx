import { T } from '../theme';

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'DM Sans',sans-serif; background:${T.cream}; color:${T.text}; }
    ::-webkit-scrollbar { width:6px; }
    ::-webkit-scrollbar-track { background:${T.cream}; }
    ::-webkit-scrollbar-thumb { background:${T.brown}; border-radius:3px; }

    @keyframes fadeUp {
      from { opacity:0; transform:translateY(24px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes fadeIn { from{opacity:0} to{opacity:1} }
    @keyframes slideInLeft {
      from{opacity:0;transform:translateX(-20px)}
      to{opacity:1;transform:translateX(0)}
    }
    @keyframes slideInRight {
      from{opacity:0;transform:translateX(20px)}
      to{opacity:1;transform:translateX(0)}
    }
    @keyframes scaleIn {
      from{opacity:0;transform:scale(0.95)}
      to{opacity:1;transform:scale(1)}
    }
    @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
    @keyframes float {
      0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)}
    }
    @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

    .page-enter { animation: fadeUp 0.45s ease forwards; }
    .card-hover { transition: transform 0.22s ease, box-shadow 0.22s ease; }
    .card-hover:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(111,78,55,0.18) !important;
    }
    .btn-primary {
      background: ${T.brown};
      color: #fff;
      border: none;
      border-radius: 10px;
      padding: 11px 24px;
      font-family:'DM Sans',sans-serif;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.18s, transform 0.15s, box-shadow 0.18s;
    }
    .btn-primary:hover {
      background: ${T.brownDark};
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(111,78,55,0.32);
    }
    .btn-outline {
      background: transparent;
      color: ${T.brown};
      border: 1.5px solid ${T.brown};
      border-radius: 10px;
      padding: 10px 22px;
      font-family:'DM Sans',sans-serif;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.18s;
    }
    .btn-outline:hover { background: ${T.brown}; color: #fff; }
    .nav-item {
      display:flex; align-items:center; gap:10px;
      padding:10px 14px; border-radius:10px;
      cursor:pointer; font-size:14px; font-weight:500;
      color:${T.textMuted}; transition:all 0.18s;
      text-decoration:none; background:transparent; border:none; width:100%;
    }
    .nav-item:hover { background:${T.creamDark}; color:${T.brown}; }
    .nav-item.active { background:${T.brown}; color:#fff; }
    .stat-card {
      background:#fff; border-radius:16px;
      padding:20px; border:1px solid ${T.border};
      animation: scaleIn 0.4s ease forwards;
    }
    .input-field {
      width:100%; padding:11px 14px;
      border:1.5px solid ${T.border};
      border-radius:10px; font-family:'DM Sans',sans-serif;
      font-size:14px; color:${T.text};
      background:${T.cream}; outline:none;
      transition:border-color 0.18s;
    }
    .input-field:focus { border-color:${T.brown}; background:#fff; }
    .badge {
      display:inline-flex; align-items:center;
      padding:3px 10px; border-radius:20px;
      font-size:11px; font-weight:600;
    }
    .badge-gold { background:${T.goldLight}33; color:${T.gold}; }
    .badge-success { background:#4CAF6B22; color:${T.success}; }
    .badge-danger { background:#E05C5C22; color:${T.danger}; }
    .badge-brown { background:${T.brown}22; color:${T.brown}; }
    .tag { display:inline-block; padding:4px 10px; border-radius:20px;
           background:${T.creamDark}; color:${T.brown}; font-size:12px; font-weight:500; }
    .divider { height:1px; background:${T.border}; margin:16px 0; }
    .table-row { transition:background 0.15s; }
    .table-row:hover { background:${T.cream}; }
    .sidebar {
      width:230px; min-height:100vh; background:#fff;
      border-right:1px solid ${T.border}; padding:20px 14px;
      display:flex; flex-direction:column;
      animation: slideInLeft 0.35s ease forwards;
      position:sticky; top:0; height:100vh; overflow-y:auto;
    }
    .main-content { flex:1; overflow-y:auto; height:100vh; }
    .dashboard-grid { display:flex; min-height:100vh; }
    .topbar {
      padding:14px 28px; background:#fff; border-bottom:1px solid ${T.border};
      display:flex; align-items:center; justify-content:space-between;
      position:sticky; top:0; z-index:10;
    }
  `}</style>
);

export default GlobalStyle;
