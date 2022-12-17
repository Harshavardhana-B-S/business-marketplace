import { useState, useEffect } from 'react'
import '../src/App.css'
import BusinessCard from './BusinessCard'
import Header from './Header'

// let foodItem = [
//   {
//     name: 'Veg Supremem Burger',
//     price: 99,
//     ratings: 4.4,
//     img: 'http://source.unsplash.com/1600x700/?burger',
//   },
//   {
//     name: 'Veg Supremem Pizza',
//     price: 299,
//     ratings: 4.2,
//     img: 'http://source.unsplash.com/1600x700/?pizza',
//   },
//   {
//     name: 'Veg Supremem Salad',
//     price: 199,
//     ratings: 3.9,
//     img: 'http://source.unsplash.com/1600x700/?salad',
//   },
//   {
//     name: 'Veg Supremem fries',
//     price: 99,
//     ratings: 4.0,
//     img: 'http://source.unsplash.com/1600x700/?fries',
//   },
//   {
//     name: 'Cripsy Masala Dosa',
//     price: 149,
//     ratings: 4.3,
//     img: 'http://source.unsplash.com/1600x700/?dosa',
//   },
//   {
//     name: 'Chilled Coffee',
//     price: 59,
//     ratings: 3.8,
//     img: 'http://source.unsplash.com/1600x700/?coldcoffee',
//   },
// ]

function Businesses() {
  const [user, setUser] = useState([])
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd92c2e35afmsh7c1c8e51f88a51ep1bfce7jsn58ff5dee75c3',
      'X-RapidAPI-Host': 'local-businesses-by-outscraper.p.rapidapi.com'
    },
  }
  let url =
    'https://local-businesses-by-outscraper.p.rapidapi.com/maps/search-v2?query=software%2C%20NY%2C%20USA&limit=20&skipPlaces=0&language=en&region=US'

    useEffect(() => {
      async function getData() {
        await fetch(url,options)
          .then((res) => res.json())
          .then((data) => setUser(data));
      }
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  console.log(user)

  return (
    <div>
      <Header />
      <div className='App'>
        <h1 className='text-white text-2xl text-center m-6'>
          List of Businesses{' '}
        </h1>
      </div>
      <div className='cardItems'>
        {user && user.length > 0 && user.map((item) => {
          return (
            <BusinessCard
              name={item.name}
              full_address={item.full_address}
              city={item.city}
              rating={item.rating}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Businesses
