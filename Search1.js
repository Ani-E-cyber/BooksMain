// import React, { useState } from 'react'
// import './index.css'
// const Profiles = [
//   {
//     name: 'John Doe',
//     books: ['The Great Gatsby', 'To Kill a Mockingbird'],
//   },
//   {
//     name: 'Jane Smith',
//     books: ['Harry Potter', 'The Catcher in the Rye'],
//   },
//   // Add more profiles as needed
// ]

// function Search({ onSearch }) {
//   const [query, setQuery] = useState('')

//   const handleSearch = () => {
//     const filteredProfiles = Profiles.filter((profile) =>
//       profile.books.some((book) =>
//         book.toLowerCase().includes(query.toLowerCase())
//       )
//     )
//     onSearch(filteredProfiles)
//   }

//   return (
//     <div>
//       <input
//         className="search"
//         type="text"
//         placeholder="Search for books..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   )
// }

// export default Search

// import React, { useState } from 'react'
// import './index.css'

// const Profiles = [
//   {
//     name: 'John Doe',
//     books: ['The Great Gatsby', 'To Kill a Mockingbird'],
//   },
//   {
//     name: 'Jane Smith',
//     books: ['Harry Potter', 'The Catcher in the Rye'],
//   },
//   // Add more profiles as needed
// ]

// function Search({ onSearch }) {
//   const [query, setQuery] = useState('')

//   const handleSearch = () => {
//     const filteredProfiles = Profiles.filter((profile) =>
//       profile.books.some((book) =>
//         book.toLowerCase().includes(query.toLowerCase())
//       )
//     )
//     onSearch(filteredProfiles)
//   }

//   return (
//     <div>
//       <input
//         className="search"
//         type="text"
//         placeholder="Search for books..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   )
// }

// function Search1() {
//   const [searchResults, setSearchResults] = useState([])

//   const handleSearch = (results) => {
//     setSearchResults(results)
//     // Handle the search results as needed
//   }

//   return (
//     <div>
//       <Search onSearch={handleSearch} />
//       {/* Display or use the searchResults in your UI */}
//       {searchResults.map((profile) => (
//         <div key={profile.name}>
//           <h3>{profile.name}</h3>
//           <p>Books: {profile.books.join(', ')}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Search1

// Search.js

// import React, { useState } from 'react'
// import './index.css'

// const Profiles = [
//   {
//     name: 'John Doe',
//     books: ['The Great Gatsby', 'To Kill a Mockingbird'],
//     phonenumber: +374 091 000 000

//   },
//   {
//     name: 'Jane Smith',
//     books: ['Harry Potter', 'The Catcher in the Rye'],
//   },
//   // Add more profiles as needed
// ]

// function Search({ onSearch }) {
//   const [query, setQuery] = useState('')

//   const handleSearch = () => {
//     const filteredProfiles = Profiles.filter((profile) =>
//       profile.books.some((book) =>
//         book.toLowerCase().includes(query.toLowerCase())
//       )
//     )
//     onSearch(filteredProfiles)
//   }

//   return (
//     <div>
//       <input
//         className="search"
//         type="text"
//         placeholder="Search for books..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button className="btn" onClick={handleSearch}>
//         Search
//       </button>
//     </div>
//   )
// }

// function Search1() {
//   const [searchResults, setSearchResults] = useState([])

//   const handleSearch = (results) => {
//     setSearchResults(results)
//     // Handle the search results as needed
//   }

//   return (
//     <div>
//       <Search onSearch={handleSearch} />
//       {/* Display or use the searchResults in your UI */}
//       {searchResults.map((profile) => (
//         <div key={profile.name}>
//           <h3>{profile.name}</h3>
//           <p>Books: {profile.books.join(', ')}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Search1
// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// const Profiles = [
//   {
//     name: 'John Doe',
//     books: ['The Great Gatsby', 'To Kill a Mockingbird'],
//   },
//   {
//     name: 'Jane Smith',
//     books: ['Harry Potter', 'The Catcher in the Rye'],
//   },
//   // Add more profiles as needed
// ]

// const Search = ({ onSearch }) => {
//   const [query, setQuery] = useState('')
//   const [searchResults, setSearchResults] = useState([])

//   const handleSearch = () => {
//     const filteredProfiles = Profiles.filter((profile) =>
//       profile.books.some((book) =>
//         book.toLowerCase().includes(query.toLowerCase())
//       )
//     )

//     // Set the search results in the component state
//     setSearchResults(filteredProfiles)

//     // Use the passed onSearch function to handle the results in the parent component
//     onSearch(filteredProfiles)
//   }

//   return (
//     <div>
//       <input
//         className="search"
//         type="text"
//         placeholder="Search for books..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <NavLink
//         to={{
//           pathname: '/book-exchange-profiles',
//           state: { searchResults },
//         }}
//       >
//         <button onClick={handleSearch}>Search</button>
//       </NavLink>
//     </div>
//   )
// }

// export default Search
import React, { useState } from 'react'
import './index.css'

const Profiles = [
  {
    name: 'John Doe',
    books: ['The Great Gatsby', 'To Kill a Mockingbird'],
    phonenumber: '+374 091 000 000',
    posterUrl:
      'https://cdn.commercev3.net/cdn.teachersdiscovery.com/images/uploads/4P2151LM_1.jpg',
  },
  {
    name: 'Jane Smith',
    books: ['Harry Potter', 'The Catcher in the Rye'],
    posterUrl:
      'https://m.media-amazon.com/images/I/51lFyeZ7LSL._SY445_SX342_.jpg',
  },
  // Add more profiles as needed
]

function Search({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    const filteredProfiles = Profiles.filter((profile) =>
      profile.books.some((book) =>
        book.toLowerCase().includes(query.toLowerCase())
      )
    )
    onSearch(filteredProfiles)
  }

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

function Search1() {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (results) => {
    setSearchResults(results)
    // Handle the search results as needed
  }

  return (
    <div>
      <Search onSearch={handleSearch} />
      {/* Display or use the searchResults in your UI */}
      {searchResults.map((profile) => (
        <div key={profile.name} style={{ fontSize: '2em' }}>
          <h3>{profile.name}</h3>
          <p>Books: {profile.books.join(', ')}</p>
          <p>Phone Number: {profile.phonenumber}</p>
          <img
            style={{ width: '180px', height: '230px' }} // Adjust the width and height as needed
            src={profile.posterUrl}
            alt={`Poster for ${profile.name}'s books`}
          />
        </div>
      ))}
    </div>
  )
}

export default Search1
