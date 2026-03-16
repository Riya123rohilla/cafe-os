import { T } from '../../theme';
import Icon from '../../components/Icon';

const OrdersPage = () => {
  const orders = [
    { id: '#1042', table: 'Table 4', customer: 'Aditya R.', items: ['Cappuccino × 2', 'Avocado Toast'], total: '₹540', status: 'new', time: '2 min ago' },
    { id: '#1041', table: 'Table 7', customer: 'Priya S.', items: ['Cold Brew', 'Croissant'], total: '₹300', status: 'preparing', time: '8 min ago' },
    { id: '#1040', table: 'Table 2', customer: 'Vikram M.', items: ['Matcha Latte × 3'], total: '₹570', status: 'ready', time: '12 min ago' },
    { id: '#1039', table: 'Table 5', customer: 'Neha K.', items: ['Espresso', 'Brownie'], total: '₹280', status: 'served', time: '18 min ago' },
    { id: '#1038', table: 'Table 1', customer: 'Ravi P.', items: ['Cappuccino', 'Tiramisu'], total: '₹440', status: 'served', time: '25 min ago' },
  ];
  const cols = { new: 'New', preparing: 'Preparing', ready: 'Ready', served: 'Served' };
  const colColor = { new: T.brown, preparing: T.gold, ready: '#5B9BD5', served: T.success };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 22, color: T.brownDark }}>Live Orders</h2>
        <p style={{ fontSize: 13, color: T.textMuted }}>Real-time order management board</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {Object.entries(cols).map(([status, label]) => (
          <div key={status}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: colColor[status] }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: T.brownDark }}>{label}</span>
              <span style={{ fontSize: 11, background: T.cream, color: T.textMuted, borderRadius: 20, padding: '1px 8px' }}>{orders.filter(o => o.status === status).length}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {orders.filter(o => o.status === status).map((order, i) => (
                <div key={order.id} className="card-hover" style={{ background: '#fff', borderRadius: 14, padding: 16, border: `1px solid ${T.border}`, borderLeft: `3px solid ${colColor[status]}`, animation: `fadeUp 0.4s ease ${i * 0.08}s both` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontWeight: 700, color: T.brown, fontSize: 13 }}>{order.id}</span>
                    <span style={{ fontSize: 11, color: T.textMuted }}>{order.time}</span>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: T.brownDark, marginBottom: 4 }}>{order.table}</div>
                  {order.items.map(item => <div key={item} style={{ fontSize: 12, color: T.textMuted, marginBottom: 2 }}>• {item}</div>)}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <span style={{ fontFamily: 'Playfair Display', fontWeight: 700, color: T.brownDark, fontSize: 14 }}>{order.total}</span>
                    {status !== 'served' && (
                      <button className="btn-primary" style={{ padding: '5px 12px', fontSize: 11 }}>
                        {status === 'new' ? 'Accept' : status === 'preparing' ? 'Ready' : 'Serve'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
