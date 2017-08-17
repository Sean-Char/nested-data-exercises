//Queston 1 & 2
function AnimalTestUser(username) {
  var argLength = arguments.length;
  var otherArgs = [];
  if (argLength > 1) {
    for (var i = 1; i < argLength; i++) {
      otherArgs.push(arguments[i])
    }
  }
  return {
    username: username,
    otherArgs: otherArgs
  }
}

var testSheep = AnimalTestUser('CottonBall');
// console.log(testSheep); // {username: 'CottonBall'}

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3]);
console.log(testSheep);

// Qestion 3
// construtor function ------------------------------------------------------------
function AnimalCreator(username, species, tagline, noises) {
  var animal = {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  }
  return animal;
}
var sheep = AnimalCreator('Happy', 'dog', 'play all day', ['ruff', 'bow', 'wow'])
console.log(sheep);

// Question 4 & 5 ------------------------------------------------------------
function addFriend(animal, friend) {
  animal.friends.push(friend.username)
}

var cow = AnimalCreator('Harry', 'cow', 'got milk', ['moo', 'mooooo', 'eat more chicken']);
console.log(cow);

var llama = AnimalCreator('Tina', 'llama', 'got lasagna', ['spits', 'chew', 'sniffs'])
addFriend(cow, sheep);
addFriend(llama, cow)
addFriend(sheep, llama)

// Question 6
var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(llama, cow)
console.log(myFarm);

// Question 7-----------------------------------------------
function addMatchesArray(farm){
  for (var animal in farm){
    farm[animal].matches = [];// creates a property matches in farm obj
  }
}

addMatchesArray(myFarm)
console.log(myFarm[0]);

// Question 8
function giveMatches(farm){
  for (var animal in farm){
    farm[animal].matches.push(farm[animal].friends[0]);
  }
}

giveMatches(myFarm);
console.log(myFarm[0]);
