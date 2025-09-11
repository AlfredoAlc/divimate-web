export const getColor = (color: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${color}`)
    .trim();
};
