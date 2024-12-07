import { fetchCities } from "../../../utils/geoDB";

export default function SearchBar(props) {
  const handleSearch = async () => {
    if (props.query.trim()) {
      const results = await fetchCities(props.query);
      props.setCities(results);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
        placeholder="Search for a city..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
