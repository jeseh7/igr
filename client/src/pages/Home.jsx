import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';

import { QUERY_REVIEWS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewList
              reviews={reviews}
              title="Recent Reviews"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
