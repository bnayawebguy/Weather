function SearchForm({ searchLocation, saveLocation, location }) {
  return (
    <form className='mb-3' onSubmit={searchLocation}>
      <input
        type='text'
        placeholder='Location Name...'
        className='border-2 rounded-full px-3 py-2 min-w-full'
        value={location}
        onChange={(e) => saveLocation(e.target.value)}
      />
      <button type='submit' className='hidden'>
        Send
      </button>
    </form>
  )
}

export default SearchForm
