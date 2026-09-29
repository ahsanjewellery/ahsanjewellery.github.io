import React, { useState } from 'react';

export default function ManageOrders() {
  const [orders, setOrders] = useState([
    {
      id: 'ORD-1001',
      customer: 'Ali Ahmed',
      date: '2026-09-28',
      total: 'PKR 12,500',
      status: 'Pending',
      items: 'Gold Plated Ring (x1), Silver Chain (x1)',
    },
    {
      id: 'ORD-1002',
      customer: 'Usman Khan',
      date: '2026-09-29',
      total: 'PKR 25,000',
      status: 'Shipped',
      items: 'Bridal Set Collection (x1)',
    },
    {
      id: 'ORD-1003',
      customer: 'Sara Tariq',
      date: '2026-09-30',
      total: 'PKR 8,200',
      status: 'Delivered',
      items: 'Diamond Cut Bangle (x2)',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return { backgroundColor: '#fef3c7', color: '#d97706' };
      case 'Shipped':
        return { backgroundColor: '#e0f2fe', color: '#0284c7' };
      case 'Delivered':
        return { backgroundColor: '#dcfce7', color: '#15803d' };
      default:
        return { backgroundColor: '#f1f5f9', color: '#475569' };
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b' }}>
        Manage Orders
      </h2>

      {orders.length === 0 ? (
        <p style={{ color: '#64748b' }}>Koi order filhal majood nahi hai.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '12px' }}>Order ID</th>
                <th style={{ padding: '12px' }}>Customer</th>
                <th style={{ padding: '12px' }}>Items</th>
                <th style={{ padding: '12px' }}>Date</th>
                <th style={{ padding: '12px' }}>Total</th>
                <th style={{ padding: '12px' }}>Status</th>
                <th style={{ padding: '12px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>{order.id}</td>
                  <td style={{ padding: '12px', color: '#334155' }}>{order.customer}</td>
                  <td style={{ padding: '12px', color: '#64748b', fontSize: '13px' }}>{order.items}</td>
                  <td style={{ padding: '12px', color: '#64748b' }}>{order.date}</td>
                  <td style={{ padding: '12px', fontWeight: '600', color: '#0f172a' }}>{order.total}</td>
                  <td style={{ padding: '12px' }}>
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: 'none',
                        fontWeight: '600',
                        fontSize: '12px',
                        cursor: 'pointer',
                        ...getStatusStyle(order.status),
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <button
                      onClick={() => handleDelete(order.id)}
                      style={{
                        backgroundColor: '#ef4444',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 10px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}