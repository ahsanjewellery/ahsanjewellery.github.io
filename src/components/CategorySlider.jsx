import React from 'react';

const categories = [
  { id: 1, name: 'Electronics', icon: '⚡' },
  { id: 2, name: 'Fashion', icon: '👕' },
  { id: 3, name: 'Home & Living', icon: '🏠' },
  { id: 4, name: 'Beauty & Health', icon: '💄' },
  { id: 5, name: 'Sports & Fitness', icon: '⚽' },
];

export default function CategorySlider() {
  return (
    <div style={{ padding: '20px 0', overflowX: 'auto', display: 'flex', gap: '15px' }}>
      {categories.map((cat) => (
        <div
          key={cat.id}
          style={{
            minWidth: '120px',
            padding: '15px',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            textAlign: 'center',
            cursor: 'pointer',
            background: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}
        >
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>{cat.icon}</div>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{cat.name}</div>
        </div>
      ))}
    </div>
  );
}