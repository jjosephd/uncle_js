import type { ReviewItem } from "../../store/types"

interface ReviewCardProps {
  review: ReviewItem
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="review-card border p-4 bg-slate-600/50 border-white rounded-lg mb-4 shadow-lg font-sans text-sm">
      <h3 className="font-bold text-lg text-white">{review.name}</h3>
      <p className="text-gray-600 text-xs">{review.email}</p>
      <p className=" mt-2 text-white">{review.review}</p>
    </div>
  )
}

export default ReviewCard