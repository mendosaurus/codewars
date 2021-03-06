// https://www.codewars.com/kata/5c784110bfe2ef660cb90369/train/javascript
// In some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).

// For example: Input structure:

// [
//   {
//     name: "John",
//     points: 100,
//   },
//   {
//     name: "Bob",
//     points: 130,
//   },
//   {
//     name: "Mary",
//     points: 120,
//   },
//   {
//     name: "Kate",
//     points: 120,
//   },
// ]
// Output should be:

// [
//   {
//     name: "Bob",
//     points: 130,
//     position: 1,
//   },
//   {
//     name: "Kate",
//     points: 120,
//     position: 2,
//   },
//   {
//     name: "Mary",
//     points: 120,
//     position: 2,
//   },
//   {
//     name: "John",
//     points: 100,
//     position: 4,
//   },
// ]

// function ranking(people) {
//   return people
//     .sort((a, b) =>
//       a.points === b.points ? a.name.localeCompare(b.name) : b.points - a.points
//     )
//     .map((person, _, array) => {
//       const position =
//         array.findIndex(({ points }) => person.points === points) + 1;
//       return { ...person, position };
//     });
// }

// best practice
function ranking(people) {
  let rankingData = [];
  people
    .sort((prev, next) => {
      if (next.points === prev.points) {
        return prev.name.localeCompare(next.name);
      }
      return next.points - prev.points;
    })
    .forEach((item, index) => {
      const prevItem = rankingData[index - 1] || {};
      rankingData.push({
        ...item,
        position:
          prevItem.points === item.points ? prevItem.position : index + 1
      });
    });
  return rankingData;
}
