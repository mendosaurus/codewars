// https://www.codewars.com/kata/550f22f4d758534c1100025a
// Once upon a time, on a way through the old wild west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed the desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or

// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or

// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or

// { "WEST" }
// or

// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr) {
  const oppositePair = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST"
  };
  let changed = false;

  // eliminate opposing pairs
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] == oppositePair[arr[i]]) {
      arr.splice(i, 2);
      changed = true;
      console.log(arr, changed);
    }
  }
  // if array was changed call the function again for new matches
  return changed ? dirReduc(arr) : arr;
}

// best practice
// unction dirReduc(plan) {
//   var opposite = {
//     'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
//   return plan.reduce(function(dirs, dir){
//       if (dirs[dirs.length - 1] === opposite[dir])
//         dirs.pop();
//       else
//         dirs.push(dir);
//       return dirs;
//     }, []);
// }

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); //["WEST"]
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])//["NORTH", "WEST", "SOUTH", "EAST"]
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])//[]
