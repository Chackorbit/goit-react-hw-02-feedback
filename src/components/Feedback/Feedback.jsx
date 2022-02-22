export default function Feedback({ goodBtn, neutralBtn, badBtn }) {
  return (
    <div>
      <button onClick={goodBtn}>Good</button>
      <button onClick={neutralBtn}>Neutral</button>
      <button onClick={badBtn}>Bad</button>
    </div>
  );
}
