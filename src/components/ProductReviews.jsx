import React, { useState } from 'react';

const initialReviews = [
  {
    id: 1,
    name: "Saba Ahmed",
    rating: 5,
    date: "12 May 2025",
    comment: "Bohot pyari quality hai! Bilkul picture jesa article mila hai. Finishing bohot achi hai.",
    verified: true
  },
  {
    id: 2,
    name: "Ayesha Malik",
    rating: 5,
    date: "28 April 2025",
    comment: "Packaging and product both were top notch. Quick delivery service!",
    verified: true
  },
  {
    id: 3,
    name: "Zainab Ali",
    rating: 4,
    date: "10 April 2025",
    comment: "Product bohot achi hai, bus delivery mein 1 din extra laga. Overall satisfied!",
    verified: true
  },
  {
    id: 4,
    name: "Fatima Noor",
    rating: 5,
    date: "02 March 2025",
    comment: "Value for money! Main dobara zaroor order karungi.",
    verified: false
  }
];

export default function ProductReviews({ productId }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);

  // New review form state
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating: Number(rating),
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      comment: comment.trim(),
      verified: true
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setComment('');
    setRating(5);
    setShowForm(false);
  };

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.rating === Number(filter));

  const averageRating = (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1);

  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-100 font-sans my-8">
      {/* Header & Overall Summary */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-100 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-yellow-500 text-xl font-bold">{renderStars(Math.round(averageRating))}</span>
            <span className="text-lg font-semibold text-gray-800">{averageRating} out of 5</span>
            <span className="text-sm text-gray-500">({reviews.length} reviews)</span>
          </div>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="px-5 py-2.5 bg-black text-white text-xs font-semibold rounded-xl hover:bg-gray-800 transition"
        >
          {showForm ? 'Cancel Review' : 'Write a Review'}
        </button>
      </div>

      {/* Add Review Form */}
      {showForm && (
        <form onSubmit={handleAddReview} className="my-6 p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-4">
          <h3 className="text-sm font-bold text-gray-800">Write Your Review</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-black"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-black"
              >
                <option value={5}>5 Stars - Excellent</option>
                <option value={4}>4 Stars - Good</option>
                <option value={3}>3 Stars - Average</option>
                <option value={2}>2 Stars - Poor</option>
                <option value={1}>1 Star - Very Bad</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Your Review</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write product feedback here..."
              rows="3"
              className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg hover:bg-gray-800"
          >
            Submit Review
          </button>
        </form>
      )}

      {/* Filter Options */}
      <div className="flex items-center gap-2 my-6 overflow-x-auto pb-2">
        <span className="text-xs text-gray-500 font-medium">Filter by:</span>
        {['all', 5, 4, 3, 2, 1].map((star) => (
          <button
            key={star}
            onClick={() => setFilter(star)}
            className={`px-3 py-1 text-xs rounded-full border transition ${
              filter === star
                ? 'bg-black text-white border-black'
                : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
            }`}
          >
            {star === 'all' ? 'All Reviews' : `${star}★`}
          </button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.length === 0 ? (
          <p className="text-xs text-gray-500 text-center py-6">No reviews found for this rating.</p>
        ) : (
          filteredReviews.map((rev) => (
            <div key={rev.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-gray-900">{rev.name}</span>
                  {rev.verified && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                      Verified Buyer
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-gray-400">{rev.date}</span>
              </div>

              <div className="text-yellow-500 text-sm tracking-widest">
                {renderStars(rev.rating)}
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">{rev.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}