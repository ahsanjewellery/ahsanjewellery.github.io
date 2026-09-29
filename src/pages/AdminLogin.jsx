import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase"; // Make sure path correctly points to your firebase.js
import { signInWithEmailAndPassword } from 'firebase/auth';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      // Firebase Authentication Login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Save login state / token in localStorage
      localStorage.setItem('isAdminLoggedIn', 'true');
      localStorage.setItem('adminToken', userCredential.user.accessToken);

      // Redirect to Admin Dashboard
      navigate('/admin/dashboard');
    } catch (err) {
      console.error('Login Error:', err);
      // Custom friendly error messages
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid email or password. Please try again.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later.');
      } else {
        setError('Failed to login. Please check your network connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.brandBadge}>AJ</div>
          <h2 style={styles.title}>Ahsan Jewellery</h2>
          <p style={styles.subtitle}>Admin Portal Login</p>
        </div>

        {error && <p style={styles.error}>{error}</p>}
        
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input 
              type="email" 
              placeholder="admin@ahsanjewellery.com"
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
              placeholder="••••••••"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              style={styles.input}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{
              ...styles.button,
              backgroundColor: loading ? '#f472b6' : '#e90d8b',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh', 
    backgroundColor: '#fdf2f8',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
  },
  card: { 
    width: '100%', 
    maxWidth: '420px', 
    padding: '40px', 
    background: '#ffffff', 
    borderRadius: '16px', 
    boxShadow: '0 10px 25px rgba(233, 13, 139, 0.08)',
    border: '1px solid #fbcfe8'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '28px'
  },
  brandBadge: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: '#e90d8b',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: '800',
    marginBottom: '12px',
    boxShadow: '0 4px 12px rgba(233, 13, 139, 0.3)'
  },
  title: { 
    margin: '0 0 4px 0', 
    fontSize: '22px', 
    fontWeight: '800', 
    color: '#0f172a' 
  },
  subtitle: {
    margin: 0,
    fontSize: '13px',
    fontWeight: '600',
    color: '#64748b'
  },
  form: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px' 
  },
  inputGroup: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '8px' 
  },
  label: { 
    fontSize: '13px', 
    fontWeight: '700', 
    color: '#334155' 
  },
  input: { 
    padding: '12px 16px', 
    fontSize: '14px', 
    border: '1px solid #fbcfe8', 
    borderRadius: '8px', 
    outline: 'none',
    backgroundColor: '#fff',
    color: '#0f172a',
    transition: 'all 0.2s ease'
  },
  button: { 
    padding: '14px', 
    fontSize: '15px', 
    fontWeight: '800', 
    color: '#ffffff', 
    border: 'none', 
    borderRadius: '8px', 
    marginTop: '10px',
    boxShadow: '0 4px 12px rgba(233, 13, 139, 0.25)',
    transition: 'all 0.2s ease'
  },
  error: { 
    marginBottom: '20px', 
    padding: '12px 14px', 
    backgroundColor: '#ffe4e6', 
    color: '#e11d48', 
    fontSize: '13px', 
    borderRadius: '8px', 
    textAlign: 'center',
    fontWeight: '600',
    border: '1px solid #fecdd3'
  }
};

export default AdminLogin;