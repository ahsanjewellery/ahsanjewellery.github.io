import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Shop() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');

  const [categories, setCategories] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);

  /*
  ============================================================
  FETCH CATEGORIES FROM FIREBASE
  ============================================================
  */

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'categories'));

        const categoryList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCategories(categoryList);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  /*
  ============================================================
  FETCH PRODUCTS FROM FIREBASE
  IMPORTANT:
  No productsData import / Unsplash demo data is used.
  Products shown here come only from Firebase.
  ============================================================
  */

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'products'));

        const productList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductsData(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProductsData([]);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  /*
  ============================================================
  FILTER + SORT PRODUCTS
  ============================================================
  */

  const products = useMemo(() => {
    const selectedCategory = category.trim().toLowerCase();

    const filtered =
      selectedCategory === 'all'
        ? [...productsData]
        : productsData.filter(
            (product) =>
              String(product.category || '').trim().toLowerCase() ===
              selectedCategory
          );

    if (sort === 'low') {
      filtered.sort(
        (a, b) => Number(a.price || 0) - Number(b.price || 0)
      );
    }

    if (sort === 'high') {
      filtered.sort(
        (a, b) => Number(b.price || 0) - Number(a.price || 0)
      );
    }

    return filtered;
  }, [category, sort, productsData]);

  /*
  ============================================================
  CATEGORY CLICK
  ============================================================
  */

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <style>{`
        .shop-page {
          padding: 50px 20px 90px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .shop-hero {
          text-align: center;
          margin-bottom: 50px;
        }

        .shop-hero .eyebrow {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #777;
          display: block;
          margin-bottom: 10px;
        }

        .shop-hero h1 {
          font-size: 42px;
          font-weight: 400;
          margin: 0 0 12px;
          color: #111;
        }

        .shop-hero p {
          color: #666;
          font-size: 15px;
          margin: 0;
        }

        /*
        ========================================================
        FIREBASE CATEGORY CARDS
        ========================================================
        */

        .shop-categories {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 180px));
          gap: 16px;
          margin-bottom: 40px;
        }

        .category-card {
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: center;
        }

        .category-card:hover {
          border-color: #111;
          transform: translateY(-2px);
        }

        .category-card.active {
          border-color: #111;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .category-card-image {
          width: 100%;
          height: 150px;
          background: #f7f7f7;
          overflow: hidden;
        }

        .category-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .category-card:hover .category-card-image img {
          transform: scale(1.04);
        }

        .category-card-name {
          padding: 12px 8px;
          font-size: 13px;
          font-weight: 500;
          color: #222;
        }

        .category-all {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 150px;
          background: #111;
          color: #fff;
          font-size: 14px;
          letter-spacing: 0.5px;
        }

        .category-loading {
          color: #777;
          font-size: 13px;
          padding: 20px 0;
        }

        .shop-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 25px;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 20px;
        }

        .shop-toolbar label {
          font-size: 13px;
          color: #555;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .shop-toolbar select {
          padding: 8px 12px;
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 4px;
          font-size: 13px;
          outline: none;
          cursor: pointer;
        }

        .shop-count {
          font-size: 13px;
          color: #777;
          margin-bottom: 25px;
        }

        .shop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 40px 25px;
          margin-bottom: 70px;
        }

        .shop-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 70px 20px;
          color: #777;
          border: 1px solid #eee;
          border-radius: 8px;
        }

        .shop-empty h3 {
          color: #222;
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 500;
        }

        .shop-note {
          background: #f9f6f0;
          text-align: center;
          padding: 50px 20px;
          border-radius: 8px;
          margin-top: 40px;
        }

        .shop-note .eyebrow {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #777;
          display: block;
          margin-bottom: 8px;
        }

        .shop-note h2 {
          font-size: 28px;
          font-weight: 400;
          margin: 0 0 12px;
          color: #111;
        }

        .shop-note p {
          color: #666;
          font-size: 14px;
          max-width: 500px;
          margin: 0 auto 20px;
        }

        .btn-dark {
          background: #111;
          color: #fff;
          padding: 12px 24px;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 4px;
          display: inline-block;
          transition: background 0.2s;
        }

        .btn-dark:hover {
          background: #333;
        }

        @media (max-width: 768px) {
          .shop-toolbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .shop-categories {
            grid-template-columns: repeat(2, minmax(130px, 1fr));
          }

          .category-card-image {
            height: 130px;
          }

          .shop-hero h1 {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="shop-page">

        {/* ====================================================
            SHOP HERO
        ==================================================== */}

        <div className="shop-hero">
          <div className="container">
            <span className="eyebrow">The collection</span>

            <h1 className="serif">
              Jewellery, considered.
            </h1>

            <p>
              Discover modern pieces designed to live with you,
              season after season.
            </p>
          </div>
        </div>

        <div className="container shop-content">

          {/* ==================================================
              CATEGORIES FROM FIREBASE
              ================================================== */}

          {loadingCategories ? (
            <div className="category-loading">
              Loading categories...
            </div>
          ) : (
            <div className="shop-categories">

              {/* ALL CATEGORY */}

              <div
                className={`category-card ${
                  category === 'All' ? 'active' : ''
                }`}
                onClick={() => handleCategoryClick('All')}
              >
                <div className="category-card-image category-all">
                  All Jewellery
                </div>

                <div className="category-card-name">
                  All
                </div>
              </div>

              {/* ONLY UPLOADED FIREBASE CATEGORIES */}

              {categories.map((item) => (
                <div
                  key={item.id}
                  className={`category-card ${
                    category === item.name ? 'active' : ''
                  }`}
                  onClick={() => handleCategoryClick(item.name)}
                >
                  <div className="category-card-image">

                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name || 'Category'}
                      />
                    ) : null}

                  </div>

                  <div className="category-card-name">
                    {item.name}
                  </div>
                </div>
              ))}

            </div>
          )}

          {/* ==================================================
              TOOLBAR
              ================================================== */}

          <div className="shop-toolbar">

            <div className="shop-count">
              {loadingProducts
                ? 'Loading products...'
                : `${products.length} pieces`}
            </div>

            <label>
              Sort{' '}

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">
                  Featured
                </option>

                <option value="low">
                  Price: low to high
                </option>

                <option value="high">
                  Price: high to low
                </option>
              </select>
            </label>

          </div>

          {/* ==================================================
              PRODUCTS FROM FIREBASE
              ================================================== */}

          <div className="shop-grid">

            {loadingProducts ? (
              <div className="shop-empty">
                <h3>Loading products...</h3>
                <p>Please wait.</p>
              </div>
            ) : products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <div className="shop-empty">
                <h3>No products found</h3>
                <p>
                  Upload products from the Admin Panel to display
                  them here.
                </p>
              </div>
            )}

          </div>

          {/* ==================================================
              CONCIERGE
              ================================================== */}

          <div className="shop-note">

            <span className="eyebrow">
              Need help choosing?
            </span>

            <h2 className="serif">
              Talk to our jewellery concierge.
            </h2>

            <p>
              Tell us what you're looking for and we'll help you
              find a piece that feels right.
            </p>

            <Link
              to="/contact"
              className="btn-dark"
            >
              Contact us
            </Link>

          </div>

        </div>
      </div>
    </>
  );
}
