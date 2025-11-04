import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/store';
import ReviewCard from './ReviewCard';
import Loading from './Loading';

const Reviews = () => {
  const navigate = useNavigate();
  const addReview = useStore((state) => state.addReview);
  const reviews = useStore((state) => state.reviews);
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const username = useStore((state) => state.username);
  const [loading, setLoading] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: ''
  });

  // Auto-populate name if user is authenticated
  useEffect(() => {
    if (isAuthenticated && username) {
      setFormData(prev => ({
        ...prev,
        name: username
      }));
    }
  }, [isAuthenticated, username]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddReviews = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setLoading(true);
    setTimeout(() => {
      addReview({
        id: reviews.length + 1,
        name: formData.name,
        email: formData.email,
        review: formData.review,
        rating: selectedRating,
        submittedAt: new Date(),
      });
      
      setLoading(false);
      setSelectedRating(0);
      setFormData({
        name: isAuthenticated && username ? username : '',
        email: '',
        review: ''
      });
    }, 1000);
  }
  return (
    <div className='min-h-screen p-4 sm:p-6 lg:p-8'>
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <header className="flex flex-col text-white items-center justify-center space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">Reviews</h1>
          <h2 className="text-lg sm:text-xl text-center">Tell us about your visit!</h2>
        </header>

        {/* Form Card */}
        <div className="bg-gray-900 border-r border-gray-800 z-50 shadow-2xl p-4 sm:p-6 lg:p-8 rounded-xl">
          <form onSubmit={handleAddReviews} className="space-y-4 sm:space-y-5">
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={isAuthenticated && username ? username : formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full text-slate-900 border border-gray-300 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-base"
                required
                disabled={isAuthenticated && !!username}
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full border text-slate-900 border-gray-300 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-base"
                required
              />
            </div>

            {/* Review Textarea */}
            <div className="space-y-2">
              <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                Your Review
              </label>
              <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                placeholder="Share your experience with us..."
                rows={4}
                className="w-full border text-slate-900 border-gray-300 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none text-base"
                required
              />
            </div>

            {/* Star Rating */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Rating {selectedRating > 0 && `(${selectedRating} star${selectedRating !== 1 ? 's' : ''})`}
              </label>
              <div className="flex items-center gap-2 sm:gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setSelectedRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
                  >
                    <svg
                      className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${
                        star <= (hoveredRating || selectedRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-none text-gray-300'
                      }`}
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                ))}
              </div>
              {selectedRating === 0 && (
                <p className="text-sm text-red-500">Please select a rating</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || selectedRating === 0}
              className="w-full btn btn-primary rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-md active:scale-[0.98]"
            >
              {loading ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Customer Reviews</h2>
          {loading && (
            <div className="flex justify-center py-8">
              <Loading />
            </div>
          )}
          {!loading && reviews.length === 0 ? (
            <div className="bg-white/90 rounded-xl p-8 sm:p-12 text-center">
              <p className="text-gray-600 text-lg">No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-center pt-4 pb-8">
          <button
            className="btn btn-warning rounded-lg px-6 py-3 text-base font-semibold hover:shadow-md transition-all active:scale-95"
            onClick={() => navigate(-1)}
          >
            ← Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
