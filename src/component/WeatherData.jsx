function WeatherData({ location, data }) {
  return (
    <div>
      <h2 className='text-xl text-center mb-4'>{location}</h2>

      <div className='flex gap-x-4'>
        <div className='w-6/12 text-5xl font-light'>{data.main.temp}°F</div>
        <ul className='w-6/12 flex flex-col'>
          <span className='font-bold mb-2 capitalize'>
            {data.weather[0].description}
          </span>
          <span className='pl-4 mb-2'>Max: {data.main.temp_max}°F</span>
          <span className='pl-4'>Min: {data.main.temp_min}°F</span>
        </ul>
      </div>

      <div className='text-center'>
        <img
          className='inline'
          src={`${import.meta.env.VITE_ICON_URL}/${
            data.weather[0].icon
          }@4x.png`}
          alt='Weather Icon'
        />
      </div>

      <div className='flex justify-between'>
        <div className='inline-flex flex-col'>
          <span className='text-2xl'>{data.main.feels_like}°F</span>
          <span>Feels Like</span>
        </div>
        <div className='inline-flex flex-col text-right'>
          <span className='text-2xl'>{data.main.humidity}%</span>
          <span>Humidity</span>
        </div>
      </div>
    </div>
  )
}
export default WeatherData
