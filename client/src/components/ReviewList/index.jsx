// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';
import { useEffect } from 'react'; // Import useEffect

const ReviewList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }
  useEffect(() => {
    if (refetchReviews) {
      // Check if refetchReviews is true, and if so, refetch the reviews
      refetch();
    }
  }, [refetchReviews, refetch]);

  return (
    <div>
      <h3>{title}</h3>
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {review.reviewAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                review posted on {review.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{review.reviewText}</p>
            </div>
            {/* Create a link to this review's page to view its comments using `<Link>` component */}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/reviews/${review._id}`}
            >
              Leave a comment to this Review!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ReviewList;
