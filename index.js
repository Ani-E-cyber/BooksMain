import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { useState } from 'react'
import Search1 from './Search1'
import BookExchangeProfiles from './components/BookExchangeProfiles'
import WinterGif from './assets/assets'

// import App from './App'

// const pizzaData = [
//   {
//     name: 'The Great Gatsby',
//     ingredients:
//       'The Great Gatsby, third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribner’s Sons. ',
//     // price: 6,
//     photoName: 'pizzas/Gatsby.jpg',
//     soldOut: false,
//   },
//   {
//     name: 'Harry Potter and the Prisoner of Azkaban',
//     ingredients:
//       'The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. ',
//     // price: 10,
//     photoName: 'pizzas/Harry-Potter-PA.jpg',
//     soldOut: false,
//   },
//   {
//     name: 'The Secret Garden',
//     ingredients: 'The Secret Garden tells the story of Mary Lennox.',
//     // price: 12,
//     photoName: 'pizzas/SecretGarden.jpg',
//     soldOut: false,
//   },
//   {
//     name: 'Narnia',
//     ingredients:
//       'Set during World War II, it tells the story of four siblings who stumble upon a magical wardrobe that leads them to the enchanted land of Narnia.',
//     // price: 12,
//     photoName: 'pizzas/Narnia.jpg',
//     soldOut: false,
//   },
// {
//   name: 'Pizza Salamino',
//   ingredients: 'Tomato, mozarella, and pepperoni',
//   price: 15,
//   photoName: 'pizzas/salamino.jpg',
//   soldOut: true,
// },
// {
//   name: 'Pizza Prosciutto',
//   ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
//   price: 18,
//   photoName: 'pizzas/prosciutto.jpg',
//   soldOut: false,
// },
// ]

function App() {
  return (
    <div className="container">
      {/* <h1>Hello React!</h1> */}
      <Header />
      {/* <App /> */}
      <Logo /> <img src={WinterGif} alt="WinterGif" />
      <Search1 />
      {/* <Search1 /> */}
      <NavBar />
      {/* <Menu /> */}
      {/* <Footer /> */}
    </div>
  )
}

// function Search() {
//   const [query, setQuery] = useState('')
//   return (
//     <input
//       className="search"
//       type="text"
//       placeholder="Search for books..."
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//     />
//   )
// }

function Header() {
  // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' }
  const style = {}
  return (
    <header className="header">
      <h1 style={style}> Book exchange Site</h1>
    </header>
  )
}

// function Menu() {
//   return (
//     <main className="menu">
//       <h2>Books</h2>
//       {/* <p>Book Samples</p> */}
//       <ul className="pizzas">
//         {pizzaData.map((pizza) => (
//           <Pizza pizzaObj={pizza} key={pizza.name} />
//         ))}
//       </ul>

//   //     /*<Pizza
//       name="Pizza Spinaci"
//       ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//       photoName="pizzas/spinaci.jpg"
//       price={10}
//     />
//     ;
//     <Pizza
//       name="Pizza Funghi"
//       ingredients="Tomato, mushrooms"
//       price={12}
//       photoName="pizzas/funghi.jpg"
//   // /> */
//     </main>
//   )
// }

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  )
}

/*
function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open"); else alert("We're closed");
  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : null}
    </footer>
  )
  // return React.createElement('footer', null, "We're currently open")
}
*/

// function Order(props) {
//   return (
//     <div className="order">
//       {' '}
//       <p>
//         We're open until {props.closeHour}:00. Come visit us or order online.
//       </p>
//       <button className="btn">Order</button>
//     </div>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function NavBar({ children }) {
  return <nav className="nav-bar"></nav>
}

function Logo() {
  return (
    <div className="logo">
      <h1>
        Come and join us! <pre>And start exchanging books right now!</pre>
        {/* //A big community where you can exchange your book with
        someone else's book. */}
        {/* //and dive into a new world of adventures. Don't miss
        this opportunity.<span role="img">📘</span> */}
      </h1>
    </div>
  )
}

// const Profiles = [
//   {
//     name: 'John Doe',
//     books: ['The Great Gatsby', 'To Kill a Mockingbird'],
//   },
//   {
//     name: 'Jane Smith',
//     books: ['Harry Potter', 'The Catcher in the Rye'],
//   },
// ]

// function Doc() {
//   const [searchResults, setSearchResults] = useState([])

//   const handleSearch = (results) => {
//     setSearchResults(results)
//     // Handle the search results as needed
//   }

//   return (
//     <div>
//       <Doc onSearch={handleSearch} />
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
