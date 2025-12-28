export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
]


export function decodedResistorValue(colors: string[]): string {
  const [color1, color2, color3] = colors;

  const value1 = COLORS.indexOf(color1.toLowerCase());
  const value2 = COLORS.indexOf(color2.toLowerCase()); 
  const multiplier = COLORS.indexOf(color3.toLowerCase()); 

  const rawValue = (10 *value1 + value2 ) * 10 ** multiplier; 

  // checking
  if (rawValue >= 10 ** 9 ) {
    return `${rawValue/10 ** 9} gigaohms`
  }

  if (rawValue >= 10 ** 6) {
    return `${rawValue/ 10 ** 6} megaohms`
  }

  if (rawValue >= 10 ** 3) {
    return `${rawValue/10 ** 3} kiloohms`
  }

  return `${rawValue} ohms`
}