/* eslint-disable array-callback-return */

export default function drawCharacterSelector(characters, append) {
  const displayListCharacters = characters.map(item => {
    const li = document.createElement('li');

    li.className = `characterListItem hit-${item.hit} `;
    li.textContent = item.character;
    li.style.listStyle = 'none';
    li.style.fontSize = '1.5rem';
    li.style.padding = '.5rem';
    li.style.alignSelf = 'center';

    const button = document.createElement('button');
    button.className = 'characterButton';
    button.appendChild(li);
    append.appendChild(button);
  });

  return displayListCharacters;
}
