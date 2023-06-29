/* eslint-disable no-unused-expressions */
export default function updateWindowLocation(coords) {
  const listContainer = document.querySelector('.listContainer');

  coords && (listContainer.style.top = `${coords[1]}px`);
  coords && (listContainer.style.left = `${coords[0] - 360}px`);
  coords && (listContainer.style.zIndex = '3');
}
