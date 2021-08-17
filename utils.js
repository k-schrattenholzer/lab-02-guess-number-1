export function comparesNumbers(guess, correctNumber) {
    if (guess > correctNumber) return 1;
    if (guess < correctNumber) return -1;
    if (guess === correctNumber) return 0;
  }