import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { profileId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate

  // Use the QUERY_ME query to get the logged-in user's data
  const { loading: meLoading, data: meData } = useQuery(QUERY_ME);

  // Use the QUERY_SINGLE_PROFILE query to get the profile data if profileId is available
  const { loading: profileLoading, data: profileData } = useQuery(
    QUERY_SINGLE_PROFILE,
    {
      variables: { profileId },
    }
  );

  // Determine which data to use based on whether a profileId is available
  const userData = profileId ? profileData : meData;
  const isLoading = profileId ? profileLoading : meLoading;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const profile = userData?.profile || userData?.me || {};

  // Check if the user is authenticated
  if (!Auth.loggedIn()) {
    // If not authenticated, navigate to the login page
    navigate('/login');
    return null; // Return null to prevent rendering the profile content
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
        />
      )}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ReviewForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Profile;