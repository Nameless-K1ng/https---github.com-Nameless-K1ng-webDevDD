export default function sectionBtn({ handleSecClick, sectionName }) {
  return (
    <div>
      <button onClick={() => handleSecClick(sectionName)}>{sectionName}</button>
    </div>
  );
}
