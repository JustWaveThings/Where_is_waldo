import { parsedMushroomHits, parsedJohnHits, parsedWaldoHits } from './character_coordinates';
import drawCharacterSelector from './draw_character_selector';
import characterList from './character_list';

// display character list on click of canvas. Hit property is there for styling purposes

export default function makeCharacterChoiceOnClick(clickedCoords) {
  // query clicked div and change positioning
  const clickedDiv = document.querySelector(`div[data-coord-x='${clickedCoords[0]}'][data-coord-y='${clickedCoords[1]}']`);
  clickedDiv.style.position = 'relative';

  // create menu container and append to the clicked div... but with relative positioning.
  const listContainer = document.createElement('div');
  listContainer.className = 'listContainer';
  listContainer.style.position = 'absolute';
  listContainer.setAttribute('display', 'flex');
  listContainer.style.backgroundColor = 'white';
  listContainer.style.top = '20px';
  listContainer.style.left = '40px';
  listContainer.style.display = 'flex';
  listContainer.style.justifyContent = 'center';
  listContainer.style.alignItems = 'center';
  listContainer.style.padding = '.5rem .5rem';
  listContainer.style.borderRadius = '.5rem';
  clickedDiv.appendChild(listContainer);
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
