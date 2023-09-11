import { useQuery } from '@apollo/client';

import reviewList from '../components/ReviewList';
import reviewForm from '../components/ReviewForm';

import { QUERY_REVIEWS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <reviewForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <reviewList
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
