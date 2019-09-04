// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = 'Grazi';

// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.

let hacker2 = 'Gui';
// 1.4 Print "The navigator's name is YYYY".

console.log(`The navigator's name is ${hacker2}`);

// 2.1. Depending on which name is longer, print: - The Driver has the longest name, it has XX characters or - Yo, navigator got the longest name, it has XX characters or - Wow, you both got equally long names, XX characters!

if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both got equally long names, ${hacker1.length} characters!`
  );
}

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let spaceString = '';
for (let i = 0; i < hacker1.length; i += 1) {
  spaceString += `${hacker1[i].toUpperCase()} `;
}
console.log(spaceString);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reversed = '';
for (let x = hacker2.length - 1; x >= 0; x -= 1) {
  reversed += `${hacker2[x]}`;
}
console.log(reversed);

// 3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both got the same name?`);
}

// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.

let loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas, lorem vel sollicitudin lobortis, tellus sem laoreet tellus, ullamcorper suscipit lacus erat quis lectus. Morbi sed ultricies risus, eu commodo arcu. Nam ac nisl sollicitudin, gravida massa interdum, maximus erat. Donec et malesuada lacus. Vestibulum euismod orci sit amet eros rhoncus, nec auctor tortor euismod. Nunc sed quam quis nunc luctus semper sit amet eu diam. Cras maximus metus nibh, vel condimentum diam tincidunt a. Maecenas tincidunt mi nulla, vel ultrices metus commodo a. \nFusce volutpat, ante eu iaculis laoreet, eros neque fermentum risus, at volutpat quam mi vitae turpis. Nam dolor nunc, eleifend in dolor id, tristique vulputate dolor. In vel mi non sapien viverra bibendum. Nunc non posuere justo. Ut ac posuere mauris. Vestibulum ultrices ultrices dui. Pellentesque vel scelerisque enim. Vestibulum quis libero vitae velit tristique interdum. Maecenas ac facilisis nisi, non blandit magna. Vivamus ut pharetra ex. Duis id mollis odio. Etiam vel risus at tortor congue dictum. Nam ligula felis, facilisis ut libero in, ultrices porttitor quam. Sed tempor neque vitae auctor pulvinar. In hac habitasse platea dictumst. Aenean efficitur nisi at urna luctus, a varius ligula volutpat. \nCurabitur ornare rutrum urna, lobortis auctor eros. Sed vehicula dui eu purus varius, et auctor sapien auctor. Proin pellentesque libero sed consequat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ac dictum orci. Donec vitae justo massa. Curabitur porttitor sodales dictum.';

// Make your program count the number of words in the string.
let count = 1;
for (let y = 0; y < loremIpsum.length; y += 1) {
  if (loremIpsum[y] === ' ') {
    count += 1;
  }
}
console.log(count);

// Make your program count the number of times the Latin word et appears.

const arr = loremIpsum.split(' ');
let word = 0;
for (let z = 0; z < arr.length; z += 1) {
  if (arr[z] === 'et') {
    word += 1;
  }
}
console.log(word);
