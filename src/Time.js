export default function Time({ timeObject = { h: 5, m: 55 } }) {
  return (
    <pre>
      Time is:{timeObject.h}: {timeObject.m}
    </pre>
  );
}
