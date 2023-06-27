export default function windowClickCoords(e) {
  const xPosition = e.clientX;
  const yPosition = e.clientY;

  console.log([xPosition, yPosition], 'from getClickPosition');
  return [xPosition, yPosition];
}
