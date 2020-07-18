// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, strand)  => {
  return {
    specimenNum: num,
    dna: strand,
    mutate() {
      this.dna = mockUpStrand()
    },
    compareDNA(pAequor) {
      let total = 0
      for (let i =0; i < pAequor.dna.length;i++){
        if (pAequor.dna[i] === this.dna[i]) {
          total ++
        }
      }
      const percentage = Math.floor(total/15 * 100)
      console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common`)
    },
    willLikelySurvive() {
      let CorB = 0
      for (let i =0; i < this.dna.length;i++){
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          CorB++
        }
      }
      const percentage = CorB/15 * 100
      if (percentage >= 60) {return true} else {return false}
    }
  }
}
/*
const Aequor = pAequorFactory(1, mockUpStrand())
console.log(Aequor)
Aequor.mutate()
console.log(Aequor)
const Aequor2 = pAequorFactory(2, mockUpStrand())
Aequor2.compareDNA(Aequor)
console.log(Aequor2.willLikelySurvive())
*/
const storageArray = []
for (let i = 1; i <= 30; i++) {
  const Aequor = pAequorFactory(i, mockUpStrand())
  storageArray.push(Aequor)
}

console.log(storageArray)

