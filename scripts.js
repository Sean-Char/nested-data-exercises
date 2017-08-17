// from object exercise
var animal = {};

animal.username = "chris";

animal["tagline"] = "I'm coco for cocoa puffs";

var noises = [];
animal['noises'] = noises

console.log(animal);


// Array Exercise ------------------------------

var noiseArray = ['hiss'];

noiseArray.unshift('nehh');
noiseArray.push('ruff');
noiseArray[3] = 'meow';

console.log(noiseArray.length);
// what is the length? answer: 4

console.log(noiseArray[noiseArray.length - 1]);
// what is the last index? how is it diff. than length?
// answer: meow

animal.noises = noiseArray;
console.log(animal);


// Animal Collection exercise -----------------------------
// come up w/ two ways you can add an element to the end of an aray w/out knowing the exact length of the array. User --> arr.push or arr[arr.length]
var animals = [];
animals.push(animal)

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }

// pushing quackers at th end bracket notation
animals[animals.length] = quackers;

// pushing using .push method
var cat = {
  username: 'Meowith',
  tagline: 'I love cat nip',
  noises: ['meow', 'sneeze', 'purr']
}
animals.push(cat)


console.log(animals); // --> [{..},{..},{..}]



//----------------------------Nesting----------------------------------------------


var friends = [];

friends.push(animals[0].username, animals[1].username)
console.log(friends); // -->  array ['Chris', 'DaffyDuck']

var relationships = {};

relationships.friends = friends;
console.log(relationships); // --> Object {friends: ['Chris', 'DaffyDuck']}
console.log(Object.keys(relationships).length); // --> 1

var matches = [];
relationships.matches = matches;
relationships.matches.push('pig');
console.log(relationships); // --> Object {friends: [Chris, DaffyDuck], matches: ['pig']}

for (var i = 0; i < animals.length; i++) {
  animals[i].relationships = relationships
}
console.log(animals); //--> [{...},{...},{...} relationships: ['..'],['..']]
