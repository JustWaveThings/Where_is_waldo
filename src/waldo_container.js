// this will hold the container that renders the image and an invisible grid of divs with event listeners
import waldoImg from './img/findjohnoliver.jpg';

export function clickCoord(click) {
  console.log(click);
  return click;
}

function waldoContainer() {
  // set height and width for 'waldo container' which the image and div will inherit
  // z-index will put image behind divs

  const containerSize = 1000;
  const divisor = 5;
  const body = document.querySelector('body');

  const imageCont = document.createElement('div');
  imageCont.className = 'imageCont';
  body.appendChild(imageCont);

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
      box.setAttribute('data-coord', `[${[i]}, ${[j]}]`);
      row.appendChild(box);
      // eslint-disable-next-line no-loop-func
      box.addEventListener('click', e => {
        // console.log(e.target.dataset.coord);
        clickCoord(e.target.dataset.coord);
      });
    }
  }
}
export default waldoContainer;
