export default function Planet({ PlanetDetails }) {
  return (
    <div className={PlanetDetails.className}>
      <h3>Planet name: {PlanetDetails.name}</h3>
      <h3>Planet diameter: {PlanetDetails.diameter}</h3>
    </div>
  );
}
