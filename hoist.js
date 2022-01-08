///////////////////////////////////////////
// #1
// Given
console.log(hello);
var hello = "world";

// After hoisting by the interpreter
// var hello;
// console.log(hello); logs undefined
// var hello = "world";

///////////////////////////////////////////
// #2
// Given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// After hoisting by the interpreter
// var needle = "haystack";
// test(); logs "magnet"

///////////////////////////////////////////
// #3
// Given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// After hoisting by the interpreter
// var brendan           hoisted
// print()              gets hoisted
// console.log(brendan) gets hoisted in print() scope
// brendan = "only ok"   gets hoisted in print() scope
// console.log(brendan)  logs super cool

///////////////////////////////////////////
// #4
// Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// After hoisting by the interpreter
// var food = "chicken"  
// eat()                 gets hoisted with its own scope
// var food              gets hoisted in eat() scope
// food = "half-chicken"
// console.log(food)     
// food = "gone"         
// cosole.log(food)       logs "chicken"
//eat()                   logs "half-chicken"   

///////////////////////////////////////////
// #5
// Given
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);



// After hoisting by the interpreter
// var mean              gets hoisted 
// mean()                error mean is not defined
// mean = function()     mean would be declared, anchored here with its own scope since its a function 
// var food              var food would be hoisted
// food = "chicken"      food would be declared a chicken
// cosole.log(food)      would log "chicken" when function is called
// food = "fish"         food would be  redeclared as fish 
// console.log           would log fish

///////////////////////////////////////////
// #6
// Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// After hoisting by the interpreter
// var genre              gets hoisted 
// rewind()               hoisted with its own scope
//console.log(genre)      genre is undefined
//genre =disco            genre defined as disco
// rewind() called       
//var genre               hoisted in rewind() scope
//genre = rock            genre defined as rock
//console.log(genre)      logs rock
//genre = r&b             logs r&b
//console.log(r&b)        logs disco

///////////////////////////////////////////
// #7
// Given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// After hoisting by the interpreter
// function learn() is hoisted
// dojo is defined as san jose
//console.log(dojo) logs san jose
// learn() is called 
// var dojo is hoisted in learn() scope 
//dojo is defined as seatle
//console.log(dojo) logs seattle
//dojo = burbank defines dojo as burbank
//consople.log(dojo) logs burbank
// console.log(dojo) outside of learn() scope logs sanjose

///////////////////////////////////////////
// #7
// Given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// After hoisting by the interpreter
//makeDojo(name, students) is hoisted
//console.log(makeDojo("Chicago", 65)); 
//const dojo = {}; declared dojo as an object
// dojo.name = name declares dojo.name to be chicago
// dojo.students = students declares dojo.students to be 65
//if(dojo.students > 50){
//            dojo.hiring = true; dojo.hiring becomes true
//return dojo returns dojo{
//          name: chicago
//          students: 65
//          hiring: true 
//}
//console.log(makeDojo("Berkeley", 0));
//const dojo = {}; declared dojo as an object
// dojo.name = name declares dojo.name to be berkley
// dojo.students = students declares dojo.students to be 0
//if(dojo.students > 50){
//            dojo.hiring = true; doesnt meet this condition we go on to else if
// else if(dojo.students <= 0){
 //           dojo = "closed for now";  throws error because dojo is const and cannot be changed