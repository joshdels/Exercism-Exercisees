export function toRna(strands: string): string {
  // add a for loop of each letter hmmm
  // add error handling of the letters no in the array

  let results: string  = ""
  for (let i = 0; i < strands.length; i++) { 
    results += checkMatch(strands[i])
  }
  return results
}

function checkMatch(strain: string): string | null {
  switch(strain) {
    case "G": return "C";
    case "C": return "G";
    case "T": return "A";
    case "A": return "U";
    default: throw new Error("Invalid input DNA.") ;
  }
} 
