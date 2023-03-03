import { Input } from 'antd';

function SearchFood({ handleSearch }) {
  return (
    <div className="searchCard">
      <Input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products"
      />
    </div>
  );
}
export default SearchFood;
