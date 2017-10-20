'use-strict';
/* eslint no-console: 0 */
let state;
let x = 1;

while (x < 100) {
  state = 'GREEN';
  while (state === 'GREEN') {
    console.log(state);
    state = 'YELLOW';
    x++;
  }
  while (state === 'YELLOW') {
    console.log(state);
    state = 'RED';
    x++;
  }
  while (state === 'RED') {
    console.log(state);
    state = 'GREEN';
    x++;
  }
}