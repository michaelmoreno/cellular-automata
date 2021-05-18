let rgb = [255, 0, 0]
let i = 0;
export const rainbow = (yQuotient) => {
  if (i == 3) {
    i = 0;
  }
  const ranges = Math.round(yQuotient / 7);
  const increment = 255 / ranges;
  let last = (i == 0) ? 2 : i - 1
  if (rgb[i] < 255) {
    rgb[i] += increment;
  } else {
    if (rgb[last] <= 0) {
      i++;
    } else {
      rgb[last] -= increment;
      if (rgb[last] < 0)
        rgb[last] = 0;
    }
  }
  return rgb;
}
