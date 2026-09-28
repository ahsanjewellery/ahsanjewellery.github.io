import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([
    { id: 1, name: 'Gold Plated Necklace Set', price: 4500, category: 'Necklaces', image: 'necklace.jpg' }
  ]);
  
  // Form states
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Necklaces');
  const [image, setImage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  const navigate = useNavigate();

  // Add new product handler
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    
    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      category,
      image: image || 'default-jewellery.jpg'
    };
    
    setProducts([newProduct, ...products]);
    setName('');
    setPrice('');
    setImage('');
    setSuccessMsg('Product added successfully!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  // Delete product handler
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(prod => prod.id !== id));
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div style={styles.layout}>
      {/* Sidebar Navigation */}
      <aside style={styles.sidebar}>
        <div>
          <div style={styles.brandContainer}>
            <div style={styles.brandBadge}>AJ</div>
            <div>
              <h3 style={styles.brandTitle}>AHSAN JEWELLERY</h3>
              <p style={styles.brandSubtitle}>ADMIN PANEL</p>
            </div>
          </div>

          <div style={styles.menuSection}>
            <p style={styles.menuLabel}>MAIN MENU</p>
            <button 
              style={{...styles.menuItem, ...(activeTab === 'dashboard' ? styles.activeMenuItem : {})}}
              onClick={() => setActiveTab('dashboard')}
            >
              📊 Dashboard
            </button>
            <button 
              style={{...styles.menuItem, ...(activeTab === 'products' ? styles.activeMenuItem : {})}}
              onClick={() => setActiveTab('products')}
            >
              📦 Products ({products.length})
            </button>
            <button style={styles.menuItem} onClick={() => alert('Posts section coming soon!')}>📝 Posts</button>
            <button style={styles.menuItem} onClick={() => alert('Media library coming soon!')}>🖼️ Media</button>
            <button style={styles.menuItem} onClick={() => alert('Pages management coming soon!')}>📄 Pages</button>
          </div>

          <div style={styles.menuSection}>
            <p style={styles.menuLabel}>MANAGEMENT</p>
            <button style={styles.menuItem} onClick={() => alert('Manage Orders view')}>🛒 Manage Orders</button>
            <button style={styles.menuItem} onClick={() => alert('Manage Reviews view')}>⭐ Manage Reviews</button>
            <button style={styles.menuItem} onClick={() => alert('Customer Messages view')}>💬 Messages</button>
            <button style={styles.menuItem} onClick={() => alert('Payment Settings view')}>💳 Payments</button>
            <button style={styles.menuItem} onClick={() => alert('Analytics view')}>📈 Analytics</button>
            <button style={styles.menuItem} onClick={() => alert('Store Settings view')}>⚙️ Settings</button>
          </div>
        </div>

        <div style={styles.adminProfileSection}>
          <div style={styles.adminAvatar}>AJ</div>
          <div style={{flex: 1}}>
            <p style={styles.adminName}>Ahsan Jewellery</p>
            <span onClick={handleLogout} style={styles.logoutText}>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={styles.mainContent}>
        {/* Top Header */}
        <header style={styles.topHeader}>
          <div style={styles.headerTitleArea}>
            <span style={styles.breadcrumb}>ADMIN PANEL / {activeTab.toUpperCase()}</span>
            <h2 style={styles.pageTitle}>{activeTab === 'dashboard' ? 'Dashboard Overview' : 'Product Management'}</h2>
          </div>
          <div style={styles.topHeaderRight}>
            <div style={styles.storeStatus}>
              <span style={styles.statusDot}></span> Store Online
            </div>
            <button onClick={handleLogout} style={styles.headerLogoutBtn}>Logout</button>
          </div>
        </header>

        {/* Dashboard Body */}
        <div style={styles.dashboardBody}>
          {successMsg && <div style={styles.successBanner}>{successMsg}</div>}

          {/* Welcome & Stats Banner */}
          <div style={styles.welcomeCard}>
            <h3 style={styles.welcomeTitle}>Welcome back, Ahsan 👋</h3>
            <p style={styles.welcomeText}>Here is a quick overview of your jewellery store activity.</p>
            
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <p style={styles.statLabel}>TOTAL PRODUCTS</p>
                <h3 style={styles.statValue}>{products.length}</h3>
                <p style={styles.statDesc}>Active catalogue items</p>
              </div>
              <div style={styles.statCard}>
                <p style={styles.statLabel}>TOTAL ORDERS</p>
                <h3 style={styles.statValue}>1</h3>
                <p style={styles.statDesc}>Pending fulfillment</p>
              </div>
              <div style={styles.statCard}>
                <p style={styles.statLabel}>CUSTOMER REVIEWS</p>
                <h3 style={styles.statValue}>0</h3>
                <p style={styles.statDesc}>Awaiting moderation</p>
              </div>
              <div style={styles.statCard}>
                <p style={styles.statLabel}>TOTAL REVENUE</p>
                <h3 style={styles.statValue}>Rs. 4,500</h3>
                <p style={styles.statDesc}>Lifetime store sales</p>
              </div>
            </div>
          </div>

          {/* Forms & Tables Layout */}
          <div style={styles.contentGrid}>
            {/* Add Product Form */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>➕ Add New Jewellery Product</h3>
              <form onSubmit={handleAddProduct} style={styles.form}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Product Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Bridal Kundan Set / Diamond Ring" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Price (PKR)</label>
                  <input 
                    type="number" 
                    placeholder="4500" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Category</label>
                  <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    style={styles.input}
                  >
                    <option value="Necklaces">Necklaces</option>
                    <option value="Rings">Rings</option>
                    <option value="Earrings">Earrings</option>
                    <option value="Bracelets">Bracelets</option>
                    <option value="Bridal Sets">Bridal Sets</option>
                  </select>
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Image Filename / URL</label>
                  <input 
                    type="text" 
                    placeholder="jewellery-item.jpg" 
                    value={image} 
                    onChange={(e) => setImage(e.target.value)} 
                    style={styles.input}
                  />
                </div>
                <button type="submit" style={styles.submitBtn}>Add Product to Store</button>
              </form>
            </div>

            {/* Products Table */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>📋 Store Products Catalogue ({products.length})</h3>
              <div style={styles.tableContainer}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Product Name</th>
                      <th style={styles.th}>Price</th>
                      <th style={styles.th}>Category</th>
                      <th style={styles.th}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length === 0 ? (
                      <tr><td colSpan="4" style={styles.noData}>No products found in store.</td></tr>
                    ) : (
                      products.map((prod) => (
                        <tr key={prod.id}>
                          <td style={styles.td}><strong>{prod.name}</strong></td>
                          <td style={styles.td}>Rs. {prod.price.toLocaleString()}</td>
                          <td style={styles.td}><span style={styles.badge}>{prod.category}</span></td>
                          <td style={styles.td}>
                            <button onClick={() => handleDelete(prod.id)} style={styles.deleteBtn}>Delete</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Polished Styles with Vibrant Pink Theme
const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#fdf2f8',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },
  sidebar: {
    width: '280px',
    backgroundColor: '#0b0f19',
    color: '#94a3b8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '24px',
    position: 'sticky',
    top: 0,
    height: '100vh',
    boxSizing: 'border-box',
    boxShadow: '4px 0 15px rgba(0,0,0,0.05)',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '35px',
  },
  brandBadge: {
    backgroundColor: '#e90d8b',
    color: '#fff',
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
    fontSize: '18px',
  },
  brandTitle: {
    margin: 0,
    fontSize: '15px',
    color: '#ffffff',
    fontWeight: '800',
    letterSpacing: '0.8px',
  },
  brandSubtitle: {
    margin: 0,
    fontSize: '11px',
    color: '#64748b',
    fontWeight: '600',
  },
  menuSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '25px',
  },
  menuLabel: {
    fontSize: '11px',
    fontWeight: '800',
    color: '#64748b',
    marginBottom: '8px',
    letterSpacing: '1px',
  },
  menuItem: {
    background: 'transparent',
    border: 'none',
    color: '#cbd5e1',
    padding: '12px 14px',
    textAlign: 'left',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  },
  activeMenuItem: {
    backgroundColor: '#e90d8b',
    color: '#ffffff',
  },
  adminProfileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingTop: '20px',
    borderTop: '1px solid #1e293b',
  },
  adminAvatar: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    backgroundColor: '#1e293b',
    color: '#cbd5e1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  adminName: {
    margin: 0,
    fontSize: '14px',
    color: '#ffffff',
    fontWeight: '700',
  },
  logoutText: {
    color: '#ef4444',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '650',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  },
  topHeader: {
    backgroundColor: '#ffffff',
    padding: '20px 35px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #fbcfe8',
  },
  headerTitleArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  breadcrumb: {
    fontSize: '12px',
    color: '#db2777',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },
  pageTitle: {
    margin: 0,
    fontSize: '22px',
    color: '#0f172a',
    fontWeight: '800',
  },
  topHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  storeStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#0f172a',
    backgroundColor: '#fdf2f8',
    padding: '8px 16px',
    borderRadius: '30px',
    border: '1px solid #fbcfe8',
    fontWeight: '600',
  },
  statusDot: {
    width: '10px',
    height: '10px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
  },
  headerLogoutBtn: {
    padding: '8px 18px',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '700',
  },
  dashboardBody: {
    padding: '35px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  successBanner: {
    padding: '14px 18px',
    backgroundColor: '#dcfce7',
    color: '#15803d',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '700',
    border: '1px solid #bbf7d0',
  },
  welcomeCard: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(233, 13, 139, 0.05)',
    border: '1px solid #fbcfe8',
  },
  welcomeTitle: {
    margin: '0 0 6px 0',
    fontSize: '24px',
    color: '#0f172a',
    fontWeight: '800',
  },
  welcomeText: {
    margin: '0 0 25px 0',
    fontSize: '15px',
    color: '#475569',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  },
  statCard: {
    backgroundColor: '#fdf2f8',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #fbcfe8',
  },
  statLabel: {
    margin: '0 0 8px 0',
    fontSize: '12px',
    fontWeight: '800',
    color: '#db2777',
    letterSpacing: '0.5px',
  },
  statValue: {
    margin: '0 0 4px 0',
    fontSize: '26px',
    fontWeight: '800',
    color: '#0f172a',
  },
  statDesc: {
    margin: 0,
    fontSize: '13px',
    color: '#64748b',
    fontWeight: '500',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '25px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(233, 13, 139, 0.05)',
    border: '1px solid #fbcfe8',
  },
  cardTitle: {
    margin: '0 0 20px 0',
    fontSize: '18px',
    color: '#0f172a',
    fontWeight: '800',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#334155',
  },
  input: {
    padding: '12px 14px',
    fontSize: '14px',
    border: '1px solid #fbcfe8',
    borderRadius: '8px',
    outline: 'none',
    backgroundColor: '#fff',
    color: '#0f172a',
  },
  submitBtn: {
    padding: '14px',
    backgroundColor: '#e90d8b',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '800',
    fontSize: '15px',
    cursor: 'pointer',
    marginTop: '5px',
    boxShadow: '0 4px 12px rgba(233, 13, 139, 0.25)',
  },
  tableContainer: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  th: {
    padding: '12px 10px',
    borderBottom: '2px solid #fbcfe8',
    fontSize: '13px',
    color: '#db2777',
    fontWeight: '800',
  },
  td: {
    padding: '16px 10px',
    borderBottom: '1px solid #fde8f5',
    fontSize: '14px',
    color: '#0f172a',
  },
  badge: {
    backgroundColor: '#fdf2f8',
    color: '#db2777',
    padding: '5px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '700',
    border: '1px solid #fbcfe8',
  },
  deleteBtn: {
    padding: '6px 12px',
    backgroundColor: '#fee2e2',
    color: '#dc2626',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '750',
  },
  noData: {
    textAlign: 'center',
    padding: '30px',
    color: '#64748b',
    fontSize: '14px',
    fontWeight: '600',
  },
};

export default AdminDashboard;