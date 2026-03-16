import { useState } from 'react';
import { T } from '../../theme';
import Icon from '../../components/Icon';
import { Modal, Avatar } from '../../components/UI';

const StaffPage = () => {
  const [showAdd, setShowAdd] = useState(false);
  const staff = [
    { name: 'Meera Singh', role: 'Barista', status: 'Active', since: 'Jan 2024', shifts: 'Mon–Fri' },
    { name: 'Kiran Rao', role: 'Cashier', status: 'Active', since: 'Mar 2024', shifts: 'Tue–Sat' },
    { name: 'Dev Kumar', role: 'Manager', status: 'Active', since: 'Jun 2023', shifts: 'Mon–Sat' },
    { name: 'Anita Nair', role: 'Server', status: 'On Leave', since: 'Sep 2024', shifts: 'Wed–Sun' },
  ];

  return (
    <div>
      {showAdd && (
        <Modal title="Add Staff Member" onClose={() => setShowAdd(false)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div><label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>NAME</label><input className="input-field" placeholder="Full name" /></div>
              <div><label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>ROLE</label>
                <select className="input-field"><option>Barista</option><option>Cashier</option><option>Manager</option><option>Server</option></select>
              </div>
            </div>
            <div><label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>EMAIL</label><input className="input-field" placeholder="staff@cafe.com" /></div>
            <div><label style={{ fontSize: 12, fontWeight: 600, color: T.brown, display: 'block', marginBottom: 6 }}>SHIFT SCHEDULE</label><input className="input-field" placeholder="e.g. Mon–Fri" /></div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button className="btn-outline" onClick={() => setShowAdd(false)}>Cancel</button>
              <button className="btn-primary" onClick={() => setShowAdd(false)}>Add Member</button>
            </div>
          </div>
        </Modal>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 22, color: T.brownDark }}>Staff Management</h2>
          <p style={{ fontSize: 13, color: T.textMuted }}>Manage your team, roles, and permissions</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => setShowAdd(true)}>
          <Icon name="plus" size={14} color="#fff" /> Add Staff
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
        {staff.map((s, i) => (
          <div key={s.name} className="card-hover" style={{ background: '#fff', borderRadius: 16, padding: 20, border: `1px solid ${T.border}`, display: 'flex', gap: 14, alignItems: 'center', animation: `fadeUp 0.4s ease ${i * 0.07}s both` }}>
            <Avatar name={s.name} size={48} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, color: T.brownDark, fontSize: 14 }}>{s.name}</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 8 }}>{s.role} · {s.shifts}</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span className="badge" style={{ background: s.status === 'Active' ? '#4CAF6B18' : '#E05C5C18', color: s.status === 'Active' ? T.success : T.danger }}>● {s.status}</span>
                <span style={{ fontSize: 11, color: T.textMuted }}>Since {s.since}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${T.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="edit" size={14} color={T.brown} /></button>
              <button style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${T.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="settings" size={14} color={T.textMuted} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffPage;
