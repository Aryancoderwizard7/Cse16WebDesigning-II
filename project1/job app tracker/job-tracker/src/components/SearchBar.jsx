function SearchBar({ setSearch }) {

  return (

    <input
      placeholder="Search Company"
      onChange={(e)=>setSearch(e.target.value)}
    />

  );
}

export default SearchBar;