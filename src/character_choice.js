import { parsedMushroomHits, parsedJohnHits, parsedWaldoHits } from './character_coordinates';
import drawCharacterSelector from './draw_character_selector';
import characterList from './character_list';

// display character list on click of canvas. Hit property is there for styling purposes

export default function makeCharacterChoiceOnClick(windowCoords) {
  const canvas = document.querySelector('.imageCont');

  // create menu container and append to the canvas... but with relative positioning and update the top / left values dynamically.
  const listContainer = document.createElement('div');
  listContainer.className = 'listContainer';
  listContainer.style.position = 'absolute';
  listContainer.setAttribute('display', 'flex');
  listContainer.style.backgroundColor = 'white';
  listContainer.style.top = `${windowCoords[1]}px`;
  listContainer.style.left = `${windowCoords[0] - 360}px `;
  listContainer.style.display = 'flex';
  listContainer.style.justifyContent = 'center';
  listContainer.style.alignItems = 'center';
  listContainer.style.padding = '.5rem .5rem';
  listContainer.style.borderRadius = '.5rem';
  canvas.appendChild(listContainer);

  const ul = document.createElement('ul');
  ul.style.display = 'flex';
  ul.style.justifyContent = 'space-evenly';
  ul.style.gap = '1rem';
  ul.style.flexDirection = 'column';
  ul.style.paddingInlineStart = '0px';
  ul.style.alignItems = 'flex-start';

  listContainer.appendChild(ul);

  drawCharacterSelector(characterList, ul);
}
