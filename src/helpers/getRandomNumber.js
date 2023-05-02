export function getRandomNumber(min = 0, max = 255) {
    return Math.random() * (max - min) + min;
}
