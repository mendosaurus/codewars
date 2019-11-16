// http://www.codewars.com/kata/59437bd7d8c9438fb5000004/train/javascript

// Introduction

// There is a war and nobody knows - the alphabet war!
// The letters hide in their nuclear shelters. The nuclear strikes hit the battlefield and killed a lot of them.

// Task

// Write a function that accepts battlefield string and returns letters that survived the nuclear strike.

// The battlefield string consists of only small letters, #,[ and ].
// The nuclear shelter is represented by square brackets []. The letters inside the square brackets represent letters inside the shelter.
// The # means a place where nuclear strike hit the battlefield. If there is at least one # on the battlefield, all letters outside of shelter die. When there is no any # on the battlefield, all letters survive (but do not expect such scenario too often ;-P ).
// The shelters have some durability. When 2 or more # hit close to the shelter, the shelter is destroyed and all letters inside evaporate. The 'close to the shelter' means on the ground between the shelter and the next shelter (or beginning/end of battlefield). The below samples make it clear for you.

function alphabetWar(battlefield) {
  let battlefieldObj = {};
  let section = 0;
  let bunkerSection;
  let bombSection;
  let groundSection;
  let bunkerFlag = false;
  let bombCount = 0;

  battlefield = battlefield.split("");
  battlefield.forEach(element => {
    groundSection = section + "ground";
    if (element === "#") {
      section++;
      bombSection = section + "bomb";
      battlefieldObj[bombSection] = element;
      bombCount++;
    } else if (element === "[") {
      section++;
      bunkerSection = section + "bunker";
      bunkerFlag = true;
    } else if (element === "]") {
      section++;
      bunkerFlag = false;
    } else {
      if (bunkerFlag) {
        battlefieldObj[bunkerSection] === undefined
          ? (battlefieldObj[bunkerSection] = element)
          : (battlefieldObj[bunkerSection] =
              battlefieldObj[bunkerSection] + element);
      } else {
        battlefieldObj[groundSection] === undefined
          ? (battlefieldObj[groundSection] = element)
          : (battlefieldObj[groundSection] =
              battlefieldObj[groundSection] + element);
      }
    }
  });

  let survivors = "";
  let currentBombCount = 0;
  let potentialSurvivors = "";
  let potentialSurvivorsFlag = false;
  let noHitPotentialSurvivors = "";
  let noHitPotentialSurvivorsFlag = false;

  for (let sect in battlefieldObj) {
    if (bombCount === 0) {
      survivors += battlefieldObj[sect];
    } else if (bombCount === 1 && sect.includes("bunker")) {
      survivors += battlefieldObj[sect];
    } else if (bombCount > 1) {
      if (sect.includes("bomb")) {
        currentBombCount++;
        if (potentialSurvivorsFlag) {
          potentialSurvivors = "";
          potentialSurvivorsFlag = false;
        }
        if (noHitPotentialSurvivorsFlag && currentBombCount > 1) {
          noHitPotentialSurvivors = "";
          noHitPotentialSurvivorsFlag = false;
        }
      }
      if (sect.includes("bunker")) {
        if (potentialSurvivorsFlag) {
          survivors += potentialSurvivors;
          potentialSurvivors = "";
          potentialSurvivorsFlag = false;
        }
        if (noHitPotentialSurvivorsFlag) {
          survivors += noHitPotentialSurvivors;
          noHitPotentialSurvivors = "";
          noHitPotentialSurvivorsFlag = false;
        }
        if (currentBombCount === 0) {
          noHitPotentialSurvivors = battlefieldObj[sect];
          noHitPotentialSurvivorsFlag = true;
        } else if (currentBombCount === 1) {
          potentialSurvivors += battlefieldObj[sect];
          potentialSurvivorsFlag = true;
        }
        currentBombCount = 0;
      }
    }
  }
  if (potentialSurvivorsFlag) {
    survivors += potentialSurvivors;
  }
  if (noHitPotentialSurvivorsFlag) {
    survivors += noHitPotentialSurvivors;
  }

  return survivors;
}

// Example

alphabetWar("abde[fgh]ijk"); //=> "abdefghijk"  (all letters survive because there is no # )
alphabetWar("ab#de[fgh]ijk"); // => "fgh" (all letters outside die because there is a # )
alphabetWar("ab#de[fgh]ij#k"); // => ""  (all letters dies, there are 2 # close to the shellter )
alphabetWar("##abde[fgh]ijk"); //   => ""  (all letters dies, there are 2 # close to the shellter )
alphabetWar("##abde[fgh]ijk[mn]op"); // => "mn" (letters from the second shelter survive, there is no # close)
alphabetWar("#ab#de[fgh]ijk[mn]op"); // => "mn" (letters from the second shelter survive, there is no # close)
alphabetWar("#abde[fgh]i#jk[mn]op"); // => "mn" (letters from the second shelter survive, there is only 1 # close)
alphabetWar("[a]#[b]#[c]"); //  => "ac"
alphabetWar("[a]#b#[c][d]"); // => "d"
alphabetWar("[a][b][c]"); //   => "abc"
alphabetWar("##a[a]b[c]#"); //  => "c"
