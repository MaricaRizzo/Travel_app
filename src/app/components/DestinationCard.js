export default function DestinationCard(props) {
  console.log(props.city);
  return (
    <div>
      <li>
        {props.city.name}, {props.city.country}
      </li>
    </div>
  );
}
