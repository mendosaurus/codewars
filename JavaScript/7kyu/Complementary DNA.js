// https://www.codewars.com/kata/complementary-dna/
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA"

// // first solution
// function DNAStrand(dna){
//   //your code here
//   dna.split('')
//   let complementaryDNA = []
//   for(let i = 0; i<dna.length; i++){
//     console.log(complementaryDNA)
//     switch(dna[i]){
//       case "A":
//       complementaryDNA.push("T")
//       break

//       case "T":
//       complementaryDNA.push("A")
//       break

//       case "C":
//       complementaryDNA.push("G")
//       break

//       case "G":
//       complementaryDNA.push("C")
//       break
//     }
//   }
//   return complementaryDNA.join('')
// }

// // second solution
// function DNAStrand(dna){
//   let complementaryDNA = ''
//   for(let i = 0; i<dna.length; i++){
//     switch(dna[i]){
//       case "A":
//       complementaryDNA += "T"
//       break

//       case "T":
//       complementaryDNA += "A"
//       break

//       case "C":
//       complementaryDNA += "G"
//       break

//       case "G":
//       complementaryDNA += "C"
//       break
//     }
//   }
//   return complementaryDNA
// }

// best practice
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c];
  });
}

DNAStrand.pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};

DNAStrand("ATTGC");
