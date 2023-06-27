// this will hold the container that renders the image and an invisible grid of divs with event listeners
import waldoImg from './img/findjohnoliver.jpg';
import checkHit from './check_hit';
import clickCoord from './click_coords';
import makeCharacterChoiceOnClick from './character_choice';
import windowClickCoords from './window_click_coords';

function waldoContainer() {
  const containerSize = 1000;
  const divisor = 5; // don't change or you need to redraw bounding
  const body = document.querySelector('body');

  const imageCont = document.createElement('div');
  imageCont.className = 'imageCont';
  body.appendChild(imageCont);

  // add listener for container to track mouse clicks

  imageCont.addEventListener('click', e => windowClickCoords(e), false);

  const canvasImage = document.createElement('img');
  canvasImage.src = waldoImg;
  canvasImage.className = 'waldoImg';
  imageCont.appendChild(canvasImage);

  for (let i = 0; i <= containerSize / divisor; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    imageCont.appendChild(row);

    for (let j = 0; j <= containerSize / divisor; j += 1) {
      const box = document.createElement('div');
      box.className = 'box';
      box.textContent = '';
      box.setAttribute('data-coord-x', `${+i}`);
      box.setAttribute('data-coord-y', `${+j}`);
      row.appendChild(box);
      // eslint-disable-next-line no-loop-func
      box.addEventListener('click', e => {
        const { coordX } = e.target.dataset;
        const { coordY } = e.target.dataset;
        // need to select a character to check for hit
        makeCharacterChoiceOnClick(windowClickCoords(e));

        // check for hit on that character
        checkHit(clickCoord(coordX, coordY));
      });
    }
  }
}
export default waldoContainer;
