export default function windowClickCoords(e) {
  const xPosition = e.pageX;
  const yPosition = e.pageY;

  console.log([xPosition, yPosition], 'from getClickPosition');
  return [xPosition, yPosition];
}
