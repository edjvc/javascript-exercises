const findTheOldest = function (arr) {
  function getAge(person) {
    if ("yearOfDeath" in person) {
      return person.yearOfDeath - person.yearOfBirth;
    } else {
      return 2025 - person.yearOfBirth;
    }
  }

  const sortedArray = arr.toSorted((a, b) => {
    return getAge(b) - getAge(a);
  });

  return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
