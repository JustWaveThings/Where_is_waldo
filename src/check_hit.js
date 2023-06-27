import { parsedMushroomHits, parsedJohnHits, parsedWaldoHits } from './character_coordinates';

export default function checkHit(playerInput, characterChosen = parsedJohnHits) {
  console.log(playerInput, 'playerInput');

  const matchFirstPlayerInputCoord = characterChosen.filter(item => item[0] === playerInput[0]);

  if (matchFirstPlayerInputCoord.length === 0) {
    console.log('miss');
    return false;
    // eslint-disable-next-line no-else-return
  } else if (matchFirstPlayerInputCoord.some(item => item[1] === playerInput[1])) {
    console.log('hit');
    return true;
  } else {
    console.log('error in check_hit');
    return null;
  }
}
