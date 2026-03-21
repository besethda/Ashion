export const getImageURL = imageName => {
  return new URL(`../src/assets/images/${imageName}`, import.meta.url).href
}