import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  // Yahan pehle se default credentials set kar diye hain
  const [email, setEmail] = useState('admin@store.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login (Local Mode)</h2>
        {error && <p style={styles.error}>{error}</p>}
        
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' },
  card: { width: '100%', maxWidth: '400px', padding: '40px', background: '#fff', borderRadius: '8px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' },
  title: { marginBottom: '24px', fontSize: '24px', fontWeight: '700', color: '#2b2b2b', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
  label: { fontSize: '13px', fontWeight: '600', color: '#2b2b2b' },
  input: { padding: '12px 14px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '4px', outline: 'none' },
  button: { padding: '12px', fontSize: '14px', fontWeight: '700', color: '#fff', backgroundColor: '#e90d8b', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  error: { marginBottom: '15px', padding: '10px', backgroundColor: '#ffe6f0', color: '#c90876', fontSize: '13px', borderRadius: '4px', textAlign: 'center' }
};

export default AdminLogin;