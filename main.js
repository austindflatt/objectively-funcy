// Your code here.

function getFirstName (person) {
  return person.firstName;
}

function getLastName (person) {
  return person.lastName;
}

function getFullName (person) {
  return person.firstName + " " + person.lastName;
}

function setFirstName (person, person2firstName) {
  return person.firstName = person2firstName;
}

function setAge (person, person2age) {
  return person.age = person2age;
}

function giveBirthday (person) {
  if (person.age === undefined) {
    person.age = 0;
  }
  person.age++
}

function marry (person, person2married) {
    person.married = true;
    person2married.married = true;
    person.spouseName = person2married.firstName + " " + person2married.lastName;
    person2married.spouseName = person.firstName + " " + person.lastName;
}




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
