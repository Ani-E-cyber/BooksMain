import React from 'react'

const BookExchangeProfiles = ({ location }) => {
  const searchResults = location.state?.searchResults || []

  return (
    <div>
      <h1>Book Exchange Profiles</h1>

      {searchResults.map((profile) => (
        <div key={profile.name}>
          <h3>{profile.name}</h3>
          <p>Books: {profile.books.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}

export default BookExchangeProfiles
