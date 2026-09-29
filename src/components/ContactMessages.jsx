import React, { useState } from 'react';

export default function ContactMessages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Ali Ahmed',
      email: 'ali@example.com',
      subject: 'Inquiry about order',
      message: 'AOA, mera order kab tak deliver hoga?',
      date: '2026-09-29',
    },
    {
      id: 2,
      name: 'Usman Khan',
      email: 'usman@example.com',
      subject: 'Product feedback',
      message: 'Quality boht achi hai, thank you!',
      date: '2026-09-30',
    },
  ]);

  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#1e293b' }}>
        Contact Messages
      </h2>
      {messages.length === 0 ? (
        <p style={{ color: '#64748b' }}>Koi naye messages nahi hain.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                padding: '15px',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div>
                <h4 style={{ margin: 0, fontSize: '16px', color: '#0f172a' }}>{msg.name} <span style={{ fontSize: '12px', color: '#64748b' }}>({msg.email})</span></h4>
                <p style={{ margin: '4px 0', fontSize: '13px', fontWeight: '600', color: '#334155' }}>Subject: {msg.subject}</p>
                <p style={{ margin: 0, fontSize: '14px', color: '#475569' }}>{msg.message}</p>
                <small style={{ color: '#94a3b8', fontSize: '11px' }}>{msg.date}</small>
              </div>
              <button
                onClick={() => handleDelete(msg.id)}
                style={{
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}