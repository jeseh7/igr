import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

import { QUERY_SINGLE_PROFILE, QUERY_ME, QUERY_REVIEWS } from '../utils/queries'; // Import QUERY_REVIEWS

import Auth from '../utils/auth';

const Profile = () => {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const [refetchReviews, setRefetchReviews] = useState(false); // State to trigger review list refetch

  const { loading: meLoading, data: meData } = useQuery(QUERY_ME);

  const { loading: profileLoading, data: profileData, refetch } = useQuery( // Add refetch function
    QUERY_SINGLE_PROFILE,
    {
      variables: { profileId },
    }
  );

  const userData = profileId ? profileData : meData;
  const isLoading = profileId ? profileLoading : meLoading;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const profile = userData?.profile || userData?.me || {};

  if (!Auth.loggedIn()) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <h2 className="card-header">
        {profileId ? `${profile.username}'s` : 'Your'} Reviews!
      </h2>

      {profile.reviews?.length > 0 && (
        <ReviewList
          reviews={profile.reviews}
          isLoggedInUser={!profileId}
          refetchReviews={refetchReviews} // Pass refetchReviews as a prop to ReviewList
        />
      )}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ReviewForm
          profileId={profile._id}
          setRefetchReviews={setRefetchReviews} // Pass setRefetchReviews as a prop to ReviewForm
        />
      </div>
    </div>
  );
};

export default Profile;