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

export function decodedValue(colors: string[] ): number {
  const [color1, color2] = colors;
  
  const value1 = COLORS.indexOf(color1.toLowerCase());
  const value2 = COLORS.indexOf(color2.toLowerCase()); 
  
  return Number(`${value1}${value2}`);
}
 