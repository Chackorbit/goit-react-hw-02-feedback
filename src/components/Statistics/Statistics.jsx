export default function Statistics({ good, neutral, bad }) {
  return (
    <ul>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
    </ul>
  );
}
