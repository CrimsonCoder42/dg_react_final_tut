import React from 'react'

const SearchItem = () => {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Search" />
      </form>
  )
}

export default SearchItem