const data = [
  { name: "john", age: 28, profession: "painter" },  
  { name: "bob", age: 27, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];


// 1. Print Developers
function printDeveloper() {
  const developers = data.filter((item) => item.profession === "developer");
  console.log(developers);
}

// 2. Add Data
const newData = { name: "ram", age: 30, profession: "analyst" };
function addData(newData) {
  data.push(newData);
  console.log(data);
}


// 3. Remove Admins
function removeAdmin() {
  // Create a new array with non-admin objects using filter
  const filteredData = data.filter((person) => person.profession !== "admin");

  // Log a message to confirm the removal
  console.log("Admins removed:", filteredData);
}

// 4. Concatenate Array
function concatenateArray() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = array1.concat(array2);
  console.log("Concatenated Array", concatenatedArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, item) => sum + item.age, 0);
  const avg = totalAge / data.length;
  console.log(avg);
}

// 6. Age Check
function checkAgeAbove25() {

  const above25 = data.every((items) => items.age > 25);
  console.log(above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map((item) => item.profession))];
  console.log(professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update John's Profession
function updateJohnsProfession(newProfession) {
  const john = data.find((item) => item.name === "john");
  if (john) {
    john.profession = newProfession;
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCounts = {};
  data.forEach((item) => {
    if (professionCounts[item.profession]) {
      professionCounts[item.profession]++;
    } else {
      professionCounts[item.profession] = 1;
    }
  });
  console.log(professionCounts);
}

// Function calling

printDeveloper();
addData(newData);
removeAdmin();
concatenateArray();
averageAge();
checkAgeAbove25();
uniqueProfessions();
sortByAge();
updateJohnsProfession("machanic");
getTotalProfessions();