/* eslint-disable array-callback-return */

export default function drawCharacterSelector(characters, append) {
  const displayListCharacters = characters.map(item => {
    const li = document.createElement('li');
    li.className = `characterListItem hit-${item.hit} `;
    li.textContent = item.character;
    append.appendChild(li);
  });
  return displayListCharacters;
}
