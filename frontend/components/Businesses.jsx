import '../src/App.css'
import BusinessCard from './BusinessCard'
import Header from './Header'

let foodItem = [
  {
    name: 'Veg Supremem Burger',
    price: 99,
    ratings: 4.4,
    img: 'http://source.unsplash.com/1600x700/?burger',
  },
  {
    name: 'Veg Supremem Pizza',
    price: 299,
    ratings: 4.2,
    img: 'http://source.unsplash.com/1600x700/?pizza',
  },
  {
    name: 'Veg Supremem Salad',
    price: 199,
    ratings: 3.9,
    img: 'http://source.unsplash.com/1600x700/?salad',
  },
  {
    name: 'Veg Supremem fries',
    price: 99,
    ratings: 4.0,
    img: 'http://source.unsplash.com/1600x700/?fries',
  },
  {
    name: 'Cripsy Masala Dosa',
    price: 149,
    ratings: 4.3,
    img: 'http://source.unsplash.com/1600x700/?dosa',
  },
  {
    name: 'Chilled Coffee',
    price: 59,
    ratings: 3.8,
    img: 'http://source.unsplash.com/1600x700/?coldcoffee',
  },
]

function Businesses() {
  // const [user, setUser] = useState([])
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'd92c2e35afmsh7c1c8e51f88a51ep1bfce7jsn58ff5dee75c3',
  //     'X-RapidAPI-Host': 'local-businesses-by-outscraper.p.rapidapi.com',
  //   },
  // }
  // let url =
  //   'https://local-businesses-by-outscraper.p.rapidapi.com/maps/search-v2?query=software%2C%20NY%2C%20USA&limit=20&skipPlaces=0&language=en&region=US'

  // useEffect(() => {
  //   async function getData() {
  //     await fetch(url, options)
  //       .then((res) => res.json())
  //       .then((data) => setUser(data))
  //   }
  //   getData()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  // console.log(user)

  return (
    <div>
      <Header />
      <div className='App '>
        <h1 className='text-center text-[50px] text-white font-bold mt-4 mb-4'>
          List of Businesses
        </h1>
      </div>
      <div className='cardItems'>
        <BusinessCard
          name='Elpro Energy Dimensions Private Limited'
          full_address='430/490, Srigandhada Kavalu Dhakale, Magadi Main Road, Sunkadakatte, Bangalore, Karnataka'
          city='Bangalore'
          rating='3.8'
          img='/assests/elpro.jpg'
        />
        <BusinessCard
          name='Lenore Designs'
          full_address='3, Papayya Reddy Building Next To Axis Bank ATM, Hal, Thippasandra, Bangalore, Karnataka'
          city='Bangalore'
          rating='4.5'
          img='/assests/lenore.jpg'
        />
        <BusinessCard
          name='Global Agri Enterprises'
          full_address='JP Nagar, Bangalore, Karnataka'
          city='Bangalore'
          rating='3.9'
          img='/assests/globalagri.jpg'
        />
        <BusinessCard
          name='Bhagavan Real Estate & Interiors'
          full_address='2294 MIG 3rd Stage, 15th B Cross, B Sector, (Next TO Yelahanka New Town Main Bus Stand), Bangalore, Karnataka'
          city='Bangalore'
          rating='4.1'
          img='/assests/bhagvan.jpg'
        />
        <BusinessCard
          name='Alico Industrial Enterprises'
          full_address='56, Sadar Patrappa Rd, Gollarpet, Kumbarpet, Dodpete, Nagarathpete, Bangalore, Karnataka'
          city='Bangalore'
          rating='4.6'
          img='/assests/alico.png'
        />
        <BusinessCard
          name='Expertax Advisory Private Limited'
          full_address='No. 752, 10th Main, 5th Cross, BSK 1st Stage, Banashankari, Bangalore, Karnataka'
          city='Bangalore'
          rating='3.2'
          img='/assests/gst.jpg'
        />
      </div>
    </div>
  )
}

export default Businesses
