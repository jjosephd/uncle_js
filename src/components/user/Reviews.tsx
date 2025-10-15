import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/store';
import ReviewCard from './ReviewCard';
import Loading from './Loading';

const Reviews = () => {
  const addReview = useStore((state) => state.addReview)
  const reviews = useStore((state) => state.reviews)
  const [loading, setLoading] = useState(false);

  const handleAddReviews = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const review = formData.get('review')
    
    setLoading(true);
    setTimeout(() => {
      addReview({
        id: reviews.length + 1,
        name: name as string,
        email: email as string,
        review: review as string,
        submittedAt: new Date(),
      })
      setLoading(false);
      e.currentTarget.reset();
    }, 1000);
  }
  return (
    <div>
      <header className="flex flex-col text-white items-center">
        <h1 className="text-2xl">Reviews</h1>
        <h2 className="text-xl">Write a review</h2>
      </header>
      <div className="bg-white p-4 rounded-lg min-w-xl">

      <form action="submit" className="flex flex-col gap-2" onSubmit={handleAddReviews}>
        <input type="text" name="name" placeholder="Name" className="border rounded-lg px-2 py-1" required />
        <input type="email" name="email" placeholder="Email" className="border rounded-lg px-2 py-1" required />
        <textarea name="review" placeholder="Review" className="border rounded-lg px-2 py-1" required />
        <button type="submit" className='btn btn-primary rounded-lg px-2 py-1'>Submit</button>
      </form>
      </div>
     
      <div>
        <h2 className="text-xl">Reviews</h2>
         {loading && (
        <Loading/>
        )}
        {reviews.length === 0 ? (
          <p className="text-gray-600">No reviews yet</p>
        ) : (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        )}
      </div>
      <button className="btn btn-warning" onClick={() => navigate(-1)}>
        Previous Page
      </button>
    </div>
  );
};

export default Reviews;
