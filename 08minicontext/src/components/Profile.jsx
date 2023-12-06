import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please login</div>;
  return (
    <div>
      <h2>Welcome</h2>
      <h3>{user.username}</h3>
    </div>
  );
}

export default Profile;
