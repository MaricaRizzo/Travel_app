import DestinationCard from "./DestinationCard";

export default function DestinationList(props) {
  return (
    <div>
      <ul>
        {props.cities.map((city, index) => (
          <DestinationCard key={index} city={city} />
        ))}
      </ul>
    </div>
  );
}
