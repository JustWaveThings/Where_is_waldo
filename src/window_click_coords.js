// eslint-disable-next-line consistent-return
export default function windowClickCoords(e) {
  if (e.target.className.includes('listContainer') || e.target.className.includes('characterListItem')) {
    return null;
    // eslint-disable-next-line no-else-return
  } else {
    const xPosition = e.pageX;
    const yPosition = e.pageY;

    console.log([xPosition, yPosition], 'from getClickPosition');
    return [xPosition, yPosition];
  }
}
