import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchItem = ({ search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()} action="">
        <label htmlFor="search">Search</label>
        <input 
            id='search'
            type="text"
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

    </form>
    
  )
}

export default SearchItem