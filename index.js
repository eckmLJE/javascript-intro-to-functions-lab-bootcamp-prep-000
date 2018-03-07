var grandmaCant = "I can't hear you!"
var grandmaYes = "YES INDEED!"
var grandmaLove = "I love you, too."


function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
  return grandmaCant}
}

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
  return grandmaYes}
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
  return grandmaLove}
}