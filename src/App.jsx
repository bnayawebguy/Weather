import { useEffect, useState } from "react"
import WeatherData from "./component/WeatherData"
import SearchForm from "./component/SearchForm"

export default function App() {
  const [location, setLocation] = useState("")
  const [lat, setLat] = useState("")
  const [lon, setLon] = useState("")
  const [data, setData] = useState(null)

  const handleSetLocation = (loc) => {
    setLocation(loc)
  }

  const handleLocationSearch = async (e) => {
    e.preventDefault()

    if (!location) {
      setData(null)
    }

    await fetch(`https://geocode.maps.co/search?q=${location}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.length > 0) {
          setLat(result[0].lat)
          setLon(result[0].lon)
        }
      })
  }

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `${import.meta.env.VITE_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result)
          if (result.cod === 200) {
            setData(result)
          }
        })
    }
    fetchData()
  }, [lat, lon])

  return (
    <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center'>
      <div className='w-3/12 bg-white p-8 rounded-2xl'>
        <h1 className='text-4xl font-semibold mb-4 text-center'>Weather In</h1>

        <SearchForm
          searchLocation={handleLocationSearch}
          saveLocation={handleSetLocation}
          location={location}
        />

        {!data && (
          <p className='text-center text-red-500 font-semibold text-lg'>
            No Data to display Weather.
          </p>
        )}

        {data && <WeatherData location={location} data={data} />}
      </div>
    </div>
  )
}
