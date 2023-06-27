import { clickCoord } from './waldo_container';
import { parsedMushroomHits, parsedJohnHits, parsedWaldoHits } from './character_coordinates';

// determine which character is chosen after user clicks on canvas
// check if the clickCoord matches a coordinate of the parsed characters coordinate
// return hit or miss

function makeCharacterChoiceOnClick() {
  const characterList = [
    { character: 'John Oliver', clicked: false },
    { character: 'Waldo', clicked: false },
    { character: 'Mushroom', clicked: false },
  ];

  const mouseCanvas = document.querySelector('.imageCont');
  const characterMenu = document.createElement('div');
  characterMenu.className = 'ball';
  mouseCanvas.appendChild(characterMenu);
}
export default makeCharacterChoiceOnClick;
