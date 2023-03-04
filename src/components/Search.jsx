
function SearchFood({ handleSearch, searchValue }) {
  return (
    <div className="searchCard">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products"
      />
    </div>
  );
}

export default SearchFood;
