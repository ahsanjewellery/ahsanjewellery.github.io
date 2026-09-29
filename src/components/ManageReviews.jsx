import React, { useState } from 'react';

export default function ManageReviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      product: 'Gold Plated Ring',
      customer: 'Ayesha Khan',
      rating: 5,
      comment: 'Bohot achi quality hai, exact picture jaisa hai!',
      date: '2026-09-25',
      status: 'Approved',
    },
    {
      id: 2,
      product: 'Silver Chain',
      customer: 'Bilal Hassan',
      rating: 4,
      comment: 'Finishing achi hai, packing bhi zabardast thi.',
      date: '2026-09-27',
      status: 'Pending',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setReviews(
      reviews.map((rev) =>
        rev.id === id ? { ...rev, status: newStatus } : rev
      )
    );
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((rev) => rev.id !== id));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b' }}>
        Manage Reviews
      </h2>

      {reviews.length === 0 ? (
        <p style={{ color: '#64748b' }}>Koi review majood nahi hai.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '12px' }}>Product</th>
                <th style={{ padding: '12px' }}>Customer</th>
                <th style={{ padding: '12px' }}>Rating</th>
                <th style={{ padding: '12px' }}>Comment</th>
                <th style={{ padding: '12px' }}>Date</th>
                <th style={{ padding: '12px' }}>Status</th>
                <th style={{ padding: '12px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((rev) => (
                <tr key={rev.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px', fontWeight: '600', color: '#0f172a' }}>{rev.product}</td>
                  <td style={{ padding: '12px', color: '#334155' }}>{rev.customer}</td>
                  <td style={{ padding: '12px', color: '#eab308' }}>{'★'.repeat(rev.rating)}</td>
                  <td style={{ padding: '12px', color: '#475569', fontSize: '13px' }}>{rev.comment}</td>
                  <td style={{ padding: '12px', color: '#64748b' }}>{rev.date}</td>
                  <td style={{ padding: '12px' }}>
                    <span
                      style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '600',
                        backgroundColor: rev.status === 'Approved' ? '#dcfce7' : '#fef3c7',
                        color: rev.status === 'Approved' ? '#15803d' : '#d97706',
                      }}
                    >
                      {rev.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px', display: 'flex', gap: '6px' }}>
                    {rev.status === 'Pending' && (
                      <button
                        onClick={() => handleStatusChange(rev.id, 'Approved')}
                        style={{
                          backgroundColor: '#16a34a',
                          color: '#fff',
                          border: 'none',
                          padding: '6px 10px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px',
                        }}
                      >
                        Approve
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(rev.id)}
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